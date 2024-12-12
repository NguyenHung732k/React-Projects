import React, { useState, useEffect } from 'react'
import Header from './Header'
import StockCard from './StockCard'
import Portfolio from './Portfolio'
import Transaction from './Transaction'
import PortfolioChart from './PortfolioChart'
import Leaderboard from './Leaderboard'
import { fetchStockPrice } from './api/stockAPI'

const StockTrading = () => {
    const [balance, setBalance] = useState(10000)
    const [portfolio, setPortfolio] = useState({})
    const [stockPrices, setStockPrices] = useState({})
    const [leaderboardData, setLeaderboardData] = useState([])
    const [performanceData, setPerformanceData] = useState([
        { time: '10:00', value: 10000 },
        { time: '11:00', value: 10500 },
        { time: '12:00', value: 11000 },
        { time: '01:00', value: 12000 },
    ])

    useEffect(() => {
        const symbols = ['AAPL', 'GOOGL', 'TSLA'];
        const fetchPrices = async () => {
            const prices = {}
            for (const symbol of symbols) {
                prices[symbol] = await fetchStockPrice(symbol)
            }
            setStockPrices(prices)
        }
        fetchPrices()
    }, [])

    const handleBuyStock = (symbol, quantity) => {
        if (balance >= stockPrices[symbol] * quantity) {
            setBalance(balance - stockPrices[symbol] * quantity)
            setPortfolio({ ...portfolio, [symbol]: (portfolio[symbol] || 0) + quantity })
            setPerformanceData([
                ...performanceData,
                { time: new Date().toLocaleTimeString(), value: balance - stockPrices[symbol] * quantity },
            ])
        } else {
            alert('Insufficient balance')
        }
    }

    const handleSellStock = (symbol, quantity) => {
        if (portfolio[symbol] >= quantity) {
            setBalance(balance + stockPrices[symbol] * quantity)
            setPortfolio({ ...portfolio, [symbol]: portfolio[symbol] - quantity })
            setPerformanceData([
                ...performanceData,
                { time: new Date().toLocaleTimeString(), value: balance + stockPrices[symbol] * quantity },
            ])
        } else {
            alert('Insufficient shares')
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <Header balance={balance} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {Object.keys(stockPrices).map((symbol) => (
                    <StockCard
                        key={symbol}
                        stockSymbol={symbol}
                        stockPrice={stockPrices[symbol]}
                        handleBuyStock={handleBuyStock}
                    />
                ))}
            </div>
            <Portfolio portfolio={portfolio} stockPrices={stockPrices} />
            <Transaction
                stockPrices={stockPrices}
                handleBuyStock={handleBuyStock}
                handleSellStock={handleSellStock}
                portfolio={portfolio}
            />
            <PortfolioChart data={performanceData} />
            <Leaderboard leaderboardData={leaderboardData} />
        </div>
    )
}

export default StockTrading