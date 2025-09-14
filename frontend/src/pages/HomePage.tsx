import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  HelpCircle, 
  TrendingUp, 
  FileText, 
  BookOpen, 
  Flame,
  PlayCircle
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const features = [
    {
      icon: Brain,
      title: "AI Tutor",
      description: "Get instant answers to your CSE questions from our Google Gemini-powered AI tutor.",
      gradient: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600",
      link: "/tutor"
    },
    {
      icon: HelpCircle,
      title: "Topic Quizzes",
      description: "Practice with curated quizzes covering Java, Python, DSA, OS, CN, and more.",
      gradient: "from-green-50 to-green-100",
      iconColor: "text-green-600",
      bgColor: "bg-green-600",
      link: "/quiz"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and streak tracking.",
      gradient: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600",
      link: "/progress"
    },
    {
      icon: FileText,
      title: "Notes Sharing",
      description: "Upload and share study notes with fellow students in PDF or image format.",
      gradient: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-600",
      link: "/notes"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Topics",
      description: "Covers all CSE fundamentals: Programming, Web Dev, DBMS, ML, Cybersecurity.",
      gradient: "from-red-50 to-red-100",
      iconColor: "text-red-600",
      bgColor: "bg-red-600",
      link: "/quiz"
    },
    {
      icon: Flame,
      title: "Daily Streaks",
      description: "Build consistent learning habits with gamified daily streak tracking.",
      gradient: "from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-600",
      link: "/progress"
    }
  ];

  const topics = [
    "Java", "Python", "C/C++", "JavaScript", "React", "Node.js",
    "SQL/DBMS", "Operating Systems", "Computer Networks", "DSA",
    "Machine Learning", "Cybersecurity"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Static Background */}
      <main>
        <section className="relative min-h-[500px] overflow-hidden">
          {/* Study Background - Dark/Light Mode */}
          <div className="absolute inset-0">
            {/* Dark Mode Background */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat dark:block hidden"
              style={{ 
                backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/020/734/052/original/animated-studying-lo-fi-background-late-night-homework-2d-cartoon-character-animation-with-nighttime-cozy-bedroom-interior-on-background-4k-footage-with-alpha-channel-for-lofi-music-aesthetic-video.jpg)` 
              }}
            >
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Light Mode Background */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat dark:hidden block"
              style={{ 
                backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/020/734/052/original/animated-studying-lo-fi-background-late-night-homework-2d-cartoon-character-animation-with-nighttime-cozy-bedroom-interior-on-background-4k-footage-with-alpha-channel-for-lofi-music-aesthetic-video.jpg)` 
              }}
            >
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center py-16">
            <div className="text-center max-w-5xl mx-auto px-6">
              {/* Main Title with Enhanced Styling */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                  <span className="text-white drop-shadow-2xl">Master </span>
                  <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    Computer Science
                  </span>
                </h1>
                
                {/* Subtitle with Better Typography */}
                <div className="relative">
                  <p className="text-xl md:text-2xl text-cyan-200 mb-6 font-semibold tracking-wide">
                    Advanced Programming & Development
                  </p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Description with Better Spacing */}
              <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
                Get personalized tutoring, practice with quizzes, track your progress, and share notes with our 
                <span className="text-cyan-300 font-medium"> AI-powered CSE learning platform</span>.
              </p>

              {/* Enhanced CTA Button */}
              {!isAuthenticated && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/auth"
                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform"
                  >
                    <PlayCircle className="w-6 h-6 group-hover:animate-pulse" />
                    Get Started Free
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                  
                  {/* Secondary Action */}
                  <Link
                    to="/quiz"
                    className="text-cyan-200 hover:text-white font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2 border-b-2 border-transparent hover:border-cyan-400"
                  >
                    Try Demo Quiz
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Everything You Need to Excel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="card hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
