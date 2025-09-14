package com.aitutor.controller;

import com.aitutor.dto.AuthResponse;
import com.aitutor.dto.LoginRequest;
import com.aitutor.dto.RegisterRequest;
import com.aitutor.model.User;
import com.aitutor.service.AuthService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest registerRequest) {
        logger.info(" REGISTER ENDPOINT HIT - Email: {}", registerRequest.getEmail());
        try {
            logger.info("Calling authService.register...");
            AuthResponse response = authService.register(registerRequest);
            logger.info(" Registration successful for: {}", registerRequest.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            logger.error(" Registration failed - IllegalArgumentException: {}", e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error(" Registration failed - Exception: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Registration failed: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        logger.info("🔥 LOGIN ENDPOINT HIT - Email: {}", loginRequest.getEmail());
        try {
            logger.info("Calling authService.login...");
            AuthResponse response = authService.login(loginRequest);
            logger.info("✅ Login successful for: {}", loginRequest.getEmail());
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            logger.error("❌ Login failed - IllegalArgumentException: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("❌ Login failed - Exception: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Login failed. Please try again."));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@RequestHeader("Authorization") String token) {
        try {
            User user = authService.getCurrentUser(token);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Invalid token"));
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestHeader("Authorization") String token) {
        try {
            AuthResponse response = authService.refreshToken(token);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Token refresh failed"));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        // Since we're using stateless JWT, logout is handled client-side
        return ResponseEntity.ok(new SuccessResponse("Logged out successfully"));
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyToken(@RequestHeader("Authorization") String token) {
        try {
            boolean isValid = authService.verifyToken(token);
            if (isValid) {
                return ResponseEntity.ok(new SuccessResponse("Token is valid"));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ErrorResponse("Invalid token"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Token verification failed"));
        }
    }

    // Helper classes for responses
    public static class ErrorResponse {
        private String message;
        private boolean success = false;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }
        public boolean isSuccess() { return success; }
    }

    public static class SuccessResponse {
        private String message;
        private boolean success = true;

        public SuccessResponse(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }
        public boolean isSuccess() { return success; }
    }
}
