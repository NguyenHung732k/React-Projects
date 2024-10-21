import React from 'react'

import { menu_list } from '../../../assets/food delivery/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="flex flex-col gap-5" id="explore-menu">
            <h1 className="text-[#262626] font-medium">Explore our menu</h1>
            <p className="max-w-[60%] columns-[#808080]">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="flex justify-between items-center gap-8 align-center mx-0 my-5 overflow-x-scroll" style={{}}>
                {menu_list && menu_list.length > 0 && menu_list.map((item, index) => (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="flex flex-col justify-center items-center">
                        <img
                            className={category === item.menu_name ? "rounded-full border-4 border-orange-500 p-0.5 w-[7.5vw] min-w-20 cursor-pointer rounded-full duration-200" : "w-[7.5vw] min-w-20 cursor-pointer rounded-full duration-200"}
                            src={item.menu_image}
                            alt="" />
                        <p className="mt-2.5 text-[#747474] text-[1.4vw] cursor-pointer">{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr className="h-0.5 my-8 bg-[#e2e2e2] border-0" />
        </div>
    )
}

export default ExploreMenu