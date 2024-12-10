import React, { useState, useEffect } from 'react'
import { sendNotification } from './utils/notifications'
import { fetchExchangeRates } from './api/currencyAPI'

const ThresholdNotification = ({ currency, threshold, onNotify, onThresholdChange }) => {
    const [rate, setRate] = useState(null)

    useEffect(() => {
        const interval = setInterval(async () => {
            const rates = await fetchExchangeRates()
            setRate(rates[currency])

            if (rates[currency] >= threshold) {
                onNotify(currency, rates[currency])
            }
        }, 60000)

        return () => clearInterval(interval)
    }, [currency, threshold, onNotify])

    return (
        <div className="flex items-center justify-between mb-4">
            <span>{currency} rate: {rate ? rate : 'Loading...'}</span>
            <input
                type="number"
                value={threshold}
                onChange={(event) => onThresholdChange(currency, event.target.value)}
                className="w-32 p-2 border border-gray-300 rounded-md"
                placeholder="Set threshold"
            />
        </div>
    )
}

export default ThresholdNotification