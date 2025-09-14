# AI Tutor Deployment Guide

## 🚀 Backend Deployment (Render)

### Prerequisites
1. Create a [Render](https://render.com) account
2. Have your GitHub repository ready

### Steps
1. **Connect Repository**
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as root directory

2. **Configure Build Settings**
   - **Build Command**: `./mvnw clean package -DskipTests`
   - **Start Command**: `java -jar target/aitutor-0.0.1-SNAPSHOT.jar`
   - **Environment**: `Java`

3. **Set Environment Variables**
   ```
   SPRING_PROFILES_ACTIVE=prod
   JWT_SECRET=your-jwt-secret-key-here
   GEMINI_API_KEY=your-gemini-api-key-here
   MONGODB_URI=your-mongodb-connection-string
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```

4. **Database Setup**
   - Create MongoDB Atlas cluster or use Render's MongoDB
   - Copy connection string to `MONGODB_URI`

### Health Check
- Endpoint: `/api/health`
- Should return: `{"status": "UP", "service": "AI Tutor Backend"}`

---

## 🌐 Frontend Deployment (Vercel)

### Prerequisites
1. Create a [Vercel](https://vercel.com) account
2. Install Vercel CLI: `npm i -g vercel`

### Option 1: Vercel Dashboard
1. **Import Project**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import from GitHub
   - Select your repository

2. **Configure Settings**
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

3. **Environment Variables**
   ```
   REACT_APP_API_URL=https://your-render-app.onrender.com/api
   GENERATE_SOURCEMAP=false
   ```

### Option 2: Vercel CLI
```bash
cd frontend
vercel --prod
```

---

## 🔧 Configuration Files Created

### Backend Files
- `backend/render.yaml` - Render deployment config
- `backend/Dockerfile` - Docker configuration
- `backend/src/main/resources/application-prod.properties` - Production settings
- `backend/src/main/java/com/aitutor/controller/HealthController.java` - Health check endpoint

### Frontend Files
- `vercel.json` - Vercel deployment config
- `frontend/.env.production` - Production environment variables
- `frontend/.env.local` - Local development variables

### Security Updates
- Updated CORS configuration to allow Vercel domains
- Added production-ready security settings

---

## 📋 Deployment Checklist

### Before Deployment
- [ ] Get Gemini API key from Google AI Studio
- [ ] Set up MongoDB Atlas cluster
- [ ] Update environment variables with real values
- [ ] Test locally with production environment variables

### After Deployment
- [ ] Verify backend health check: `https://your-app.onrender.com/api/health`
- [ ] Test authentication endpoints
- [ ] Verify AI chat functionality
- [ ] Check activity calendar with real data
- [ ] Test all major features

### Environment Variables to Set

#### Render (Backend)
```
SPRING_PROFILES_ACTIVE=prod
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
GEMINI_API_KEY=your-gemini-api-key-from-google-ai-studio
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aitutor
FRONTEND_URL=https://your-vercel-app.vercel.app
```

#### Vercel (Frontend)
```
REACT_APP_API_URL=https://your-render-app.onrender.com/api
GENERATE_SOURCEMAP=false
```

---

## 🔍 Troubleshooting

### Common Issues
1. **CORS Errors**: Check CORS configuration includes your Vercel domain
2. **Build Failures**: Ensure all dependencies are in package.json
3. **Environment Variables**: Double-check all required variables are set
4. **Database Connection**: Verify MongoDB URI and network access

### Logs
- **Render**: Check logs in Render dashboard
- **Vercel**: Check function logs in Vercel dashboard

---

## 🎉 Success!

Once deployed, your AI Tutor application will be available at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.onrender.com`

The application includes:
- ✅ User authentication (login/signup)
- ✅ AI-powered tutoring with Gemini
- ✅ Interactive quizzes
- ✅ Study notes management
- ✅ Real-time progress tracking
- ✅ Activity calendar with authentic data
