import React, { useContext } from 'react'

import { assets } from '../../../assets/food delivery/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

    return (
        <div className="w-full m-auto rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300">
            <div className="relative">
                <img className="w-full rounded-t-lg" src={image} alt="" />
                {!cartItems[id] ?
                    <img className="absolute w-9 bottom-4 right-4 cursor-pointer rounded-full" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    :
                    <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white">
                        <img className="w-8 cursor-pointer" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p className="m-0">{cartItems[id]}</p>
                        <img className="w-8 cursor-pointer" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2.5">
                    <p className="text-2xl font-medium">{name}</p>
                    <img src={assets.rating_starts} alt="" className="w-[70px]" />
                </div>
                <p className="text-[#676767] text-sm">{description}</p>
                <p className="text-orange-500 text-2xl font-medium my-2.5 mx-0">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem