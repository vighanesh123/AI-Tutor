package com.aitutor.service;

import com.aitutor.model.QuizResult;
import com.aitutor.model.StudentProgress;
import com.aitutor.repository.QuizResultRepository;
import com.aitutor.repository.StudentProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProgressService {

    @Autowired
    private StudentProgressRepository progressRepository;

    @Autowired
    private QuizResultRepository quizResultRepository;

    /**
     * Get or create student progress for a user
     */
    public StudentProgress getOrCreateProgress(String userId) {
        return progressRepository.findByUserId(userId)
                .orElseGet(() -> {
                    StudentProgress progress = new StudentProgress(userId);
                    initializeAchievements(progress);
                    return progressRepository.save(progress);
                });
    }

    /**
     * Update progress after quiz completion
     */
    public StudentProgress updateProgressAfterQuiz(String userId, QuizResult quizResult) {
        StudentProgress progress = getOrCreateProgress(userId);
        
        // Update overall statistics
        progress.setTotalQuizzesCompleted(progress.getTotalQuizzesCompleted() + 1);
        progress.setTotalStudyTimeMinutes(progress.getTotalStudyTimeMinutes() + (quizResult.getTimeTakenSeconds() / 60));
        
        // Update average score
        updateAverageScore(progress, userId);
        
        // Update streak
        updateStreak(progress);
        
        // Update subject progress
        updateSubjectProgress(progress, quizResult);
        
        // Update monthly activity
        updateMonthlyActivity(progress, quizResult);
        
        // Add study date
        addStudyDate(progress, LocalDate.now());
        
        // Check and update achievements
        checkAchievements(progress, userId);
        
        return progressRepository.save(progress);
    }

    /**
     * Calculate and update average score
     */
    private void updateAverageScore(StudentProgress progress, String userId) {
        List<QuizResult> allResults = quizResultRepository.findByUserIdForAverageCalculation(userId);
        if (!allResults.isEmpty()) {
            double average = allResults.stream()
                    .mapToDouble(QuizResult::getScore)
                    .average()
                    .orElse(0.0);
            progress.setAverageScore(Math.round(average * 100.0) / 100.0);
        }
    }

    /**
     * Update study streak
     */
    private void updateStreak(StudentProgress progress) {
        LocalDate today = LocalDate.now();
        LocalDate lastStudyDate = progress.getLastStudyDate();
        
        if (lastStudyDate == null) {
            // First time studying
            progress.setCurrentStreak(1);
            progress.setLongestStreak(1);
        } else if (lastStudyDate.equals(today)) {
            // Already studied today, no change to streak
            return;
        } else if (lastStudyDate.equals(today.minusDays(1))) {
            // Studied yesterday, continue streak
            progress.setCurrentStreak(progress.getCurrentStreak() + 1);
            if (progress.getCurrentStreak() > progress.getLongestStreak()) {
                progress.setLongestStreak(progress.getCurrentStreak());
            }
        } else {
            // Streak broken, reset to 1
            progress.setCurrentStreak(1);
        }
        
        progress.setLastStudyDate(today);
    }

    /**
     * Update subject-specific progress
     */
    private void updateSubjectProgress(StudentProgress progress, QuizResult quizResult) {
        Map<String, StudentProgress.SubjectProgress> subjectProgressMap = 
                progress.getSubjectProgress() != null ? progress.getSubjectProgress() : new HashMap<>();
        
        String subject = quizResult.getSubject();
        StudentProgress.SubjectProgress subjectProgress = subjectProgressMap.getOrDefault(
                subject, new StudentProgress.SubjectProgress(subject));
        
        // Update subject statistics
        subjectProgress.setQuizzesCompleted(subjectProgress.getQuizzesCompleted() + 1);
        subjectProgress.setStudyTimeMinutes(subjectProgress.getStudyTimeMinutes() + (quizResult.getTimeTakenSeconds() / 60));
        subjectProgress.setLastStudied(LocalDateTime.now());
        
        // Calculate subject average score
        List<QuizResult> subjectResults = quizResultRepository.findByUserIdAndSubjectForAverageCalculation(
                progress.getUserId(), subject);
        if (!subjectResults.isEmpty()) {
            double average = subjectResults.stream()
                    .mapToDouble(QuizResult::getScore)
                    .average()
                    .orElse(0.0);
            subjectProgress.setAverageScore(Math.round(average * 100.0) / 100.0);
        }
        
        subjectProgressMap.put(subject, subjectProgress);
        progress.setSubjectProgress(subjectProgressMap);
    }

    /**
     * Update monthly activity
     */
    private void updateMonthlyActivity(StudentProgress progress, QuizResult quizResult) {
        List<StudentProgress.MonthlyActivity> monthlyActivity = 
                progress.getMonthlyActivity() != null ? progress.getMonthlyActivity() : new ArrayList<>();
        
        LocalDateTime completedAt = quizResult.getCompletedAt();
        int year = completedAt.getYear();
        int month = completedAt.getMonthValue();
        
        // Find or create monthly activity record
        StudentProgress.MonthlyActivity activity = monthlyActivity.stream()
                .filter(ma -> ma.getYear().equals(year) && ma.getMonth().equals(month))
                .findFirst()
                .orElseGet(() -> {
                    StudentProgress.MonthlyActivity newActivity = new StudentProgress.MonthlyActivity(year, month);
                    monthlyActivity.add(newActivity);
                    return newActivity;
                });
        
        activity.setQuizzesCompleted(activity.getQuizzesCompleted() + 1);
        activity.setStudyTimeMinutes(activity.getStudyTimeMinutes() + (quizResult.getTimeTakenSeconds() / 60));
        
        progress.setMonthlyActivity(monthlyActivity);
    }

    /**
     * Add study date to calendar
     */
    private void addStudyDate(StudentProgress progress, LocalDate date) {
        List<LocalDate> studyDates = progress.getStudyDates() != null ? 
                new ArrayList<>(progress.getStudyDates()) : new ArrayList<>();
        
        if (!studyDates.contains(date)) {
            studyDates.add(date);
            progress.setStudyDates(studyDates);
        }
    }

    /**
     * Initialize default achievements
     */
    private void initializeAchievements(StudentProgress progress) {
        List<StudentProgress.Achievement> achievements = new ArrayList<>();
        
        achievements.add(new StudentProgress.Achievement("first_quiz", "First Quiz Completed", 
                "Completed your first quiz", "milestone"));
        achievements.add(new StudentProgress.Achievement("java_master", "Java Master", 
                "Score 90% or higher on 5 Java quizzes", "subject"));
        achievements.add(new StudentProgress.Achievement("weekly_warrior", "Weekly Warrior", 
                "Study for 7 consecutive days", "streak"));
        achievements.add(new StudentProgress.Achievement("algorithm_expert", "Algorithm Expert", 
                "Complete 10 algorithm quizzes", "subject"));
        achievements.add(new StudentProgress.Achievement("study_streak_30", "Study Streak", 
                "Maintain a 30-day study streak", "streak"));
        achievements.add(new StudentProgress.Achievement("perfect_score", "Perfect Score", 
                "Get 100% on any quiz", "performance"));
        achievements.add(new StudentProgress.Achievement("century_club", "Century Club", 
                "Complete 100 quizzes", "milestone"));
        achievements.add(new StudentProgress.Achievement("time_master", "Time Master", 
                "Study for 100 hours total", "time"));
        
        progress.setAchievements(achievements);
    }

    /**
     * Check and update achievements
     */
    private void checkAchievements(StudentProgress progress, String userId) {
        List<StudentProgress.Achievement> achievements = progress.getAchievements();
        if (achievements == null) return;
        
        for (StudentProgress.Achievement achievement : achievements) {
            if (achievement.getEarned()) continue;
            
            boolean earned = false;
            LocalDateTime now = LocalDateTime.now();
            
            switch (achievement.getId()) {
                case "first_quiz":
                    earned = progress.getTotalQuizzesCompleted() >= 1;
                    break;
                case "java_master":
                    earned = checkJavaMaster(userId);
                    break;
                case "weekly_warrior":
                    earned = progress.getCurrentStreak() >= 7;
                    break;
                case "algorithm_expert":
                    earned = checkAlgorithmExpert(userId);
                    break;
                case "study_streak_30":
                    earned = progress.getCurrentStreak() >= 30;
                    break;
                case "perfect_score":
                    earned = checkPerfectScore(userId);
                    break;
                case "century_club":
                    earned = progress.getTotalQuizzesCompleted() >= 100;
                    break;
                case "time_master":
                    earned = progress.getTotalStudyTimeMinutes() >= 6000; // 100 hours
                    break;
            }
            
            if (earned) {
                achievement.setEarned(true);
                achievement.setEarnedAt(now);
            }
        }
    }

    /**
     * Check Java Master achievement
     */
    private boolean checkJavaMaster(String userId) {
        List<QuizResult> javaResults = quizResultRepository.findByUserIdAndSubjectOrderByCompletedAtDesc(userId, "Java");
        return javaResults.stream()
                .filter(result -> result.getScore() >= 90.0)
                .count() >= 5;
    }

    /**
     * Check Algorithm Expert achievement
     */
    private boolean checkAlgorithmExpert(String userId) {
        long algorithmQuizzes = quizResultRepository.countByUserIdAndSubject(userId, "Data Structures & Algorithms");
        return algorithmQuizzes >= 10;
    }

    /**
     * Check Perfect Score achievement
     */
    private boolean checkPerfectScore(String userId) {
        List<QuizResult> results = quizResultRepository.findByUserIdAndScoreGreaterThanEqualOrderByCompletedAtDesc(userId, 100.0);
        return !results.isEmpty();
    }

    /**
     * Get monthly activity for the last 6 months
     */
    public List<StudentProgress.MonthlyActivity> getRecentMonthlyActivity(String userId) {
        StudentProgress progress = getOrCreateProgress(userId);
        List<StudentProgress.MonthlyActivity> allActivity = progress.getMonthlyActivity();
        
        if (allActivity == null) return new ArrayList<>();
        
        // Get last 6 months
        LocalDate now = LocalDate.now();
        List<StudentProgress.MonthlyActivity> recentActivity = new ArrayList<>();
        
        for (int i = 5; i >= 0; i--) {
            YearMonth targetMonth = YearMonth.from(now.minusMonths(i));
            StudentProgress.MonthlyActivity activity = allActivity.stream()
                    .filter(ma -> ma.getYear().equals(targetMonth.getYear()) && 
                                 ma.getMonth().equals(targetMonth.getMonthValue()))
                    .findFirst()
                    .orElse(new StudentProgress.MonthlyActivity(targetMonth.getYear(), targetMonth.getMonthValue()));
            recentActivity.add(activity);
        }
        
        return recentActivity;
    }

    /**
     * Get study calendar for current month
     */
    public List<LocalDate> getStudyCalendar(String userId, int year, int month) {
        StudentProgress progress = getOrCreateProgress(userId);
        List<LocalDate> studyDates = progress.getStudyDates();
        
        if (studyDates == null) return new ArrayList<>();
        
        return studyDates.stream()
                .filter(date -> date.getYear() == year && date.getMonthValue() == month)
                .collect(Collectors.toList());
    }
}
