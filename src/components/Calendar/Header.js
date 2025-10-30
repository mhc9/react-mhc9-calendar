import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';

const CalendarHeader = ({ weekDays, today }) => {
    const { t } = useTheme();

    return (
        <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day, idx) => {
                const isToday = day.toDateString() === today.toDateString();
                return (
                    <div
                        key={idx}
                        className={`${t.cardBg} backdrop-blur-lg rounded-xl p-4 border text-center transition-all duration-300 shadow-md ${
                            isToday ? `${t.todayBorder} border-2 shadow-lg ${t.todayShadow}` : t.cardBorder
                        }`}
                    >
                        <div className={`text-sm font-semibold ${isToday ? t.todayText : t.textMuted}`}>
                            {day.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                            <div className={`text-3xl font-bold mt-1 ${isToday ? t.todayText : t.text}`}>
                            {day.getDate()}
                        </div>
                </div>
                );
            })}
        </div>
    )
}

export default CalendarHeader