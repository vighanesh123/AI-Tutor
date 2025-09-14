import React from 'react';

interface ActivityDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 = no activity, 4 = highest activity
}

interface ActivityCalendarProps {
  data: ActivityDay[];
  totalSubmissions: number;
  totalActiveDays: number;
  maxStreak: number;
}

const ActivityCalendar: React.FC<ActivityCalendarProps> = ({
  data,
  totalSubmissions,
  totalActiveDays,
  maxStreak
}) => {
  // Create 2025 monthly structure with exact days
  const create2025MonthlyStructure = () => {
    const monthsData = [
      { name: 'Jan', days: 31 },
      { name: 'Feb', days: 28 },
      { name: 'Mar', days: 31 },
      { name: 'Apr', days: 30 },
      { name: 'May', days: 31 },
      { name: 'Jun', days: 30 },
      { name: 'Jul', days: 31 },
      { name: 'Aug', days: 31 },
      { name: 'Sep', days: 30 },
      { name: 'Oct', days: 31 },
      { name: 'Nov', days: 30 },
      { name: 'Dec', days: 31 }
    ];

    const months: { name: string; weeks: ActivityDay[][]; totalDays: number }[] = [];
    
    // Debug: Log today's date and available data
    const today = new Date().toISOString().split('T')[0];
    console.log('🔍 Today\'s date:', today);
    console.log('🔍 Available activity data:', data);
    
    monthsData.forEach((monthInfo, monthIndex) => {
      const monthWeeks: ActivityDay[][] = [];
      let currentWeek: ActivityDay[] = [];
      
      // Create days for this month
      for (let day = 1; day <= monthInfo.days; day++) {
        const date = new Date(2025, monthIndex, day);
        const dateStr = date.toISOString().split('T')[0];
        const dayData = data.find(d => d.date === dateStr);
        
        // Debug: Log if this is today
        if (dateStr === today) {
          console.log('📅 Processing today\'s date:', dateStr, 'Data found:', dayData);
        }
        
        // Start new week on Sunday (day 0)
        if (date.getDay() === 0 && currentWeek.length > 0) {
          monthWeeks.push(currentWeek);
          currentWeek = [];
        }
        
        const activityLevel = dayData?.level || 0;
        const activityCount = dayData?.count || 0;
        
        currentWeek.push({
          date: dateStr,
          count: activityCount,
          level: activityLevel
        });
        
        // Debug: Log if this is today
        if (dateStr === today) {
          console.log('✅ Added today to calendar:', { date: dateStr, count: activityCount, level: activityLevel });
        }
        
        // If it's the last day of the month, push the current week
        if (day === monthInfo.days) {
          monthWeeks.push(currentWeek);
        }
      }
      
      months.push({
        name: monthInfo.name,
        weeks: monthWeeks,
        totalDays: monthInfo.days
      });
    });
    
    return months;
  };

  const monthsData = create2025MonthlyStructure();

  const getColorClass = (level: number): string => {
    switch (level) {
      case 0: return 'bg-gray-200 dark:bg-gray-700';
      case 1: return 'bg-green-200 dark:bg-green-800';
      case 2: return 'bg-green-400 dark:bg-green-600';
      case 3: return 'bg-green-500 dark:bg-green-500';
      case 4: return 'bg-green-600 dark:bg-green-400';
      default: return 'bg-gray-200 dark:bg-gray-700';
    }
  };

  return (
    <div className="card p-6">
      {/* Header Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {totalSubmissions}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            submissions in the past one year
          </span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <span>Total active days: <strong className="text-gray-900 dark:text-white">{totalActiveDays}</strong></span>
          <span>Max streak: <strong className="text-gray-900 dark:text-white">{maxStreak}</strong></span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="relative overflow-x-auto">
        {/* Month labels and calendar */}
        <div className="flex mb-2">
          {monthsData.map((month: { name: string; weeks: ActivityDay[][]; totalDays: number }, index: number) => (
            <div key={index} className="flex-shrink-0 mr-3">
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-1 font-medium">
                {month.name}
              </div>
              <div className="flex gap-1">
                {month.weeks.map((week: ActivityDay[], weekIndex: number) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day: ActivityDay, dayIndex: number) => (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm ${getColorClass(day.level)}`}
                        title={`${day.date}: ${day.count} submissions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
