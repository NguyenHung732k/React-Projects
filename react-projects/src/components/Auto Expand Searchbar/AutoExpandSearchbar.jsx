import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

const AutoExpandSearchbar = () => {
    const [query, setQuery] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        if (isOpen) inputRef.current?.focus()
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (!query) setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [query])

    const handleClear = () => {
        setQuery("")
        inputRef.current?.focus()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <div
                ref={wrapperRef}
                className={`flex items-center transition-all duration-300 ease-in-out
                            border border-gray-300 bg-white rounded-full px-4 py-2 shadow-sm
                            focus-within:ring-2 focus-within:ring-blue-400
                            ${isOpen ? "w-72" : "w-10"} 
                            cursor-text overflow-hidden group`}
                onClick={() => setIsOpen(true)}
            >
                <FiSearch
                    className={`text-gray-500 text-xl transition-all duration-300 
          ${isOpen ? "mr-2" : "mx-auto"}`}
                />

                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search..."
                    className={`bg-transparent outline-none text-sm w-full transition-all duration-300
          placeholder-gray-400 ${isOpen ? "opacity-100 ml-1" : "opacity-0 w-0"}`}
                />

                {query && (
                    <IoClose
                        onClick={handleClear}
                        className="text-gray-400 text-lg cursor-pointer ml-2 hover:text-gray-600 transition"
                    />
                )}
            </div>
        </div>
    )
}

export default AutoExpandSearchbar