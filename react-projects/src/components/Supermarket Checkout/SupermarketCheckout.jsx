import React, { useState } from "react"
import Item from "./Item"

const itemsList = [
    { id: 1, name: "Bananas", reaction: "peel" },
    { id: 2, name: "Bag of Chips", reaction: "explode" },
    { id: 3, name: "Cucumber", reaction: "dance" },
    { id: 4, name: "Squid", reaction: "wiggle" },
    { id: 5, name: "Pencil", reaction: "scatter" },
    { id: 6, name: "Kitten", reaction: "meow" },
];

const SupermarketCheckout = () => {
    const [scannedItems, setScannedItems] = useState([])

    const scanItem = (item) => {
        if (!scannedItems.includes(item)) {
            setScannedItems([...scannedItems, item])
        }
    }

    return (
        <div className="App min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white mb-12 drop-shadow-lg">Wacky Supermarket Checkout</h1>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                {itemsList.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scanItem(item)}
                        className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
                    >
                        Scan {item.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {scannedItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">Your Wacky Receipt:</h2>
                <p className="text-xl text-white">
                    {scannedItems.length > 0
                        ? scannedItems.map((item) => item.name).join(", ")
                        : "No items scanned yet!"}
                </p>
                {scannedItems.length > 0 && (
                    <div className="mt-6 animate-bounce text-2xl text-white font-bold">
                        <span role="img" aria-label="confetti">🎉</span> Checkout Complete! <span role="img" aria-label="confetti">🎉</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SupermarketCheckout