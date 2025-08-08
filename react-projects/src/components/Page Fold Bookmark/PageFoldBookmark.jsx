import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

const PageFoldBookmark = () => {
    const [isBookmarked, setIsBookmarked] = useState(false)

    // Toggle bookmark state
    const handleToggle = () => {
        setIsBookmarked(!isBookmarked)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="relative inline-block">
                {/* Bookmark Icon */}
                <button
                    onClick={handleToggle}
                    className="relative transition-transform transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
                >
                    {/* Tooltip */}
                    <span
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white px-2 py-1 rounded opacity-0 transition-opacity duration-300"
                        style={{
                            opacity: isBookmarked ? 1 : 0,
                        }}
                    >
                        {isBookmarked ? "Bookmarked" : "Click to bookmark"}
                    </span>
                    {isBookmarked ? (
                        <FaBookmark className="text-yellow-500 text-5xl transition-all duration-300 ease-in-out hover:text-yellow-400" />
                    ) : (
                        <FaRegBookmark className="text-gray-500 text-5xl transition-all duration-300 ease-in-out hover:text-gray-400" />
                    )}
                </button>

                {/* Page Fold Animation */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 rounded-tl-lg transition-all transform duration-500 ease-out ${isBookmarked
                        ? 'rotate-12 scale-110 opacity-100 shadow-xl'
                        : 'rotate-0 scale-0 opacity-0'
                        } hover:scale-125 hover:opacity-90`}
                ></div>
            </div>
        </div>
    );
};

export default PageFoldBookmark