import React from 'react'

const PortfolioCard = ({ crypto, price, amount }) => {
    const totalValue = price * amount
    const profitLoss = totalValue > 0 ? 'text-accent' : 'text-danger'

    return (
        <div className="p-6 m-4 bg-neutral rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-primary">{crypto}</h2>
            <p className="text-lg text-gray-600">Price: <span className="font-bold text-secondary">${price}</span></p>
            <p className="text-lg text-gray-600">Amount: <span className="font-bold">{amount}</span></p>
            <p className="text-xl font-semibold mt-4">Total: <span className={`font-bold ${profitLoss}`}>${totalValue.toFixed(2)}</span></p>
        </div>
    )
}

export default PortfolioCard