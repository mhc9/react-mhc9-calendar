import React from 'react'

const StatCard = ({ events, today, getEventsForDay }) => {
    const countAttendees = (events) => {
        const attendees = [];
        const deduplicated = new Set(events.map(ev => ev.attendees)); // เคลียร์รายการซ้ำ

        [...deduplicated].forEach(event => {
            let attendeesList = [];

            /** เช็ครายการที่มี comma(,) คั่น */
            if (event.split(',').length === 1) {
                attendees.push(event);
            } else if (event.split(',').length > 1) {
                attendeesList = event.split(',').map(att => att.trim());

                attendees.push(...attendeesList);
            }
        });

        return attendees.length;
    };

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">{events.length}</div>
                <div className="text-sm opacity-90">งานทั้งหมด</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">
                    {countAttendees(events)}
                </div>
                <div className="text-sm opacity-90">ผู้เข้าร่วมทั้งหมด</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">
                    {getEventsForDay(today).length}
                </div>
                <div className="text-sm opacity-90">งานวันนี้</div>
            </div>
        </div>
    )
}

export default StatCard