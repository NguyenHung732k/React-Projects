import React, { useEffect, useState } from 'react'
import { fetchExchangeRates } from './api/currencyAPI'

const CurrencySelector = ({ onSelect }) => {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        const fetchCurrencies = async () => {
            const rates = await fetchExchangeRates()
            setCurrencies(Object.keys(rates))
        }

        fetchCurrencies()
    }, [])

    const handleSelect = (event) => {
        const selectedCurrencies = Array.from(event.target.selectedOptions).map(option => option.value)
        onSelect(selectedCurrencies)
    }

    return (
        <div>
            <label htmlFor="currency-selector" className="block text-lg font-semibold">Select currencies to monitor:</label>
            <select
                id="currency-selector"
                multiple
                onChange={handleSelect}
                className="w-full h-96 p-2 mt-2 border border-gray-300 rounded-md"
            >
                {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencySelector