import React, { useState } from 'react'
import CurrencySelector from './CurrencySelector'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import ThresholdNotification from './ThresholdNotification'
import HistoricalChart from './HistoricalChart'
import { sendNotification } from './utils/notifications'
import { fetchHistoricalData } from './api/currencyAPI'

const CurrencyNotifier = () => {
    const [selectedCurrencies, setSelectedCurrencies] = useState([])
    const [thresholds, setThresholds] = useState({})
    const [historicalData, setHistoricalData] = useState([])

    const handleCurrencySelect = (currencies) => {
        setSelectedCurrencies(currencies)
        fetchHistoricalData(currencies).then(data => setHistoricalData(data))
    }

    const handleNotify = (currency, rate) => {
        sendNotification(currency, rate)
    }

    const handleThresholdChange = (currency, value) => {
        setThresholds(prev => ({ ...prev, [currency]: value }))
    }

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-4xl font-semibold">Currency Exchange Rate Notifier</h1>
                <p className="text-lg mt-2">Track live exchange rates and get notified when they change</p>
            </header>

            <main className="container mx-auto px-4 py-6 space-y-8">
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Select Currencies to Monitor</h2>
                    <CurrencySelector onSelect={handleCurrencySelect} />
                </section>

                {selectedCurrencies.length > 0 && (
                    <>
                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Current Exchange Rates</h2>
                            <ExchangeRateDisplay selectedCurrencies={selectedCurrencies} />
                        </section>

                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Set Thresholds</h2>
                            {selectedCurrencies.map(currency => (
                                <ThresholdNotification
                                    key={currency}
                                    currency={currency}
                                    threshold={thresholds[currency] || 0}
                                    onNotify={handleNotify}
                                    onThresholdChange={handleThresholdChange}
                                />
                            ))}
                        </section>

                        <section className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Historical Data</h2>
                            <HistoricalChart historicalData={historicalData} />
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}

export default CurrencyNotifier