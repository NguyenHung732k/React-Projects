export const fetchExchangeRates = async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await response.json()
    return data.rates
}

export const fetchHistoricalData = async (currencies) => {
    return currencies.map(currency => ({
        currency,
        data: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-11-${i + 1}`,
            rate: (Math.random() * 1.5 + 1).toFixed(2),
        }))
    }))
};