import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import UIComponentLibrary from './UIComponentLibrary'

const UIComponent = () => {
    return (
        <ThemeProvider>
            <UIComponentLibrary />
        </ThemeProvider>
    )
}

export default UIComponent