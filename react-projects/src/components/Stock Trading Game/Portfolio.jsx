import React from 'react'

const Portfolio = ({ portfolio, stockPrices }) => {
    const calculatePortfolioValue = () => {
        let totalValue = 0;
        for (let symbol in portfolio) {
            totalValue += portfolio[symbol] * stockPrices[symbol];
        }
        return totalValue;
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 text-left">Stock</th>
                        <th className="p-3 text-left">Shares</th>
                        <th className="p-3 text-left">Price</th>
                        <th className="p-3 text-left">Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(portfolio).map(([symbol, quantity]) => (
                        <tr key={symbol}>
                            <td className="p-3">{symbol}</td>
                            <td className="p-3">{quantity}</td>
                            <td className="p-3">${stockPrices[symbol]}</td>
                            <td className="p-3">${stockPrices[symbol] * quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className="text-xl mt-4 font-semibold">
                Total Portfolio Value: ${calculatePortfolioValue()}
            </h3>
        </div>
    )
}

export default Portfolio