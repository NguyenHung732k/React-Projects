import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import PricingPage from './PricingPage'

const DynamicPricingUI = () => {
    return (
        <ThemeProvider>
            <PricingPage />
        </ThemeProvider>
    )
}

export default DynamicPricingUI