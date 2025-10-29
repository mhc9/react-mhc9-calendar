import React from 'react'
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Dialog = ({ event, setSelectedEvent }) => {
    return (
        <>            
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
                onClick={() => setSelectedEvent(null)}
            >
                <div 
                    className="bg-white/95 backdrop-blur-lg rounded-3xl max-w-2xl w-full shadow-2xl transform transition-all duration-300 animate-scaleIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal Header */}
                    <div className={`bg-gradient-to-br ${event.color} p-8 rounded-t-3xl text-white`}>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold">{event.title}</h2>
                            <button 
                                onClick={() => setSelectedEvent(null)}
                                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90"
                            >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                            <Calendar className="w-5 h-5" />
                            <span className="text-base">
                                {event?.date?.toLocaleDateString('th-TH', { 
                                    weekday: 'long', 
                                    month: 'long', 
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className={`bg-gradient-to-br ${event.color} p-3 rounded-xl`}>
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-semibold">Time</div>
                                    <div className="text-lg font-bold text-gray-800">{event.time}</div>
                                    <div className="text-sm text-gray-600">{event.duration}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className={`bg-gradient-to-br ${event.color} p-3 rounded-xl`}>
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-semibold">Location</div>
                                    <div className="text-lg font-bold text-gray-800">{event.location}</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-start gap-4 w-full border">
                                <div className={`bg-gradient-to-br ${event.color} p-3 rounded-xl`}>
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-semibold">Attendees</div>
                                    <div className="text-lg font-bold text-gray-800">{event.people} ราย <span className="text-sm font-thin">({event.attendees})</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="flex gap-3 pt-4">
                            <button className={`flex-1 bg-gradient-to-br ${event.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                                Join Event
                            </button>
                            <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300">
                                Add to Calendar
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    )
}

export default Dialog