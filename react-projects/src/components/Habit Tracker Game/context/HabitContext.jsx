import React, { createContext, useState, useContext } from 'react'

const HabitContext = createContext()

export const useHabits = () => useContext(HabitContext)

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([])
    const [points, setPoints] = useState(0)
    const [streak, setStreak] = useState(0)

    const addHabit = (habit) => setHabits((prevHabits) => [...prevHabits, habit])

    const completeHabit = (id) => {
        setHabits((prevHabits) =>
            prevHabits.map((habit) =>
                habit.id === id
                    ? { ...habit, completed: true }
                    : habit
            )
        )
        setPoints((prevPoints) => prevPoints + 10)
        setStreak((prevStreak) => prevStreak + 1)
    }

    return (
        <HabitContext.Provider value={{ habits, points, streak, addHabit, completeHabit }}>
            {children}
        </HabitContext.Provider>
    )
}