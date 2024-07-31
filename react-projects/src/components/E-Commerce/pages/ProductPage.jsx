import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'

import cartItems from '../cartItems'


const ProductPage = () => {

    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [newItem, setNewItem] = useState(item)


    useEffect(() => {
        const fetchProduct = () => {
            axios
                .get(`https://dummyjson.com/products/${id}`)
                .then((response) => { setItem(response.data) })
        }

        fetchProduct()
    }, [id])

    const handleClick = (item) => {
        const newItem = item

        cartItems.push(newItem)
    }


    return (
        <div className="container mx-auto p-4">
            {item ? (
                <section className="relative">
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                        <div className="flex justify-center items-start gap-16">
                            <img className="w-full" src={item.image || "https://via.placeholder.com/200"} alt={item.title} />

                            <div className="w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                                <div className="w-full max-w-xl">
                                    <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">{item.title}</h2>

                                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">${item.price.toFixed(2)}</h6>

                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{item.rating}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="text-gray-500 text-base font-normal mb-5">
                                        {item.description}
                                    </div>

                                    <div className="flex justify-center items-center gap-8 py-4">
                                        <Link className="w-full text-decoration-none" to="/cart">
                                            <button
                                                onClick={() => handleClick(item)}
                                                className="py-3 px-3 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 hover:bg-indigo-100">
                                                <svg className="w-5 h-5 stroke-indigo-600" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                        stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                                </svg>
                                                Add to cart
                                            </button>
                                        </Link>
                                        <button className="text-center w-full py-3 px-3 rounded-3xl bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm hover:bg-indigo-700 hover:shadow-indigo-400">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>Loading...</p>
            )
            }




        </div >



    )
}

export default ProductPage