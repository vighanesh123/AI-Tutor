package com.aitutor.config;

import com.aitutor.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(@org.springframework.lang.NonNull HttpServletRequest request, 
                                  @org.springframework.lang.NonNull HttpServletResponse response, 
                                  @org.springframework.lang.NonNull FilterChain filterChain) throws ServletException, IOException {
        
        final String requestURI = request.getRequestURI();
        final String authorizationHeader = request.getHeader("Authorization");
        
        logger.debug("🔍 JWT Filter processing: {} {}", request.getMethod(), requestURI);
        
        String email = null;
        String jwt = null;
        
        // Extract JWT token from Authorization header
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            logger.debug("🔑 JWT token found in Authorization header");
            try {
                email = jwtUtil.extractEmail(jwt);
                logger.debug("📧 Extracted email from JWT: {}", email);
            } catch (Exception e) {
                logger.error("❌ Error extracting email from JWT token: " + e.getMessage());
            }
        } else {
            logger.debug("🚫 No Authorization header or Bearer token found");
        }
        
        // Validate token and set authentication
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
                logger.debug("👤 Loaded user details for: {}", email);
                
                if (jwtUtil.validateToken(jwt, email)) {
                    UsernamePasswordAuthenticationToken authToken = 
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                    logger.info("✅ JWT authentication successful for: {} on {}", email, requestURI);
                } else {
                    logger.warn("❌ JWT token validation failed for: {}", email);
                }
            } catch (Exception e) {
                logger.error("❌ Error validating JWT token: " + e.getMessage());
            }
        }
        
        filterChain.doFilter(request, response);
    }
}
