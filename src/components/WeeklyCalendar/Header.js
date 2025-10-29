import React from 'react'
import { Calendar } from 'lucide-react';

const Header = () => {
    return (
        <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className="w-10 h-10 text-cyan-400" />
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                    กิจกรรมประจำสัปดาห์
                </h1>
            </div>
            <p className="text-slate-300 text-2xl">ศูนย์สุขภาพจิตที่ 9</p>
        </div>
    )
}

export default Header