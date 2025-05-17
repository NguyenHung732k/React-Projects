import React, { useState, useRef } from "react"
import { AiOutlineReload } from "react-icons/ai"

const PullToRefresh = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const [refreshProgress, setRefreshProgress] = useState(0)
    const pullRef = useRef(null)

 
    const handleTouchStart = (event) => {
        const touchStart = event.touches[0].clientY
        pullRef.current.touchStart = touchStart
    }

    const handleTouchMove = (event) => {
        const touchMove = event.touches[0].clientY
        const pullDistance = touchMove - pullRef.current.touchStart

        if (pullDistance > 0) {
            setScrollY(pullDistance)
        }
    }

    const handleTouchEnd = () => {
        if (scrollY > 100) {
            setIsRefreshing(true)
            simulateRefresh()
        } else {
            setScrollY(0)
        }
    }

    const simulateRefresh = () => {
        let progress = 0
        const interval = setInterval(() => {
            progress += 10
            setRefreshProgress(progress)
            if (progress >= 100) {
                clearInterval(interval)
                setIsRefreshing(false)
                setScrollY(0)
                setRefreshProgress(0)
            }
        }, 200)
    }

    const getPullAnimationStyle = () => {
        return {
            transform: `translateY(${Math.min(scrollY, 120)}px)`,
            transition: isRefreshing ? "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)" : "none",
            opacity: scrollY > 30 ? Math.min(scrollY / 120, 1) : 0,
        }
    }

    return (
        <div
            className="h-screen overflow-hidden pt-4 relative bg-gradient-to-b from-blue-200 to-blue-50"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Pull-to-Refresh Indicator */}
            <div
                ref={pullRef}
                className="absolute top-0 left-0 w-full flex justify-center items-center"
                style={getPullAnimationStyle()}
            >
                {isRefreshing ? (
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <AiOutlineReload className="animate-spin text-blue-600 text-4xl" />
                        <p className="text-blue-600 text-sm">Refreshing...</p>
                        <div className="w-24 h-2 bg-gray-300 rounded-full mt-2">
                            <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${refreshProgress}%` }}
                            ></div>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-600 flex flex-col justify-center items-center space-y-2">
                        <p className="text-lg">Pull to refresh</p>
                        <div className="h-1 w-12 bg-gray-400 rounded-full"></div>
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            <div className="p-4 pt-24 bg-white shadow-md rounded-xl mx-4">
                <h1 className="text-3xl font-bold text-gray-800">Pull-to-Refresh Demo</h1>
                <p className="mt-4 text-gray-700">
                    Scroll down and pull down to refresh the page.
                </p>
                <p className="mt-4 text-gray-600">
                    This demo simulates a pull-to-refresh interaction commonly seen on mobile apps.
                </p>
            </div>
        </div>
    )
}

export default PullToRefresh