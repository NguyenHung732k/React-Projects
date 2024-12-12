import React, { useState } from 'react'

const Transaction = ({ stockPrices, handleBuyStock, handleSellStock, portfolio }) => {
    const [stockSymbol, setStockSymbol] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmitBuy = () => {
        if (quantity <= 0) {
            alert('Please enter a valid quantity.')
            return
        }
        handleBuyStock(stockSymbol, quantity)
    }

    const handleSubmitSell = () => {
        if (quantity <= 0 || portfolio[stockSymbol] < quantity) {
            alert('You do not have enough shares.')
            return
        }
        handleSellStock(stockSymbol, quantity)
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Buy/Sell Stocks</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Stock Symbol"
                    className="w-full p-2 border rounded-lg"
                    onChange={(event) => setStockSymbol(event.target.value.toUpperCase())}
                />
                <input
                    type="number"
                    value={quantity}
                    min="1"
                    className="w-full p-2 border rounded-lg"
                    onChange={(event) => setQuantity(Number(event.target.value))}
                />
                <div className="flex space-x-4 mt-4">
                    <button
                        onClick={handleSubmitBuy}
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors w-1/2"
                    >
                        Buy
                    </button>
                    <button
                        onClick={handleSubmitSell}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors w-1/2"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Transaction