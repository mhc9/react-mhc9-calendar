import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // 'dark' or 'light'

    // Theme configurations
    const themes = {
        dark: {
            bg: 'bg-gradient-to-br from-[#020817] via-[#071227] to-[#051937]',
            cardBg: 'bg-white/10',
            cardBorder: 'border-white/20',
            text: 'text-white',
            textSecondary: 'text-slate-300',
            textMuted: 'text-slate-400',
            hoverBg: 'hover:bg-white/20',
            todayBorder: 'border-cyan-400',
            todayText: 'text-cyan-400',
            todayShadow: 'shadow-cyan-400/50',
            modalBg: 'bg-black/60',
            modalCard: 'bg-white/95',
            icon: 'text-cyan-400'
        },
        light: {
            bg: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
            cardBg: 'bg-white',
            cardBorder: 'border-gray-200',
            text: 'text-gray-900',
            textSecondary: 'text-gray-700',
            textMuted: 'text-gray-500',
            hoverBg: 'hover:bg-gray-100',
            todayBorder: 'border-blue-500',
            todayText: 'text-blue-600',
            todayShadow: 'shadow-blue-500/30',
            modalBg: 'bg-gray-900/40',
            modalCard: 'bg-white',
            icon: 'text-blue-600'
        }
    };

    const t = themes[theme];

    // Optional: Store theme preference in local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme); // Apply theme to root element
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, t }}>
            {children}
        </ThemeContext.Provider>
    );  
};
