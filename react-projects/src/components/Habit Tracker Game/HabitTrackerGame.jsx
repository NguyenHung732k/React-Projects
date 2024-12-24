import React from 'react'
import { HabitProvider } from './context/HabitContext'
import GoalForm from './components/GoalForm'
import HabitList from './components/HabitList'
import StreakCounter from './components/StreakCounter'
import ProgressGraph from './components/ProgressGraph'

const HabitTrackerGame = () => {
    const habitData = {
        dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        completedDays: [1, 2, 3, 4, 5, 6, 7], // e.g., 5 days completed this week
        targetDays: [1, 1, 1, 1, 1, 1, 1], // Target is 1 habit per day
    }

    return (
        <HabitProvider>
            <div className="max-w-[1280px] mx-auto p-8 min-h-screen">
                <h1 className="text-4xl font-bold text-dark text-center mb-8">Habit Tracker Game</h1>
                <GoalForm />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="col-span-1">
                        <StreakCounter />
                        <ProgressGraph habitData={habitData} />
                    </div>
                    <div className="col-span-1">
                        <HabitList />
                    </div>
                </div>
            </div>
        </HabitProvider>
    )
}

export default HabitTrackerGame