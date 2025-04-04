import React, { useState, useEffect } from 'react'
import Circular from './Circular'

const CircularProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 1
            })
        }, 50)
    }, [])

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <Circular
                progress={progress}
                size={200}
                strokeWidth={16}
                color="bg-teal-500"
                label={true}
                animationDuration={0.5}
                bgColor="bg-gray-300"
                showTooltip={true}
                shadow={true}
                gradient={true}
            />
        </div>
    )
}

export default CircularProgressBar