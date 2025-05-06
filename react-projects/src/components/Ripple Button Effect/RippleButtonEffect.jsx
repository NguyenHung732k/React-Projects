import React from 'react'
import RippleButton from './RippleButton'

const RippleButtonEffect = () => {
    return (
        <div className="flex justify-center items-center gap-6 h-screen bg-gray-100">
            {/* Filled Button */}
            <RippleButton
                variant="filled"
                color="rgba(255, 255, 255, 0.6)"
                duration={500}
            >
                Filled Button
            </RippleButton>

            {/* Outlined Button */}
            <RippleButton
                variant="outlined"
                color="rgba(255, 255, 255, 0.6)"
                duration={700}
            >
                Outlined Button
            </RippleButton>

            {/* Ghost Button */}
            <RippleButton
                variant="ghost"
                color="rgba(255, 255, 255, 0.6)"
                duration={600}
            >
                Ghost Button
            </RippleButton>
        </div>
    )
}

export default RippleButtonEffect