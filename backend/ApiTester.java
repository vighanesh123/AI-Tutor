import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class ApiTester {
    private static final String BASE_URL = "http://localhost:8080/api";
    private static final HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

    public static void main(String[] args) {
        System.out.println("=== AI Tutor API Testing ===");
        
        // Test user registration
        testUserRegistration();
        
        // Test user login
        testUserLogin();
        
        // Test invalid login
        testInvalidLogin();
        
        // Test logout
        testLogout();
        
        // Test token verification
        testTokenVerification();
    }

    private static void testUserRegistration() {
        System.out.println("\n1. Testing User Registration...");
        try {
            String requestBody = "{"
                + "\"name\": \"Test User\","
                + "\"email\": \"test@example.com\","
                + "\"password\": \"password123\""
                + "}";

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(BASE_URL + "/auth/register"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
            if (response.statusCode() == 201) {
                System.out.println("✅ Registration successful");
            } else {
                System.out.println("❌ Registration failed");
            }
        } catch (Exception e) {
            System.out.println("❌ Registration error: " + e.getMessage());
        }
    }

    private static void testUserLogin() {
        System.out.println("\n2. Testing User Login...");
        try {
            String requestBody = "{"
                + "\"email\": \"test@example.com\","
                + "\"password\": \"password123\""
                + "}";

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(BASE_URL + "/auth/login"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
            if (response.statusCode() == 200) {
                System.out.println("✅ Login successful");
            } else {
                System.out.println("❌ Login failed");
            }
        } catch (Exception e) {
            System.out.println("❌ Login error: " + e.getMessage());
        }
    }

    private static void testInvalidLogin() {
        System.out.println("\n3. Testing Invalid Login...");
        try {
            String requestBody = "{"
                + "\"email\": \"invalid@example.com\","
                + "\"password\": \"wrongpassword\""
                + "}";

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(BASE_URL + "/auth/login"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
            if (response.statusCode() == 401) {
                System.out.println("✅ Invalid login correctly rejected");
            } else {
                System.out.println("❌ Invalid login should return 401");
            }
        } catch (Exception e) {
            System.out.println("❌ Invalid login test error: " + e.getMessage());
        }
    }

    private static void testLogout() {
        System.out.println("\n4. Testing Logout...");
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(BASE_URL + "/auth/logout"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.noBody())
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
            if (response.statusCode() == 200) {
                System.out.println("✅ Logout successful");
            } else {
                System.out.println("❌ Logout failed");
            }
        } catch (Exception e) {
            System.out.println("❌ Logout error: " + e.getMessage());
        }
    }

    private static void testTokenVerification() {
        System.out.println("\n5. Testing Token Verification...");
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(BASE_URL + "/auth/verify"))
                    .header("Authorization", "Bearer invalid-token")
                    .GET()
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
            if (response.statusCode() == 401) {
                System.out.println("✅ Invalid token correctly rejected");
            } else {
                System.out.println("❌ Invalid token should return 401");
            }
        } catch (Exception e) {
            System.out.println("❌ Token verification error: " + e.getMessage());
        }
    }
}
