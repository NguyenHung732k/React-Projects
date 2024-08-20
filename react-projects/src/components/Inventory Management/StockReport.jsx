import React from 'react'

const StockReport = ({ products }) => {

    const totalStock = products.reduce((sum, product) => sum + product.stock, 0)

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Stock Report</h2>
            <p className="text-lg text-gray-800">Total Stock: <span className="font-bold">{totalStock}</span></p>
        </div>
    )
}

export default StockReport