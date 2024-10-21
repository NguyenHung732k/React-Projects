import React, { useContext, useState } from 'react'

import { assets } from '../../../assets/food delivery/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'


const NavBar = ({ setShowLogin }) => {

    const { getTotalCartAmount } = useContext(StoreContext)

    const [menu, setMenu] = useState("home")


    return (
        <div className="flex justify-between items-center px-0 py-5">
            <img
                className="w-36 max-[1050px]:w-[140px] max-[987px]:w-[120px]"
                src={assets.logo}
                alt="logo"
            />

            <ul className="flex gap-5 color-[#49557e] text-lg m-0 p-0 max-[830px]:hidden">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "pb-0.5 border-b-2 border-[#49557e] text-decoration-none text-black cursor-pointer" : "text-decoration-none text-black cursor-pointer"}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "text-decoration-none text-black pb-0.5 border-b-2 border-[#49557e] cursor-pointer" : "text-decoration-none text-black cursor-pointer"}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "text-decoration-none text-black pb-0.5 border-b-2 border-[#49557e] cursor-pointer" : "text-decoration-none text-black cursor-pointer"}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "text-decoration-none text-black pb-0.5 border-b-2 border-[#49557e] cursor-pointer" : "text-decoration-none text-black cursor-pointer"}>contact us</a>
            </ul>

            <div className="flex items-center gap-10 max-[1050px]:gap-8">
                <img className="max-[1050px]:w-6 max-[987px]:w-5" src={assets.search_icon} alt="" />

                <div className="relative">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-2 min-h-2 rounded bg-orange-400 -top-1.5 -right-1.5"}></div>
                </div>
                <button
                    onClick={() => setShowLogin(true)}
                    className="text-gray-900 bg-transparent border border-gray-300 hover:bg-[#fff4f2] font-medium rounded-full text-sm px-4 py-2.5 duration-0 max-[1050px]:px-6 max-[1050px]:py-2">
                    sign in
                </button>
            </div>
        </div>
    )
}

export default NavBar