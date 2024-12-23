import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

const ItemCard = ({ item }) => {
    const { name, category, condition, expirationDate } = item
    const itemDetails = JSON.stringify({ name, category, condition, expirationDate })

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{name}</h3>
            <p className="text-gray-700">Category: <span className="font-medium">{category}</span></p>
            <p className="text-gray-700">Condition: <span className="font-medium">{condition}</span></p>
            <p className="text-gray-700">Expires: <span className="font-medium">{expirationDate}</span></p>

            <div className="mt-6 text-center">
                <QRCodeSVG value={itemDetails} size={160} bgColor="#ffffff" fgColor="#4C6A92" />
                <p className="mt-4 text-sm text-gray-600">Scan for details</p>
            </div>
        </div>
    )
}

export default ItemCard