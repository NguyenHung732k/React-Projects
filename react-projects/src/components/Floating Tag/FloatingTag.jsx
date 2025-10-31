import React from 'react';
import './FloatingTag.css'

const FloatingTag = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="tag-container">
                <div className="tag bg-indigo-500">Tag 1</div>
                <div className="tag bg-teal-500">Tag 2</div>
                <div className="tag bg-orange-500">Tag 3</div>
                <div className="tag bg-pink-500">Tag 4</div>
            </div>
        </div>
    )
}

export default FloatingTag