import React from 'react'
import { Calendar, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
    const { theme, t, toggleTheme: onToogleTheme } = useTheme();

    return (
        <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className={`w-10 h-10 ${t.icon}`} />
                <h1 className={`text-2xl md:text-3xl font-bold ${t.text}`}>
                    กิจกรรมประจำสัปดาห์
                </h1>
            </div>
            <p className={`${t.textSecondary} text-2xl`}>ศูนย์สุขภาพจิตที่ 9</p>

            {/* Theme Toggle Button */}
            <button
                onClick={onToogleTheme}
                className={`absolute top-2 right-2 p-3 ${t.cardBg} backdrop-blur-lg rounded-full border ${t.cardBorder} ${t.hoverBg} transition-all duration-300 hover:scale-110 shadow-lg`}
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                    <Moon className="w-6 h-6 text-indigo-600" />
                )}
            </button>
        </div>
    )
}

export default Header