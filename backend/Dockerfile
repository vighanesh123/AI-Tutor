FROM openjdk:17-jdk-slim

WORKDIR /app

# Install Maven
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy pom.xml first for better caching
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# List contents to debug
RUN ls -la target/

# Copy JAR to a known location
RUN cp target/*.jar app.jar

# Expose port
EXPOSE 5000

# Run the application
CMD ["java", "-jar", "app.jar"]
