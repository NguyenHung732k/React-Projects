import React from 'react'

const ShoppingList = ({ items, addItem, removeItem }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Shopping List</h2>
            <ul className="mt-2">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center py-2 px-4 mb-2 bg-white rounded-lg shadow-sm">
                        <span>{item.name}</span>
                        <button onClick={() => removeItem(item)} className="text-red-500 hover:text-red-700">Remove</button>
                    </li>
                ))}
            </ul>
            <button
                onClick={addItem}
                className="fixed bottom-10 right-10 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                </svg>
            </button>
        </div>
    )
}

export default ShoppingList