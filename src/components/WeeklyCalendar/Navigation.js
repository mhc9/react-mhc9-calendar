import React from 'react'
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ weekDays, currentWeek, onCurrentWeekChange }) => {
    const navigateWeek = (direction) => {
        const newDate = new Date(currentWeek);
        newDate.setDate(newDate.getDate() + (direction * 7));
        onCurrentWeekChange(newDate);
    };

    return (
        <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            <button
                onClick={() => navigateWeek(-1)}
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="text-center">
                <h2 className="text-2xl font-bold text-white">
                    {weekDays[0].toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}
                </h2>
                <p className="text-slate-300">
                    {weekDays[0].toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })} - {weekDays[6].toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })}
                </p>
            </div>
            
            <button
                onClick={() => navigateWeek(1)}
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}

export default Navigation