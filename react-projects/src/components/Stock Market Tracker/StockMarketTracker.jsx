import React, { useState } from 'react'
import StockSearch from './StockSearch'
import StockDetails from './StockDetails'



const StockMarketTracker = () => {

    const [symbol, setSymbol] = useState('')


    const handleSearch = (symbol) => {
        setSymbol(symbol)
    }


    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-gray-100 p-8">
            <StockSearch onSearch={handleSearch} />
            {symbol && <StockDetails symbol={symbol} />}
        </div>
    )
}

export default StockMarketTracker