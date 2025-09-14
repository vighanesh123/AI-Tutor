package com.aitutor.service;

import com.aitutor.dto.AuthResponse;
import com.aitutor.dto.LoginRequest;
import com.aitutor.dto.RegisterRequest;
import com.aitutor.model.User;
import com.aitutor.model.Role;
import com.aitutor.repository.UserRepository;
import com.aitutor.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest registerRequest) {
        // Check if user already exists
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        // Create new user
        User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setEnabled(true);
        user.getRoles().add(Role.STUDENT); // Set default role

        // Save user
        User savedUser = userRepository.save(user);

        // Generate JWT token
        String token = jwtUtil.generateToken(savedUser.getEmail(), savedUser.getId());

        return new AuthResponse(token, savedUser);
    }

    public AuthResponse login(LoginRequest loginRequest) {
        // Find user by email
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        if (userOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        User user = userOptional.get();

        // Check if user is enabled
        if (!user.isEnabled()) {
            throw new IllegalArgumentException("Account is disabled");
        }

        // Verify password
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        // Update last login time
        user.setLastLoginAt(LocalDateTime.now());
        userRepository.save(user);

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail(), user.getId());

        return new AuthResponse(token, user);
    }

    public User getCurrentUser(String authHeader) {
        String token = jwtUtil.extractTokenFromHeader(authHeader);
        String email = jwtUtil.extractEmail(token);
        
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();
        if (!jwtUtil.validateToken(token, user.getEmail())) {
            throw new RuntimeException("Invalid token");
        }

        return user;
    }

    public AuthResponse refreshToken(String authHeader) {
        String token = jwtUtil.extractTokenFromHeader(authHeader);
        String email = jwtUtil.extractEmail(token);
        String userId = jwtUtil.extractUserId(token);

        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();
        String newToken = jwtUtil.generateToken(user.getEmail(), user.getId());

        return new AuthResponse(newToken, user);
    }

    public boolean verifyToken(String authHeader) {
        try {
            String token = jwtUtil.extractTokenFromHeader(authHeader);
            String email = jwtUtil.extractEmail(token);
            
            Optional<User> userOptional = userRepository.findByEmail(email);
            if (userOptional.isEmpty()) {
                return false;
            }

            return jwtUtil.validateToken(token, email);
        } catch (Exception e) {
            return false;
        }
    }
}
