import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const FadeInContent = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    )
}

const InfiniteScroll = ({ apiEndpoint, scrollSpeed = 1, effect = 'ease' }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const page = useRef(1)

    const fetchData = async () => {
        if (loading || !hasMore) return
        setLoading(true)

        try {
            const response = await axios.get(`${apiEndpoint}?page=${page.current}`)
            if (response.data.length === 0) {
                setHasMore(false)
            } else {
                setData((prevData) => [...prevData, ...response.data])
                page.current += 1
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleScroll = () => {
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        if (bottom) {
            fetchData()
        }
    }

    useEffect(() => {
        fetchData()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="space-y-6 p-6">
            {data.map((item, index) => (
                <FadeInContent key={index}>
                    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-xl hover:scale-105">
                        <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                        <p className="text-gray-700">{item.body}</p>
                    </div>
                </FadeInContent>
            ))}

            {/* Loading indicator */}
            {loading && (
                <div className="flex justify-center items-center py-6">
                    <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            )}

            {!hasMore && (
                <div className="text-center text-gray-500 py-6">No more content available.</div>
            )}
        </div>
    )
}

export default InfiniteScroll