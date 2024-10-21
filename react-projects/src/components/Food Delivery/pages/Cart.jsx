import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)


  return (
    <div className="mt-24">
      <div className="my-2">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-700">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => (
          cartItems &&
          <div>
            <div key={index} className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-700 my-2">
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p onClick={() => removeFromCart(item._id)} className="cursor-pointer">x</p>
            </div>
            <hr className="h-px bg-[#e2e2e2]" />
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-between gap-[12vw] max-[1050px]:flex-col-reverse">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 max-[1050px]:justify-start">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded">
              <input className="bg-transparent border-none outline-none pl-2.5" type="text" placeholder="Promo code" />
              <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart