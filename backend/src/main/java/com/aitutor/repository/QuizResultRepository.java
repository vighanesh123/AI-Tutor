package com.aitutor.repository;

import com.aitutor.model.QuizResult;
import com.aitutor.model.Quiz;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface QuizResultRepository extends MongoRepository<QuizResult, String> {
    
    // Find all quiz results for a specific user
    List<QuizResult> findByUserIdOrderByCompletedAtDesc(String userId);
    
    // Find quiz results by user and subject
    List<QuizResult> findByUserIdAndSubjectOrderByCompletedAtDesc(String userId, String subject);
    
    // Find quiz results by user and difficulty
    List<QuizResult> findByUserIdAndDifficultyOrderByCompletedAtDesc(String userId, Quiz.Difficulty difficulty);
    
    // Find quiz results by user, subject, and difficulty
    List<QuizResult> findByUserIdAndSubjectAndDifficultyOrderByCompletedAtDesc(String userId, String subject, Quiz.Difficulty difficulty);
    
    // Find quiz results within a date range
    List<QuizResult> findByUserIdAndCompletedAtBetweenOrderByCompletedAtDesc(String userId, LocalDateTime startDate, LocalDateTime endDate);
    
    // Count total quizzes completed by user
    long countByUserId(String userId);
    
    // Count quizzes completed by user and subject
    long countByUserIdAndSubject(String userId, String subject);
    
    // Get average score for a user
    @Query("{ 'userId': ?0 }")
    List<QuizResult> findByUserIdForAverageCalculation(String userId);
    
    // Get average score for a user by subject
    @Query("{ 'userId': ?0, 'subject': ?1 }")
    List<QuizResult> findByUserIdAndSubjectForAverageCalculation(String userId, String subject);
    
    // Find recent quiz results (last N results)
    List<QuizResult> findTop10ByUserIdOrderByCompletedAtDesc(String userId);
    
    // Find quiz results for streak calculation (ordered by date)
    @Query("{ 'userId': ?0 }")
    List<QuizResult> findByUserIdOrderByCompletedAtAsc(String userId);
    
    // Find quiz results by month and year
    @Query("{ 'userId': ?0, 'completedAt': { $gte: ?1, $lt: ?2 } }")
    List<QuizResult> findByUserIdAndMonth(String userId, LocalDateTime startOfMonth, LocalDateTime endOfMonth);
    
    // Find best score for a subject
    QuizResult findTopByUserIdAndSubjectOrderByScoreDesc(String userId, String subject);
    
    // Find quiz results with score above threshold
    List<QuizResult> findByUserIdAndScoreGreaterThanEqualOrderByCompletedAtDesc(String userId, Double minScore);
}
