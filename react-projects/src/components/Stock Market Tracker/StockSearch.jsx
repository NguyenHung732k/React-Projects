import React, { useState } from 'react'

const StockSearch = ({ onSearch }) => {

    const [symbol, setSymbol] = useState('')


    const handleSearch = (event) => {
        event.preventDefault()
        if (symbol) {
            onSearch(symbol.toUpperCase())
            setSymbol('')
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-96 mx-auto p-4 bg-white rounded-lg shadow-md">
            <label className="block text-gray-700 text-lg font-medium mb-2">Search Stock</label>
            <div className="flex">
                <input
                    type="text"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg outline-none"
                    placeholder="Enter stock symbol (e.g., AAPL)"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default StockSearch