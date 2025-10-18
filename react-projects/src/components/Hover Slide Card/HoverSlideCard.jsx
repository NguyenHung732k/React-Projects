import React from "react";

const HoverSlideCard = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="group relative w-80 h-52 overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all ease-in-out transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg overflow-hidden">
                    <div className="group-hover:translate-x-[20%] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-400 flex items-center justify-center rounded-lg">
                                <p className="text-white text-xl font-semibold p-4">
                                    Featured Content Inside
                                </p>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-between px-4 py-4">
                                <p className="text-white text-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                    Discover More
                                </p>
                                <p className="text-white text-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                    Explore Features
                                </p>
                            </div>

                            <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverSlideCard