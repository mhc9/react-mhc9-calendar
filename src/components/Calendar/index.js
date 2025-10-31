import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import CalendarHeader from './Header';
import EventCard from './EventCard';

const Calendar = ({ weekDays, today, getEventsForDay, onSelectedEvent }) => {
    const { t } = useTheme();

    const handleEventClick = (event) => {
        onSelectedEvent(event);
    };

    return (
        <div className="space-y-4">
            {/* Days Header */}
            <CalendarHeader weekDays={weekDays} today={today} />

            {/* Events Timeline */}
            <div className={`${t.cardBg} backdrop-blur-lg rounded-2xl p-6 border ${t.cardBorder} shadow-lg`}>
                <div className="grid grid-cols-7 gap-4">
                    {weekDays.map((day, idx) => {
                        const dayEvents = getEventsForDay(day);

                        return (
                            <div key={idx} className="min-h-[200px]">
                                {dayEvents.length > 0 ? (
                                    <div className="space-y-3">
                                        {dayEvents.map((event, index) => (
                                            <div key={index} onClick={() => handleEventClick(event)} className="mb-2">
                                                <EventCard event={event} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className={`flex items-center justify-center h-full text-center py-8 ${t.textMuted} text-sm`}>
                                        No events
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar