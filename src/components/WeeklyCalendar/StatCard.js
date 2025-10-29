import React from 'react'

const StatCard = ({ events, today, getEventsForDay }) => {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">{events.length}</div>
                <div className="text-sm opacity-90">Events This Week</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">
                    {events.reduce((sum, e) => sum + e.attendees, 0)}
                </div>
                <div className="text-sm opacity-90">Total Participants</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">
                    {getEventsForDay(today).length}
                </div>
                <div className="text-sm opacity-90">Events Today</div>
            </div>
        </div>
    )
}

export default StatCard