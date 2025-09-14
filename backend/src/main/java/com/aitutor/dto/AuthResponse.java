package com.aitutor.dto;

import com.aitutor.model.User;
import com.aitutor.model.Role;

public class AuthResponse {
    private String token;
    private String type = "Bearer";
    private UserInfo user;

    // Constructors
    public AuthResponse() {}

    public AuthResponse(String token, User user) {
        this.token = token;
        this.user = new UserInfo(user.getId(), user.getName(), user.getEmail(), user.getRoles());
    }

    // Getters and Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public UserInfo getUser() {
        return user;
    }

    public void setUser(UserInfo user) {
        this.user = user;
    }

    // Inner class for user info
    public static class UserInfo {
        private String id;
        private String name;
        private String email;
        private java.util.Set<Role> roles;

        public UserInfo() {}

        public UserInfo(String id, String name, String email, java.util.Set<Role> roles) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.roles = roles;
        }

        // Getters and Setters
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public java.util.Set<Role> getRoles() {
            return roles;
        }

        public void setRoles(java.util.Set<Role> roles) {
            this.roles = roles;
        }
    }
}
