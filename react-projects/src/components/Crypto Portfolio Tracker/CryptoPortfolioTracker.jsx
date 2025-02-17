import React, { useState } from 'react'
import Header from './components/Header'
import PortfolioCard from './components/PortfolioCard'
import CryptoTable from './components/CryptoTable'
import NewsFeed from './components/NewsFeed'

const CryptoPortfolioTracker = () => {
    const [portfolio, setPortfolio] = useState([
        { crypto: 'bitcoin', price: 50000, amount: 0.5 },
        { crypto: 'ethereum', price: 3000, amount: 2 },
    ])

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <section className="my-12">
                    <h2 className="text-3xl font-semibold text-primary mb-8">Your Portfolio</h2>
                    <div className="flex flex-wrap justify-center">
                        {portfolio.map((asset, index) => (
                            <PortfolioCard key={index} crypto={asset.crypto} price={asset.price} amount={asset.amount} />
                        ))}
                    </div>
                </section>
                <CryptoTable />
                <NewsFeed />
            </div>
        </div>
    )
}

export default CryptoPortfolioTracker