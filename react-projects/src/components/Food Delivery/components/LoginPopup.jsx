import React, { useState } from 'react'
import { assets } from '../../../assets/food delivery/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login")

    return (
        <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
            <form className="place-self-center w-[23vw] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg">
                <div className="flex justify-between items-center text-black ">
                    <h2>{currentState}</h2>
                    <img className="w-4 cursor-pointer" onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    {currentState === "Login" ? <></> : <input className="block w-full rounded-md border-1 p-2.5" type="text" placeholder="Your name" required />}

                    <input className="block w-full rounded-md border-1 p-2.5" type="email" placeholder="Your email" required />
                    <input className="block w-full rounded-md border-1 p-2.5" type="password" placeholder="Password" required />
                </div>
                <button
                    className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    {currentState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="flex items-start gap-2 -mt-2.5">
                    <input className="mt-2.5" type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account? <span className="text-orange-500 font-medium cursor-pointer" onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    :
                    <p>Already have an account? <span className="text-orange-500 font-medium cursor-pointer" onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup