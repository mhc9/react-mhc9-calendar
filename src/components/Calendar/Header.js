import React from 'react'

const CalendarHeader = ({ weekDays, today }) => {
    return (
        <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day, idx) => {
                const isToday = day.toDateString() === today.toDateString();
                return (
                    <div
                        key={idx}
                        className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 border text-center transition-all duration-300 ${
                            isToday ? 'border-cyan-400 border-2 shadow-lg shadow-cyan-400/50' : 'border-white/20'
                        }`}
                    >
                        <div className={`text-sm font-semibold ${isToday ? 'text-cyan-400' : 'text-slate-400'}`}>
                            {day.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                            <div className={`text-3xl font-bold mt-1 ${isToday ? 'text-cyan-400' : 'text-white'}`}>
                            {day.getDate()}
                        </div>
                </div>
                );
            })}
        </div>
    )
}

export default CalendarHeader