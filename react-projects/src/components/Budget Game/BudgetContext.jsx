import React, { createContext, useContext, useState } from 'react'

const BudgetContext = createContext()

export const useBudget = () => useContext(BudgetContext)

export const BudgetProvider = ({ children }) => {
    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)

    return (
        <BudgetContext.Provider value={{ income, setIncome, expenses, setExpenses }}>
            {children}
        </BudgetContext.Provider>
    )
}