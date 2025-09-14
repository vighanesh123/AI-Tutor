# AI Tutor - Full Stack Application

A modern AI-powered tutoring platform built with React.js, Spring Boot, and MongoDB.

## 🚀 Project Overview

This application has been converted from a vanilla HTML/Node.js setup to a modern full-stack architecture:

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Spring Boot 3.x + Java 17
- **Database**: MongoDB Atlas
- **Authentication**: JWT-based security
- **State Management**: React Context API

## 📁 Project Structure

```
aitutor-fullstack/
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/com/aitutor/
│   │   ├── controller/         # REST Controllers
│   │   ├── dto/               # Data Transfer Objects
│   │   ├── model/             # MongoDB Entities
│   │   ├── service/           # Business Logic
│   │   ├── repository/        # Data Access Layer
│   │   └── config/            # Configuration Classes
│   ├── src/main/resources/
│   │   └── application.yml    # Spring Boot Configuration
│   └── pom.xml               # Maven Dependencies
├── frontend/                  # React Frontend
│   ├── src/
│   │   ├── components/        # React Components
│   │   ├── pages/            # Page Components
│   │   ├── services/         # API Services
│   │   ├── context/          # React Context
│   │   ├── types/            # TypeScript Types
│   │   └── utils/            # Utility Functions
│   ├── public/               # Static Assets
│   ├── package.json          # npm Dependencies
│   └── tailwind.config.js    # Tailwind Configuration
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Modern icon library
- **Chart.js** - Data visualization

### Backend
- **Spring Boot 3.2** - Modern Java framework
- **Spring Security** - Authentication & authorization
- **Spring Data MongoDB** - Database integration
- **JWT (JSON Web Tokens)** - Stateless authentication
- **Bean Validation** - Request validation
- **Maven** - Dependency management

### Database
- **MongoDB Atlas** - Cloud database service
- **Pre-configured connection** to existing cluster

## 🚀 Quick Start

### Prerequisites
- **Java 17+** (for backend)
- **Node.js 18+** (for frontend)
- **Maven 3.6+** (for backend)
- **MongoDB Atlas account** (already configured)

### 1. Start Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 2. Start Frontend (React)

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration (`application.yml`)

```yaml
spring:
  data:
    mongodb:
      uri: mongodb+srv://vighneshdabare2004:2JdbEcZ1QHDfX399@cluster0.t11fhsz.mongodb.net/aitutor?retryWrites=true&w=majority&appName=Cluster0
      database: aitutor

  security:
    jwt:
      secret-key: ${JWT_SECRET:mySecretKey123456789012345678901234567890AITutor2024}
      expiration: 86400000 # 24 hours

server:
  port: 8080
```

### Frontend Configuration (Environment Variables)

Create a `.env` file in the frontend directory:

```bash
REACT_APP_API_URL=http://localhost:8080/api
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify token

### Features (To be implemented)
- `GET /api/quizzes` - Get available quizzes
- `POST /api/quiz-attempts` - Start quiz attempt
- `GET /api/notes` - Get user notes
- `POST /api/notes` - Create new note
- `GET /api/progress` - Get user progress

## 🎨 Features

### ✅ Completed
- [x] Modern React + TypeScript setup
- [x] Tailwind CSS configuration
- [x] JWT Authentication system
- [x] MongoDB integration
- [x] Protected routes
- [x] Responsive design
- [x] Loading states
- [x] Error handling

### 🔄 In Progress
- [ ] Quiz system implementation
- [ ] AI Tutor chat interface
- [ ] Notes management
- [ ] Progress tracking
- [ ] Dashboard analytics

## 🎯 Key Improvements

1. **Modern Tech Stack**: Upgraded from vanilla HTML/JS to React + TypeScript
2. **Better Architecture**: Separated frontend and backend concerns
3. **Type Safety**: Full TypeScript support with proper typing
4. **Authentication**: Secure JWT-based authentication
5. **Responsive Design**: Mobile-first approach with Tailwind CSS
6. **Code Organization**: Modular component structure
7. **State Management**: React Context for global state
8. **API Integration**: Axios-based HTTP client with interceptors

## 🔐 Security Features

- **JWT Authentication**: Stateless authentication with automatic token refresh
- **Protected Routes**: Client-side route protection
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: Both client and server-side validation
- **Password Security**: BCrypt hashing (backend implementation pending)

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** (1920px+)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🧪 Testing

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
mvn test
```

## 📦 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Build
```bash
cd backend
mvn clean package
```

### Docker Deployment (Optional)
```bash
# Backend
cd backend
docker build -t aitutor-backend .

# Frontend
cd frontend
docker build -t aitutor-frontend .
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Original codebase**: Converted from vanilla HTML/Node.js application
- **MongoDB Atlas**: Database hosting
- **Spring Boot**: Backend framework
- **React**: Frontend library
- **Tailwind CSS**: Styling framework

## 📞 Support

For any questions or issues:
- Create an issue on GitHub
- Check the documentation
- Review the API endpoints

---

**Status**: ✅ Converted to React + Spring Boot + MongoDB
**Last Updated**: August 2024
