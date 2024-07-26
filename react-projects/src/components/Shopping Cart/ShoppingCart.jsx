import React, { useState } from 'react'




const carts = [

    {
        id: 1,
        img: "https://www.apple.com/v/imac/p/images/overview/color_front_green__eb8qbnemmre6_large.jpg",
        alt: "img",
        title: "PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24' Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT",
        quantity: 2,
        price: 200,
    },

    {
        id: 2,
        img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWMW3ref_VW_PF+watch-case-45-aluminum-starlight-nc-s9_VW_PF+watch-face-45-aluminum-starlight-s9_VW_PF_WF_CO_GEO_VN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1707939846917",
        alt: "img",
        title: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
        quantity: 1,
        price: 598,
    },

    {
        id: 3,
        img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
        alt: "img",
        title: "Apple - MacBook Pro 16' Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black",
        quantity: 1,
        price: 1499,
    },

]

const ShoppingCart = () => {

    const [items, setItems] = useState(carts)

    const handleIncreaseQuantity = (itemId) => {
        setItems(prevItem => prevItem.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    }

    const handleDecreaseQuantity = (itemId) => {
        setItems(prevItem => prevItem.map(item => item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        setItems(prevItem => prevItem.map(item => item.id === itemId && item.quantity > 0 ? { ...item, quantity: newQuantity } : item))
    }

    const totalPrice = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    return (
        <section className="bg-white py-8">
            <div className="mx-auto max-w-screen-xl px-4">
                <h2 className="text-2xl font-semibold text-gray-900">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full lg:max-w-2xl xl:max-w-4xl">
                        <div className="flex flex-col justify-center items-center gap-6">


                            {items && items.length > 0 && items.map((item) => (
                                <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">

                                    <div className="flex justify-center items-center gap-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                            />
                                        </div>

                                        <a href="#" className="shrink-0">
                                            <img className="h-20 w-20" src={item.img} alt={item.alt} />
                                        </a>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:max-w-md">
                                            <a href="#" className="text-base font-medium text-gray-900 no-underline hover:underline">{item.title}</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                                                    <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                                                    <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between md:justify-end">
                                            <div className="flex justify-center items-center">
                                                <button
                                                    onClick={() => handleDecreaseQuantity(item.id)}
                                                    disabled={item.quantity === 0}
                                                    type="button"
                                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                    </svg>
                                                </button>

                                                <input
                                                    onChange={(event) => handleQuantityChange(item.id, parseInt(event.target.value))}
                                                    type="text"
                                                    className="w-8 mx-2 border-0 bg-transparent text-center text-sm font-medium text-gray-900"
                                                    value={item.quantity}
                                                    required
                                                />

                                                <button
                                                    onClick={() => handleIncreaseQuantity(item.id)}
                                                    type="button"
                                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex justify-end items-center md:w-32">
                                                <p className="mb-0.5 text-center text-base font-bold text-gray-900">$ {item.price * item.quantity}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-gray-900">Order summary</p>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-base font-normal text-gray-500">Original price</div>
                                        <div className="text-base font-medium text-gray-900">${totalPrice}</div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-base font-normal text-gray-500">Savings</div>
                                        <div className="text-base font-medium text-green-600">-$0</div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-base font-normal text-gray-500">Tax</div>
                                        <div className="text-base font-medium text-gray-900">$0</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <div className="text-base font-bold text-gray-900">Total</div>
                                    <div className="text-base font-bold text-gray-900">${totalPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart