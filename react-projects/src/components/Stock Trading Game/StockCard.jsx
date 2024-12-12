import React from 'react'

const StockCard = ({ stockSymbol, stockPrice, handleBuyStock }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-lg">{stockSymbol}</h3>
            <p className="text-gray-500">Current Price: ${stockPrice}</p>
            <button
                onClick={() => handleBuyStock(stockSymbol)}
                className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
            >
                Buy 10 Shares
            </button>
        </div>
    )
}

export default StockCard