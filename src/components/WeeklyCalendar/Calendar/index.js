import React from 'react'
import CalendarHeader from './Header';
import EventCard from './EventCard';

const Calendar = ({ weekDays, today, getEventsForDay }) => {
    return (
        <div className="space-y-4">
            {/* Days Header */}
            <CalendarHeader weekDays={weekDays} today={today} />

            {/* Events Timeline */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-7 gap-4">
                    {weekDays.map((day, idx) => {
                        const dayEvents = getEventsForDay(day);

                        return (
                            <div key={idx} className="min-h-[200px]">
                                {dayEvents.length > 0 ? (
                                    <div className="space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                        {dayEvents.map(event => (
                                            <EventCard key={event.id} event={event} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-center py-8 text-slate-400 text-sm">
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