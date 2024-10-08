import React, { createContext, useContext, useState } from 'react'

const TipContext = createContext()

export const useTips = () => {
    return useContext(TipContext)
}

export const TipProvider = ({ children }) => {
    const [tips] = useState([
        "Reduce, reuse, recycle.",
        "Switch to reusable bags.",
        "Use energy-efficient appliances.",
        "Walk or bike instead of driving.",
        "Compost your kitchen waste.",
        "Plant a tree to absorb CO2.",
        "Buy local produce to reduce carbon footprint.",
        "Minimize water usage in daily activities.",
    ])

    return (
        <TipContext.Provider value={tips}>
            {children}
        </TipContext.Provider>
    )
}