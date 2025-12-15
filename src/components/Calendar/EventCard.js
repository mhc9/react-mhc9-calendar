import React from 'react'
import { Clock, MapPin, Users } from 'lucide-react';

const EventCard = ({ event }) => {
    return (
        <div className={`bg-gradient-to-br ${event.color} rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
            <h3 className="text-black text-sm mb-2 line-clamp-3">
                {event.title}
            </h3>
            <div className="space-y-1 text-sm text-black/90">
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-start gap-1">
                    <Users className="w-3 h-3 flex-shrink-0" />
                    <span>{event.people} ราย ({event.attendees})</span>
                </div>
            </div>
        </div>
    )
}

export default EventCard