import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navigation = ({ weekDays, currentWeek, onCurrentWeekChange }) => {
    const { t } = useTheme();

    const navigateWeek = (direction) => {
        const newDate = new Date(currentWeek);
        newDate.setDate(newDate.getDate() + (direction * 7));
        onCurrentWeekChange(newDate);
    };

    return (
        <div className={`flex items-center justify-between mb-6 ${t.cardBg} backdrop-blur-lg rounded-2xl p-2 border ${t.cardBorder} shadow-lg`}>
            <button
                onClick={() => navigateWeek(-1)}
                className={`p-2 ${t.hoverBg} rounded-lg transition-all duration-300 hover:scale-110`}
            >
                <ChevronLeft className={`w-6 h-6 ${t.text}`} />
            </button>
            
            <div className="text-center">
                <h2 className={`text-2xl font-bold ${t.text}`}>
                    {weekDays[0].toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}
                </h2>
                <p className={t.textSecondary}>
                    {weekDays[0].toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })} - {weekDays[6].toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })}
                </p>
            </div>
            
            <button
                onClick={() => navigateWeek(1)}
                className={`p-2 ${t.hoverBg} rounded-lg transition-all duration-300 hover:scale-110`}
            >
                <ChevronRight className={`w-6 h-6 ${t.text}`} />
            </button>
        </div>
    )
}

export default Navigation