import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useTheme } from '../../contexts/ThemeContext';
import Navigation from './Navigation';
import StatCard from './StatCard';
import Header from './Header';
import Calendar from '../Calendar';
import Dialog from '../Modal';
import api from '../../api';

const WeeklyCalendar = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { theme, t, toggleTheme: onToogleTheme } = useTheme();

    // Mock API fetch - Replace with your actual API endpoint
    const fetchEvents = async () => {
        setLoading(true);

        /** ====================== Calculating week start and end dates ====================== */
        const startDate = getWeekDays()[0].toISOString().split('T')[0];
        const endDdate = getWeekDays()[6].toISOString().split('T')[0];

        const res = await api.get(`${process.env.REACT_APP_API_URL}/api/events?sdate=${startDate}&edate=${endDdate}`);

        if (res.data) {
            let _data = [];

            /** ====================== Deduplicating data ====================== */
            res.data.forEach(event => {
                const isDuplicate = _data.some(d => new Date(d.OTBHDate).toDateString() === new Date(event.OTBHDate).toDateString() && d.OTBH === event.OTBH);
                
                if (!isDuplicate) {
                    _data.push(event);
                }
            });

            const _events = _data.map(event => {
                const _filtered = res.data.filter(d => new Date(event.OTBHDate).toDateString() === new Date(d.OTBHDate).toDateString() && event.OTBH === d.OTBH);

                /** ====================== Counting attendees ====================== */
                const attendeeAmt = _filtered.reduce((acc, cur) => {
                    if (event.OTEmid !== cur.OTEmid) {
                        acc = acc + 1;
                    }

                    return acc;
                }, 1);

                /** ====================== Listing attendee's name ====================== */
                const attendees = _filtered.map(d => d.employee?.EmName.split(' ')[0]).join(', ');

                /** ====================== Creating events data for calendar ====================== */
                return {
                    id: event.OTId,
                    title: event.OTName,
                    location: event.OTLocation,
                    date: new Date(event.OTDateProject), // Ensure start date is a Date object
                    from: new Date(event.OTDateProject), // Ensure start date is a Date object
                    to: event.OTDateProject2 && new Date(event.OTDateProject2), // Ensure end date is a Date object
                    time: new Date(event.OTDateGo).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    duration: `${event.OTDuration} min`,
                    attendees: attendees,
                    people: attendeeAmt,
                    color: event.OTEmid === '48' ? "from-pink-500 to-rose-500" : "from-indigo-500 to-blue-500"
                };
            });

            // ถ้าเป็นงานที่มีหลายวันติดกัน ให้สร้าง event เพิ่มตามจำนวนวันที่ไป
            const _tempEvents = _events.filter(e => !!e.to);
            _tempEvents.forEach(e => {
                const _startDate = moment(e.from);
                const _endDate = e.to && moment(e.to);
                const _diffDays = _endDate ? _endDate.diff(_startDate, 'days') : 0;

                if (_diffDays > 0) {
                    for (let i = 1; i <= _diffDays; i++) {
                        const newDate = moment(_startDate).add(i, 'days').toDate();
                        _events.push({
                            ...e,
                            date: newDate
                        });
                    }
                }
            });

            /**
             * Defined color gradients:
             * "from-blue-500 to-cyan-500"
             * "from-purple-500 to-pink-500"
             * "from-pink-500 to-rose-500"
             * "from-orange-500 to-red-500"
             * "from-yellow-500 to-orange-500"
             * "from-teal-500 to-cyan-500"
             * "from-green-500 to-emerald-500"
             * "from-indigo-500 to-blue-500"
             * "from-violet-500 to-purple-500"
             */

            setEvents(_events);
            setLoading(false);
        }
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
        <div className={`min-h-screen ${t.bg} p-4 md:p-6 transition-colors duration-500`}>
            <div className="mx-auto">
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
                        <div className={`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${theme === 'dark' ? 'border-cyan-400' : 'border-blue-600'}`}></div>
                    </div>
                ) : (
                    <Calendar
                        weekDays={weekDays}
                        today={today}
                        getEventsForDay={getEventsForDay}
                        onSelectedEvent={setSelectedEvent}
                    />
                )}

                {/* Stats Footer */}
                <StatCard
                    events={events}
                    today={today}
                    getEventsForDay={getEventsForDay}
                />
                {/* Event Detail Modal */}
                {selectedEvent && (
                    <Dialog 
                        event={selectedEvent}
                        setSelectedEvent={setSelectedEvent}
                    />
                )}
            </div>
        </div>
    );
};

export default WeeklyCalendar;