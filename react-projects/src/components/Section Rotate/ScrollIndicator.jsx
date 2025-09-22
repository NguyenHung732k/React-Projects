import React from 'react'

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 text-center w-full">
            <div className="text-primary text-lg mb-2">Scroll down</div>
            <div className="w-8 h-8 mx-auto my-4 border-2 border-primary rounded-full scroll-bounce"></div>
        </div>
    )
}

export default ScrollIndicator