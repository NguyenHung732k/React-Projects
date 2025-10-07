import React from 'react';

const HoverIcon = ({ src, alt = "Avatar", name = "", size = "w-32 h-32" }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-500 ease-out">
                <div className={`relative ${size}`}>
                    {/* Shadow */}
                    <div className={`
          absolute inset-0 rounded-full 
          bg-black/30 blur-md 
          translate-x-2 translate-y-2
          group-hover:-translate-x-2 group-hover:-translate-y-2
          transition-all duration-500 ease-out
          z-0
        `} />

                    {/* Avatar */}
                    <img
                        src={src}
                        alt={alt}
                        className={`
            relative z-10 rounded-full object-cover w-full h-full shadow-xl
            group-hover:scale-110 group-hover:-translate-y-1
            group-hover:ring-4 group-hover:ring-indigo-300 
            transition-transform duration-500 ease-out
          `}
                    />
                </div>

                {/* Optional Name Label */}
                {name && (
                    <p className="mt-3 text-center text-gray-800 font-medium text-sm group-hover:text-indigo-600 transition-colors duration-300">
                        {name}
                    </p>
                )}
            </div>
        </div>
    )
}

export default HoverIcon