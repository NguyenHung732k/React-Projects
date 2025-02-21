import React from 'react'
import InfiniteScroll from './InfiniteScroll'

const InfiniteScrollUI = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Infinite Scroll Example</h1>
                <InfiniteScroll apiEndpoint="https://jsonplaceholder.typicode.com/posts" />
            </div>
        </div>
    )
}

export default InfiniteScrollUI