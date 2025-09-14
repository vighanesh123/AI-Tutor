package com.aitutor.repository;

import com.aitutor.model.StudentProgress;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentProgressRepository extends MongoRepository<StudentProgress, String> {
    
    // Find progress by user ID
    Optional<StudentProgress> findByUserId(String userId);
    
    // Check if progress exists for user
    boolean existsByUserId(String userId);
    
    // Find users with study streaks above threshold
    @Query("{ 'currentStreak': { $gte: ?0 } }")
    List<StudentProgress> findUsersWithStreakAbove(Integer minStreak);
    
    // Find users who studied on a specific date
    @Query("{ 'studyDates': ?0 }")
    List<StudentProgress> findUsersWhoStudiedOnDate(LocalDate date);
    
    // Find top performers by average score
    @Query("{ 'averageScore': { $gte: ?0 } }")
    List<StudentProgress> findTopPerformers(Double minAverageScore);
    
    // Find users with total study time above threshold
    @Query("{ 'totalStudyTimeMinutes': { $gte: ?0 } }")
    List<StudentProgress> findUsersWithStudyTimeAbove(Long minStudyTimeMinutes);
    
    // Find users who completed minimum number of quizzes
    @Query("{ 'totalQuizzesCompleted': { $gte: ?0 } }")
    List<StudentProgress> findUsersWithQuizzesAbove(Integer minQuizzes);
}
