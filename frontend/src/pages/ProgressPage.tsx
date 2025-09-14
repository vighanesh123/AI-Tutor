import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Clock, Target, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { progressService, StudentProgress, SubjectProgress, MonthlyActivity, Achievement, ProgressStats } from '../services/progressService';

const ProgressPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for real data
  const [progressData, setProgressData] = useState<StudentProgress | null>(null);
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [subjectProgress, setSubjectProgress] = useState<{ [key: string]: SubjectProgress }>({});
  const [monthlyActivity, setMonthlyActivity] = useState<MonthlyActivity[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [studyDates, setStudyDates] = useState<string[]>([]);

  // Load data on component mount and when user changes
  useEffect(() => {
    if (user) {
      loadProgressData();
    }
  }, [user]);

  const loadProgressData = async () => {
    if (!user) {
      console.log('No user logged in, skipping progress data load');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      console.log('🔄 Loading progress data for user:', user.email);

      // Load progress data with individual error handling
      let progressOverview = null;
      let progressStats = null;
      let subjectData = {};
      let monthlyData: MonthlyActivity[] = [];
      let achievementData: Achievement[] = [];
      let calendarData: string[] = [];

      try {
        console.log('📊 Fetching progress overview...');
        console.log('🔑 Current user:', user);
        console.log('🎫 Auth token exists:', !!localStorage.getItem('token'));
        console.log('🎫 Token value:', localStorage.getItem('token')?.substring(0, 50) + '...');
        progressOverview = await progressService.getProgressOverview();
        console.log('✅ Progress overview loaded:', progressOverview);
      } catch (err) {
        console.error('❌ Failed to load progress overview:', err);
        // Create default progress data
        progressOverview = {
          userId: user?.id || '',
          totalStudyTimeMinutes: 0,
          totalQuizzesCompleted: 0,
          averageScore: 0,
          currentStreak: 0,
          longestStreak: 0,
          subjectProgress: {},
          monthlyActivity: [],
          studyDates: [],
          achievements: []
        };
      }

      try {
        console.log('📈 Fetching statistics...');
        progressStats = await progressService.getStatistics();
        console.log('✅ Statistics loaded:', progressStats);
      } catch (err) {
        console.error('❌ Failed to load progress stats:', err);
        // Create default stats
        progressStats = {
          totalStudyTimeHours: 0,
          totalQuizzesCompleted: 0,
          averageScore: 0,
          currentStreak: 0,
          longestStreak: 0,
          totalSubjects: 0,
          earnedAchievements: 0
        };
      }

      try {
        subjectData = await progressService.getSubjectProgress();
      } catch (err) {
        console.warn('Failed to load subject progress:', err);
        subjectData = {};
      }

      try {
        monthlyData = await progressService.getMonthlyActivity();
      } catch (err) {
        console.warn('Failed to load monthly activity:', err);
        monthlyData = [];
      }

      try {
        achievementData = await progressService.getAchievements();
      } catch (err) {
        console.warn('Failed to load achievements:', err);
        // Create default achievements
        achievementData = [
          {
            id: '1',
            title: 'First Steps',
            description: 'Complete your first quiz',
            category: 'milestone',
            earned: progressStats?.totalQuizzesCompleted > 0 || false,
            earnedAt: progressStats?.totalQuizzesCompleted > 0 ? new Date().toISOString() : undefined
          },
          {
            id: '2',
            title: 'Study Streak',
            description: 'Maintain a 3-day study streak',
            category: 'streak',
            earned: (progressStats?.currentStreak || 0) >= 3,
            earnedAt: (progressStats?.currentStreak || 0) >= 3 ? new Date().toISOString() : undefined
          },
          {
            id: '3',
            title: 'High Achiever',
            description: 'Score above 80% in 5 quizzes',
            category: 'performance',
            earned: false
          }
        ];
      }

      try {
        calendarData = await progressService.getStudyCalendar(new Date().getFullYear(), new Date().getMonth() + 1);
      } catch (err) {
        console.warn('Failed to load study calendar:', err);
        calendarData = [];
      }

      setProgressData(progressOverview);
      setStats(progressStats);
      setSubjectProgress(subjectData);
      setMonthlyActivity(monthlyData);
      setAchievements(achievementData);
      setStudyDates(calendarData);
    } catch (err) {
      console.error('Error loading progress data:', err);
      setError('Failed to load progress data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Create overall stats from real data
  const overallStats = stats ? [
    {
      title: "Total Study Time",
      value: progressService.formatStudyTime(Math.round(stats.totalStudyTimeHours * 60)),
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Quizzes Completed",
      value: stats.totalQuizzesCompleted,
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Average Score",
      value: `${Math.round(stats.averageScore)}%`,
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Current Streak",
      value: `${stats.currentStreak} days`,
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ] : [];

  // Convert subject progress to array format
  const subjectProgressArray = Object.entries(subjectProgress).map(([subject, data]) => ({
    subject,
    completed: data.quizzesCompleted,
    total: Math.max(data.totalQuizzes, data.quizzesCompleted), // Ensure total is at least completed
    score: Math.round(data.averageScore)
  }));

  if (loading) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading your progress...</p>
                {!user && (
                  <p className="text-red-500 dark:text-red-400 mt-2">Please log in to view your progress</p>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication Required</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Please log in to view your progress data</p>
                <button
                  onClick={() => window.location.href = '/login'}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
                <button
                  onClick={loadProgressData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Learning Progress</h1>
            <p className="text-gray-600 dark:text-gray-300">Track your journey and celebrate your achievements</p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor} dark:bg-gray-700`}>
                    <stat.icon className={`w-6 h-6 ${stat.color} dark:text-gray-300`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subject Progress */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Subject Progress</h2>
              <div className="card p-6">
                <div className="space-y-6">
                  {subjectProgressArray.map((subject, index) => {
                    const progressPercent = subject.total > 0 ? (subject.completed / subject.total) * 100 : 0;
                    return (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{subject.subject}</h3>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {subject.completed}/{subject.total} completed
                            </span>
                            <span className={`text-sm font-semibold ${progressService.getScoreColorClass(subject.score)}`}>
                              {subject.score}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Activity */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Monthly Activity</h3>
                <div className="card p-4">
                  <div className="space-y-3">
                    {monthlyActivity.map((month, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-medium text-gray-900 dark:text-white">{progressService.getMonthName(month.month)}</span>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{month.quizzesCompleted} quizzes</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{progressService.formatStudyTime(month.studyTimeMinutes)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Achievements</h2>
              <div className="card p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-2 ${
                        achievement.earned 
                          ? 'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20' 
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            achievement.earned 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                          }`}>
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`font-semibold ${
                              achievement.earned ? 'text-green-800 dark:text-green-200' : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {achievement.title}
                            </h4>
                            <p className={`text-sm ${
                              achievement.earned ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {achievement.description}
                            </p>
                            {achievement.earned && achievement.earnedAt && (
                              <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                                Earned on {progressService.formatDate(achievement.earnedAt)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Calendar */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Study Calendar</h3>
                <div className="card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {progressService.getMonthName(new Date().getMonth() + 1)} {new Date().getFullYear()}
                    </h4>
                    <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 p-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 31 }, (_, index) => {
                      const day = index + 1;
                      const dateStr = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                      const hasActivity = studyDates.includes(dateStr);
                      return (
                        <div
                          key={day}
                          className={`text-center text-xs p-2 rounded ${
                            hasActivity 
                              ? 'bg-blue-500 text-white' 
                              : 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgressPage;
