import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from './Chart'


const API_KEY = 'U9JOTOMOCHGR01DF'


const StockDetails = ({ symbol }) => {

    const [stockData, setStockData] = useState(null)
    const [historicalData, setHistoricalData] = useState([])
    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const { data } = await axios.get(
                    `https://www.alphavantage.co/query`,
                    {
                        params: {
                            function: 'TIME_SERIES_DAILY',
                            symbol: symbol,
                            apikey: API_KEY,
                        },
                    }
                )

                const timeSeries = data['Time Series (Daily)']
                if (timeSeries) {
                    const dates = Object.keys(timeSeries).reverse().slice(0, 30)
                    const prices = dates.map(date => timeSeries[date]['4. close'])
                    setLabels(dates)
                    setData(prices)
                }
                setStockData(data)
            } catch (error) {
                console.error('Error fetching stock data', error)
            }
        }

        if (symbol) {
            fetchStockData()
        }
    }, [symbol])

    if (!stockData) return null

    const latestPrice = stockData['Time Series (Daily)'] ?
        Object.values(stockData['Time Series (Daily)'])[0]['4. close'] : 'N/A'

    return (
        <div className="w-[800px] mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-center">Stock Details for {symbol}</h2>
            <p className="text-lg text-center">Latest Price: ${latestPrice}</p>
            <Chart labels={labels} data={data} />
        </div>
    )
}

export default StockDetails