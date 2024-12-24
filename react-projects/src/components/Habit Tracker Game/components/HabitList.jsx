import React from 'react'
import { useHabits } from '../context/HabitContext'
import HabitCard from './HabitCard'

const HabitList = () => {
    const { habits } = useHabits()

    return (
        <div className="space-y-4">
            {habits.map((habit) => (
                <HabitCard key={habit.id} habit={habit} />
            ))}
        </div>
    )
}

export default HabitList