package com.aitutor.controller;

import com.aitutor.model.QuizResult;
import com.aitutor.model.StudentProgress;
import com.aitutor.service.ProgressService;
import com.aitutor.service.DailyActivityService;
import com.aitutor.dto.ActivityTrackingRequest;
import com.aitutor.repository.QuizResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "http://localhost:3000")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @Autowired
    private DailyActivityService dailyActivityService;

    @Autowired
    private QuizResultRepository quizResultRepository;

    /**
     * Get student progress overview
     */
    @GetMapping("/overview")
    public ResponseEntity<StudentProgress> getProgressOverview(Authentication authentication) {
        String userId = authentication.getName();
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        return ResponseEntity.ok(progress);
    }

    /**
     * Get recent quiz results
     */
    @GetMapping("/recent-results")
    public ResponseEntity<List<QuizResult>> getRecentResults(Authentication authentication) {
        String userId = authentication.getName();
        List<QuizResult> recentResults = quizResultRepository.findTop10ByUserIdOrderByCompletedAtDesc(userId);
        return ResponseEntity.ok(recentResults);
    }

    /**
     * Get subject-wise progress
     */
    @GetMapping("/subjects")
    public ResponseEntity<Map<String, StudentProgress.SubjectProgress>> getSubjectProgress(Authentication authentication) {
        String userId = authentication.getName();
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        return ResponseEntity.ok(progress.getSubjectProgress());
    }

    /**
     * Get monthly activity for the last 6 months
     */
    @GetMapping("/monthly-activity")
    public ResponseEntity<List<StudentProgress.MonthlyActivity>> getMonthlyActivity(Authentication authentication) {
        String userId = authentication.getName();
        List<StudentProgress.MonthlyActivity> monthlyActivity = progressService.getRecentMonthlyActivity(userId);
        return ResponseEntity.ok(monthlyActivity);
    }

    /**
     * Get study calendar for a specific month
     */
    @GetMapping("/calendar")
    public ResponseEntity<List<LocalDate>> getStudyCalendar(
            Authentication authentication,
            @RequestParam int year,
            @RequestParam int month) {
        String userId = authentication.getName();
        List<LocalDate> studyDates = progressService.getStudyCalendar(userId, year, month);
        return ResponseEntity.ok(studyDates);
    }

    /**
     * Get achievements
     */
    @GetMapping("/achievements")
    public ResponseEntity<List<StudentProgress.Achievement>> getAchievements(Authentication authentication) {
        String userId = authentication.getName();
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        return ResponseEntity.ok(progress.getAchievements());
    }

    /**
     * Get quiz results by subject
     */
    @GetMapping("/results/subject/{subject}")
    public ResponseEntity<List<QuizResult>> getResultsBySubject(
            Authentication authentication,
            @PathVariable String subject) {
        String userId = authentication.getName();
        List<QuizResult> results = quizResultRepository.findByUserIdAndSubjectOrderByCompletedAtDesc(userId, subject);
        return ResponseEntity.ok(results);
    }

    /**
     * Get statistics summary
     */
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStatistics(Authentication authentication) {
        String userId = authentication.getName();
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        
        Map<String, Object> stats = Map.of(
            "totalStudyTimeHours", progress.getTotalStudyTimeMinutes() / 60.0,
            "totalQuizzesCompleted", progress.getTotalQuizzesCompleted(),
            "averageScore", progress.getAverageScore(),
            "currentStreak", progress.getCurrentStreak(),
            "longestStreak", progress.getLongestStreak(),
            "totalSubjects", progress.getSubjectProgress() != null ? progress.getSubjectProgress().size() : 0,
            "earnedAchievements", progress.getAchievements() != null ? 
                progress.getAchievements().stream().mapToLong(a -> a.getEarned() ? 1 : 0).sum() : 0
        );
        
        return ResponseEntity.ok(stats);
    }

    /**
     * Submit quiz result and update progress
     */
    @PostMapping("/submit-result")
    public ResponseEntity<StudentProgress> submitQuizResult(
            Authentication authentication,
            @RequestBody QuizResult quizResult) {
        String userId = authentication.getName();
        quizResult.setUserId(userId);
        
        // Save quiz result
        QuizResult savedResult = quizResultRepository.save(quizResult);
        
        // Update progress
        StudentProgress updatedProgress = progressService.updateProgressAfterQuiz(userId, savedResult);
        
        return ResponseEntity.ok(updatedProgress);
    }

    /**
     * Get performance trends
     */
    @GetMapping("/trends")
    public ResponseEntity<Map<String, Object>> getPerformanceTrends(Authentication authentication) {
        String userId = authentication.getName();
        List<QuizResult> recentResults = quizResultRepository.findTop10ByUserIdOrderByCompletedAtDesc(userId);
        
        // Calculate trends
        double averageScore = recentResults.stream()
                .mapToDouble(QuizResult::getScore)
                .average()
                .orElse(0.0);
        
        long totalTime = recentResults.stream()
                .mapToLong(QuizResult::getTimeTakenSeconds)
                .sum();
        
        Map<String, Object> trends = Map.of(
            "recentAverageScore", Math.round(averageScore * 100.0) / 100.0,
            "totalRecentTime", totalTime / 60, // in minutes
            "improvementTrend", calculateImprovementTrend(recentResults),
            "strongSubjects", getStrongSubjects(userId),
            "weakSubjects", getWeakSubjects(userId)
        );
        
        return ResponseEntity.ok(trends);
    }

    /**
     * Calculate improvement trend
     */
    private String calculateImprovementTrend(List<QuizResult> results) {
        if (results.size() < 2) return "insufficient_data";
        
        // Compare first half with second half of recent results
        int midPoint = results.size() / 2;
        double firstHalfAvg = results.subList(0, midPoint).stream()
                .mapToDouble(QuizResult::getScore)
                .average()
                .orElse(0.0);
        
        double secondHalfAvg = results.subList(midPoint, results.size()).stream()
                .mapToDouble(QuizResult::getScore)
                .average()
                .orElse(0.0);
        
        if (firstHalfAvg > secondHalfAvg + 5) return "improving";
        else if (secondHalfAvg > firstHalfAvg + 5) return "declining";
        else return "stable";
    }

    /**
     * Get strong subjects (average score > 80%)
     */
    private List<String> getStrongSubjects(String userId) {
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        if (progress.getSubjectProgress() == null) return List.of();
        
        return progress.getSubjectProgress().entrySet().stream()
                .filter(entry -> entry.getValue().getAverageScore() > 80.0)
                .map(Map.Entry::getKey)
                .toList();
    }

    /**
     * Get weak subjects (average score < 60%)
     */
    private List<String> getWeakSubjects(String userId) {
        StudentProgress progress = progressService.getOrCreateProgress(userId);
        if (progress.getSubjectProgress() == null) return List.of();
        
        return progress.getSubjectProgress().entrySet().stream()
                .filter(entry -> entry.getValue().getAverageScore() < 60.0)
                .map(Map.Entry::getKey)
                .toList();
    }

    /**
     * Track daily activity (login, quiz, tutor, notes)
     */
    @PostMapping("/track-activity")
    public ResponseEntity<String> trackActivity(@RequestBody ActivityTrackingRequest request, Authentication authentication) {
        String userId = authentication.getName();
        dailyActivityService.trackActivity(userId, request);
        return ResponseEntity.ok("Activity tracked successfully");
    }

    /**
     * Get activity calendar data for a specific year
     */
    @GetMapping("/activity-calendar/{year}")
    public ResponseEntity<Map<String, Object>> getActivityCalendar(@PathVariable int year, Authentication authentication) {
        String userId = authentication.getName();
        Map<String, Object> calendarData = dailyActivityService.getActivityCalendarData(userId, year);
        return ResponseEntity.ok(calendarData);
    }

    /**
     * Get activity calendar data for current year (default)
     */
    @GetMapping("/activity-calendar")
    public ResponseEntity<Map<String, Object>> getCurrentYearActivityCalendar(Authentication authentication) {
        String userId = authentication.getName();
        int currentYear = LocalDate.now().getYear();
        Map<String, Object> calendarData = dailyActivityService.getActivityCalendarData(userId, currentYear);
        return ResponseEntity.ok(calendarData);
    }
}
