import React from 'react'

const InvoiceExport = ({ info, items, total }) => {

    return (

        <div className="relative flex justify-center items-center z-10">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen flex justify-center items-center overflow-y-auto">
                <div className="w-2/6 bg-white rounded-lg shadow-lg p-10">
                    <div className="flex items-center justify-between mb-12">
                        <div className="font-bold text-xl">INVOICE #INV12345</div>
                        <div className="text-md text-gray-700">Date: {new Date().getDate()} / {new Date().getMonth() + 1} / {new Date().getFullYear()}</div>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-8 mb-4">
                        <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
                        <div className="text-gray-700 mb-2">{info.name}</div>
                        <div className="text-gray-700 mb-2">{info.address}</div>
                        <div className="text-gray-700 mb-2">{info.phone}</div>
                        <div className="text-gray-700">{info.email}</div>
                    </div>
                    <table className="w-full text-center border-b-2 border-gray-300 pb-8 mb-8">
                        <thead>
                            <tr>
                                <th className="text-gray-700 font-bold py-2">Item</th>
                                <th className="text-gray-700 font-bold py-2">Quantity</th>
                                <th className="text-gray-700 font-bold py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.length > 0 && items.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-4 text-gray-700">{item.name}</td>
                                    <td className="py-4 text-gray-700">{item.quantity}</td>
                                    <td className="py-4 text-gray-700">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className="flex justify-end px-10 mb-8">
                        <div className="text-gray-700 mr-2 text-xl">Total:</div>
                        <div className="text-gray-700 font-bold text-xl">${total}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvoiceExport