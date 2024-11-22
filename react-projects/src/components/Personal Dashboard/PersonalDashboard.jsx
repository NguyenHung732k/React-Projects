import React from 'react'
import CalendarWidget from './CalendarWidget'
import TodoWidget from './TodoWidget'
import GoalTrackerWidget from './GoalTrackerWidget'
import HealthTrackerWidget from './HealthTrackerWidget'
import ThemeToggle from './context/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

const PersonalDashboard = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                <div className="container mx-auto p-4">
                    <ThemeToggle />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <CalendarWidget />
                        <TodoWidget />
                        <GoalTrackerWidget />
                        <HealthTrackerWidget />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default PersonalDashboard