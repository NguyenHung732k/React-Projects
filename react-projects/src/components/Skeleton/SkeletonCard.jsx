import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton'

const SkeletonCard = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-80 p-6 bg-white rounded-xl shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg duration-300">
                <div className="flex items-center space-x-4">
                    {loading ? (
                        <Skeleton className="w-16 h-16 rounded-full" />
                    ) : (
                        <img
                            src="https://i.pravatar.cc/150?img=32"
                            alt="Jane Doe's Avatar"
                            className="w-16 h-16 rounded-full animate-fade-in"
                        />
                    )}
                    <div className="flex-1">
                        {loading ? (
                            <>
                                <Skeleton className="w-28 h-4 mb-2 rounded-md" />
                                <Skeleton className="w-20 h-4 rounded-md" />
                            </>
                        ) : (
                            <div className="animate-fade-in">
                                <h4 className="text-lg font-semibold text-gray-800">Jane Doe</h4>
                                <p className="text-sm text-gray-500">Frontend Developer</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard