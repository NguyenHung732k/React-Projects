import React from 'react'

const OrderSummary = ({ order }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="border-b border-gray-300 pb-4">
                {order.items && order.items.map(item => (
                    <div key={item.id} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between font-bold mt-4">
                <span>Total</span>
                <span>${order.total}</span>
            </div>
        </div>
    )
}

export default OrderSummary