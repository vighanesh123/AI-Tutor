package com.aitutor.service;

import com.aitutor.model.DailyActivity;
import com.aitutor.repository.DailyActivityRepository;
import com.aitutor.dto.ActivityTrackingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Service
public class DailyActivityService {

    @Autowired
    private DailyActivityRepository dailyActivityRepository;

    public void trackActivity(String userId, ActivityTrackingRequest request) {
        LocalDate date = LocalDate.parse(request.getDate(), DateTimeFormatter.ISO_LOCAL_DATE);
        
        DailyActivity activity = dailyActivityRepository.findByUserIdAndDate(userId, date)
                .orElse(new DailyActivity(userId, date));

        // Update activity based on type
        switch (request.getActivityType().toLowerCase()) {
            case "login":
                activity.setHasLogin(true);
                break;
            case "quiz":
                activity.setHasQuiz(true);
                activity.setQuizCount(activity.getQuizCount() + 1);
                break;
            case "tutor":
                activity.setHasTutor(true);
                activity.setTutorMessageCount(activity.getTutorMessageCount() + 1);
                break;
            case "notes":
                activity.setHasNotes(true);
                activity.setNotesCount(activity.getNotesCount() + 1);
                break;
        }

        // Store metadata if provided
        if (request.getMetadata() != null) {
            if (activity.getMetadata() == null) {
                activity.setMetadata(new HashMap<>());
            }
            activity.getMetadata().putAll(request.getMetadata());
        }

        dailyActivityRepository.save(activity);
    }

    public List<DailyActivity> getActivityData(String userId, LocalDate startDate, LocalDate endDate) {
        return dailyActivityRepository.findByUserIdAndDateBetweenOrderByDateAsc(userId, startDate, endDate);
    }

    public List<DailyActivity> getActiveActivityData(String userId, LocalDate startDate, LocalDate endDate) {
        return dailyActivityRepository.findActiveActivityByUserIdAndDateRange(userId, startDate, endDate);
    }

    public Map<String, Object> getActivityCalendarData(String userId, int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year, 12, 31);
        
        // Get all activities for the year (including inactive days)
        List<DailyActivity> allActivities = dailyActivityRepository.findByUserIdAndDateBetweenOrderByDateAsc(userId, startDate, endDate);
        
        // Get only active activities for stats
        List<DailyActivity> activeActivities = getActiveActivityData(userId, startDate, endDate);
        
        Map<String, Object> result = new HashMap<>();
        result.put("year", year);
        result.put("activities", allActivities); // Return all activities, not just active ones
        result.put("totalActiveDays", activeActivities.size());
        
        // Calculate streak data
        int currentStreak = calculateCurrentStreak(userId);
        int maxStreak = calculateMaxStreak(userId, startDate, endDate);
        
        result.put("currentStreak", currentStreak);
        result.put("maxStreak", maxStreak);
        
        return result;
    }

    private int calculateCurrentStreak(String userId) {
        LocalDate today = LocalDate.now();
        int streak = 0;
        LocalDate checkDate = today;
        
        while (true) {
            boolean hasActivity = dailyActivityRepository.findByUserIdAndDate(userId, checkDate)
                    .map(DailyActivity::hasAnyActivity)
                    .orElse(false);
            
            if (hasActivity) {
                streak++;
                checkDate = checkDate.minusDays(1);
            } else {
                break;
            }
        }
        
        return streak;
    }

    private int calculateMaxStreak(String userId, LocalDate startDate, LocalDate endDate) {
        List<DailyActivity> activities = getActiveActivityData(userId, startDate, endDate);
        
        if (activities.isEmpty()) {
            return 0;
        }
        
        int maxStreak = 1;
        int currentStreak = 1;
        
        for (int i = 1; i < activities.size(); i++) {
            LocalDate prevDate = activities.get(i - 1).getDate();
            LocalDate currentDate = activities.get(i).getDate();
            
            if (currentDate.equals(prevDate.plusDays(1))) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 1;
            }
        }
        
        return maxStreak;
    }
}
