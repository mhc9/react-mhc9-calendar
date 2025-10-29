import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import StatCard from './StatCard';
import Header from './Header';
import Calendar from './Calendar';

const WeeklyCalendar = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock API fetch - Replace with your actual API endpoint
    const fetchEvents = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data - Replace with actual API call
        const mockEvents = [
        {
            id: 1,
            title: "Team Stand-up",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1),
            time: "09:00 AM",
            duration: "30 min",
            location: "Conference Room A",
            attendees: 8,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Design Review",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1),
            time: "02:00 PM",
            duration: "1 hour",
            location: "Virtual",
            attendees: 5,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "Sprint Planning",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 1),
            time: "04:00 PM",
            duration: "2 hours",
            location: "Conference Room B",
            attendees: 10,
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 4,
            title: "Client Presentation",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 2),
            time: "10:30 AM",
            duration: "2 hours",
            location: "Board Room",
            attendees: 12,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "Lunch & Learn",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 2),
            time: "12:00 PM",
            duration: "1 hour",
            location: "Cafeteria",
            attendees: 25,
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 6,
            title: "Marketing Sync",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 2),
            time: "03:00 PM",
            duration: "45 min",
            location: "Virtual",
            attendees: 7,
            color: "from-teal-500 to-cyan-500"
        },
        {
            id: 7,
            title: "Code Review Session",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 3),
            time: "11:00 AM",
            duration: "45 min",
            location: "Dev Lab",
            attendees: 6,
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 8,
            title: "All Hands Meeting",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 4),
            time: "03:00 PM",
            duration: "1 hour",
            location: "Main Hall",
            attendees: 50,
            color: "from-indigo-500 to-blue-500"
        },
        {
            id: 9,
            title: "Workshop: AI Tools",
            date: new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + 5),
            time: "01:00 PM",
            duration: "3 hours",
            location: "Training Room",
            attendees: 20,
            color: "from-violet-500 to-purple-500"
        }
        ];

        setEvents(mockEvents);
        setLoading(false);
    };

    useEffect(() => {
        fetchEvents();
    }, [currentWeek]);

    const getWeekDays = () => {
        const week = [];
        const start = new Date(currentWeek);
        start.setDate(start.getDate() - start.getDay());
        
        for (let i = 0; i < 7; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        week.push(day);
        }
        return week;
    };

    const getEventsForDay = (day) => {
        return events.filter(event => 
        event.date.toDateString() === day.toDateString()
        );
    };

    const weekDays = getWeekDays();
    const today = new Date();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <Header />

                {/* Week Navigator */}
                <Navigation
                    weekDays={weekDays}
                    currentWeek={currentWeek}
                    onCurrentWeekChange={setCurrentWeek}
                />

                {/* Calendar Grid - Horizontal Layout */}
                {loading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
                    </div>
                ) : (
                    <Calendar weekDays={weekDays} today={today} getEventsForDay={getEventsForDay} />
                )}

                {/* Stats Footer */}
                <StatCard events={events} today={today} getEventsForDay={getEventsForDay} />

            </div>
        </div>
    );
    };

export default WeeklyCalendar;