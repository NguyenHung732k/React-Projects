import React, { useEffect, useState } from 'react'
import './TimebaseThemeSwitcher.css'
import clsx from 'clsx'

const getTimeBasedTheme = () => {
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 17) return 'light'
    if (hour >= 17 && hour < 20) return 'sunset'
    return 'midnight'
}

const themes = {
    light: {
        bg: 'bg-light',
        text: 'text-gray-800',
        label: 'Light',
        icon: <svg className="w-8 h-8 text-yellow-500 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
    },
    sunset: {
        bg: 'bg-sunset',
        text: 'text-gray-900',
        label: 'Sunset',
        icon: <svg className="w-8 h-8 text-orange-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" /></svg>
    },
    midnight: {
        bg: 'bg-midnight',
        text: 'text-white',
        label: 'Midnight',
        icon: <svg className="w-8 h-8 text-blue-300 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
    },
}

const TimebaseThemeSwitcher = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('overrideTheme')
        return savedTheme || getTimeBasedTheme()
    })

    const [override, setOverride] = useState(() => {
        return localStorage.getItem('overrideTheme') !== null
    })

    useEffect(() => {
        if (!override) {
            const interval = setInterval(() => {
                setTheme(getTimeBasedTheme())
            }, 60000)
            return () => clearInterval(interval)
        }
    }, [override])

    const cycleTheme = () => {
        const keys = Object.keys(themes)
        const nextIndex = (keys.indexOf(theme) + 1) % keys.length
        const newTheme = keys[nextIndex]
        setTheme(newTheme)
        if (override) {
            localStorage.setItem('overrideTheme', newTheme)
        }
    }

    const toggleOverride = () => {
        const newOverride = !override
        setOverride(newOverride)
        if (newOverride) {
            localStorage.setItem('overrideTheme', theme)
        } else {
            localStorage.removeItem('overrideTheme')
            setTheme(getTimeBasedTheme())
        }
    }

    return (
        <div
            className={clsx(
                'min-h-screen transition-colors duration-1000 ease-in-out flex flex-col items-center justify-center px-4 py-10',
                themes[theme].bg,
                themes[theme].text
            )}
        >
            {/* Info Card */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-xl border border-white/20 mb-6 text-center w-full max-w-sm transition-all">
                <div className="flex justify-center mb-3">{themes[theme].icon}</div>
                <h1 className="text-3xl font-bold">{themes[theme].label} Theme</h1>
                <p className="text-sm mt-1 opacity-80">
                    {override ? 'Manual override enabled' : 'Time-based theme active'}
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 items-center">
                <button
                    onClick={cycleTheme}
                    className="px-6 py-2 rounded-lg bg-white text-gray-800 font-semibold shadow hover:scale-105 active:scale-95 transition"
                >
                    Cycle Theme
                </button>

                <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                    <input
                        type="checkbox"
                        checked={override}
                        onChange={toggleOverride}
                        className="form-checkbox h-4 w-4 text-blue-600 transition"
                    />
                    Manual Override
                </label>
            </div>
        </div>
    )
}

export default TimebaseThemeSwitcher