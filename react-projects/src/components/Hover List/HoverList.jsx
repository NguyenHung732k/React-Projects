import React from "react";
import { FiArrowRight } from "react-icons/fi"

const HoverList = ({ items = [] }) => {
    return (
        <div className="p-6 max-w-md mx-auto">
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li
                        key={i}
                        tabIndex={0}
                        className="
              group relative flex items-center gap-3 
              p-4 bg-white shadow-sm rounded-xl cursor-pointer
              transition-all duration-300 ease-out
              hover:bg-blue-50 hover:shadow-md hover:scale-[1.02]
              focus:outline-none focus:ring-2 focus:ring-blue-500
              active:scale-[0.99]
            "
                    >
                        {/* Slide-in Icon */}
                        <span
                            className="
                absolute left-3 top-1/2 -translate-y-1/2
                opacity-0 translate-x-[-6px]
                transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:translate-x-0
              "
                        >
                            {item.icon || <FiArrowRight className="text-blue-600 text-xl" />}
                        </span>

                        {/* Label */}
                        <span
                            className="
                text-gray-800 text-lg font-medium
                transition-all duration-300 ease-out
                group-hover:translate-x-2 group-hover:text-blue-700
              "
                        >
                            {item.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HoverList