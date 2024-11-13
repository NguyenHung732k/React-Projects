import React from 'react'

const GroceryItem = ({ item, stores, storePrices }) => {
    const priceList = stores.map((store, index) => {
        const storeData = storePrices.find((price) => price.storeId === store.id)
        const priceData = storeData ? storeData.priceList.find((p) => p.item === item) : null
        return {
            storeId: store.id,
            storeName: store.name,
            storeAddress: store.address,
            price: priceData ? priceData.price : null,
            storeData: storeData.priceList.find((i) => i.item === item[0].item),
        }
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center mb-4">{item.item}</h3>

            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-left bg-blue-600 text-white">Store</th>
                        <th className="py-2 px-4 text-left bg-blue-600 text-white">Price</th>
                        <th className="py-2 px-4 text-left bg-blue-600 text-white">Address</th>
                        <th className="py-2 px-4 text-left bg-blue-600 text-white">Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {priceList.map((storePrice) => (
                        <tr key={storePrice.storeId} className="border-b">
                            <td className="py-2 px-4">{storePrice.storeName}</td>
                            <td className="py-2 px-4">
                                {storePrice.price ? `${storePrice.price.toFixed(2)}` : 'Not Available'}
                            </td>
                            <td className="py-2 px-4">{storePrice.storeAddress}</td>
                            <td className="py-2 px-4">
                                {storePrice.price ? (
                                    <span className="text-green-500">In Stock</span>
                                ) : (
                                    <span className="text-red-500">Out of Stock</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                    Prices are approximate and may vary based on availability and promotions. Always check with the store before purchasing.
                </p>
            </div>
        </div>
    )
}

export default GroceryItem