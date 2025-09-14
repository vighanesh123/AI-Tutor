package com.aitutor.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.aitutor.repository")
public class MongoConfig {
    // Removed overly broad enum converters that were causing conflicts
    // Spring Boot's default enum handling should work fine
}
