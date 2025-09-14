FROM maven:3.9.4-openjdk-17 AS build

WORKDIR /app

# Copy pom.xml first for better caching
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built jar from build stage
COPY --from=build /app/target/aitutor-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 5000

# Run the application
CMD ["java", "-jar", "app.jar"]
