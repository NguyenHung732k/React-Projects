import React from 'react'


import headerImg from '../../../assets/food delivery/header_img.png'

const Header = () => {
    return (
        <div className="relative h-[34vw] max-[1050px]:h-[38vw] mx-auto my-8" style={{ background: `url(${headerImg}) no-repeat center`, borderRadius: "20px" }}>
            <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] max-[1050px]:max-w-[45%] bottom-[10%] left-[6vw]">
                <h2 className="text-white font-medium text-[4.5vw]">Order your favorite food here</h2>
                <p className="text-white text-[1vw] max-[830px]:hidden">
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                    Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time
                </p>
                <button
                    className="text-gray-900 bg-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-[2.3vw] py-[1vw] text-center max-[830px]:py-[2vw] max-[830px]:px-[4vw]"
                >
                    View Menu
                </button>
            </div>
        </div>
    )
}

export default Header