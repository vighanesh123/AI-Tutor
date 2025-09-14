package com.aitutor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class AiTutorApplication {
    public static void main(String[] args) {
        SpringApplication.run(AiTutorApplication.class, args);
    }
}
