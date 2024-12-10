import React, { useEffect, useState } from 'react'
import { fetchExchangeRates } from './api/currencyAPI'

const ExchangeRateDisplay = ({ selectedCurrencies }) => {
    const [rates, setRates] = useState({})

    useEffect(() => {
        const updateRates = async () => {
            const fetchedRates = await fetchExchangeRates()
            setRates(fetchedRates)
        }

        const interval = setInterval(updateRates, 60000)
        updateRates()

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mt-4">
            <h2 className="text-lg font-semibold">Current Exchange Rates:</h2>
            <ul className="mt-2 space-y-2">
                {selectedCurrencies.map(currency => (
                    <li key={currency} className="text-gray-700">
                        {currency}: {rates[currency] || 'Loading...'}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExchangeRateDisplay