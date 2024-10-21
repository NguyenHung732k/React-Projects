import React from 'react'

import { assets } from '../../../assets/food delivery/assets'

const Footer = () => {
    return (
        <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center mt-32 py-[20px] px-[8vw] pt-[80px]" id="footer">
            <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20">

                <div className="flex flex-col items-start gap-3">
                    <img className="mt-1" src={assets.logo} alt="" />
                    <p className="text-[#d9d9d9]">Lorem Ipsum is simply dummy text. Lorem Ipsum Lorem Ipsum is simply dummy text. Lorem Ipsum Lorem Ipsum is simply dummy text. Lorem Ipsum Lorem Ipsum is simply dummy text. Lorem Ipsum</p>
                    <div className="flex justify-center items-center">
                        <img className="w-[40px] mr-4" src={assets.facebook_icon} alt="" />
                        <img className="w-[40px] mr-4" src={assets.twitter_icon} alt="" />
                        <img className="w-[40px] mr-4" src={assets.linkedin_icon} alt="" />
                    </div>
                </div>


                <div className="flex flex-col items-start gap-3">
                    <h2 className="m-0 text-white">COMPANY</h2>
                    <ul className="list-none gap-2.5 p-0 m-0">
                        <li className="mb-2.5 cursor pointer">Home</li>
                        <li className="mb-2.5 cursor pointer">About us</li>
                        <li className="mb-2.5 cursor pointer">Delivery</li>
                        <li className="mb-2.5 cursor pointer">Privacy Policy</li>
                    </ul>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <h2 className="m-0 text-white">GET IN TOUCH</h2>
                    <ul className="list-none gap-2.5 p-0 m-0">
                        <li className="mb-2.5 cursor pointer">123-123-123-123</li>
                        <li className="mb-2.5 cursor pointer">email@email.com</li>
                    </ul>
                </div>
            </div>
            <hr className="w-full h-0.5 mx-0 my-5" />
            <p className="text-[#d9d9d9]">Copyright 2024 &copy; - All Rights Reserved.</p>
        </div>
    )
}

export default Footer