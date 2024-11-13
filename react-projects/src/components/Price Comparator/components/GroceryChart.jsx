import React from 'react'

const GroceryItem = ({ item, stores, storePrices }) => {
    const prices = stores.map((store) => storePrices[store.id][item.id])
    const bestPrice = Math.min(...prices)

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:scale-105 transition-transform">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {bestPrice && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Best Price: ${bestPrice.toFixed(2)}
                    </span>
                )}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
                {stores.map((store) => (
                    <div key={store.id} className="flex flex-col items-center">
                        <div className="text-sm">{store.name}</div>
                        <div className="text-gray-700">${storePrices[store.id][item.id].toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroceryItem