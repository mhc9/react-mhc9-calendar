import React from 'react'
import { Calendar } from 'lucide-react';

const Header = () => {
    return (
        <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className="w-10 h-10 text-cyan-400" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Weekly Activities
                </h1>
            </div>
            <p className="text-slate-300 text-lg">Stay organized with your team schedule</p>
        </div>
    )
}

export default Header