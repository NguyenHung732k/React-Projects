import React from 'react'

import { assets } from '../../../assets/food delivery/assets'

const AppDownload = () => {
    return (
        <div className="mt-28 text-[3vw] text-center font-medium" id="app-download">
            <h3>For Better Experience Download App</h3>
            <div className="flex justify-center gap-[2vw] mt-10">
                <img className="w-[30vw] max-w-48 hover:scale-105" src={assets.play_store} alt="" />
                <img className="w-[30vw] max-w-48 hover:scale-105" src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload