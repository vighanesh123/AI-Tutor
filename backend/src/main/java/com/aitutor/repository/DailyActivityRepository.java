package com.aitutor.repository;

import com.aitutor.model.DailyActivity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface DailyActivityRepository extends MongoRepository<DailyActivity, String> {
    
    Optional<DailyActivity> findByUserIdAndDate(String userId, LocalDate date);
    
    List<DailyActivity> findByUserIdAndDateBetweenOrderByDateAsc(String userId, LocalDate startDate, LocalDate endDate);
    
    List<DailyActivity> findByUserIdOrderByDateDesc(String userId);
    
    @Query("{ 'userId': ?0, 'date': { $gte: ?1, $lte: ?2 }, $or: [{'hasLogin': true}, {'hasQuiz': true}, {'hasTutor': true}, {'hasNotes': true}] }")
    List<DailyActivity> findActiveActivityByUserIdAndDateRange(String userId, LocalDate startDate, LocalDate endDate);
    
    long countByUserIdAndDateBetween(String userId, LocalDate startDate, LocalDate endDate);
}
