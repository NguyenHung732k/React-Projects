import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'
import './AutocompleteDropdown.css'

const suggestionsList = [
    "Apple", "Apricot", "Banana", "Blackberry", "Blueberry", "Cherry", "Coconut",
    "Date", "Fig", "Grape", "Guava", "Kiwi", "Lemon", "Lime", "Mango",
    "Nectarine", "Orange", "Papaya", "Peach", "Pear", "Pineapple", "Plum",
    "Raspberry", "Strawberry", "Watermelon"
]

const AutocompleteDropdown = () => {
    const [inputValue, setInputValue] = useState('')
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [activeIndex, setActiveIndex] = useState(-1)
    const [isVisible, setIsVisible] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputValue.trim()) {
            const filtered = suggestionsList.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
            setFilteredSuggestions(filtered)
            setIsVisible(true)
        } else {
            setFilteredSuggestions([])
            setIsVisible(false)
        }
        setActiveIndex(-1)
    }, [inputValue])

    const handleKeyDown = (event) => {
        if (!filteredSuggestions.length) return

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            setActiveIndex((prev) => (prev + 1) % filteredSuggestions.length)
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            setActiveIndex((prev) => prev === -1 ? filteredSuggestions.length - 1 : (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length)
        } else if (event.key === 'Enter') {
            event.preventDefault()
            if (activeIndex >= 0) {
                setInputValue(filteredSuggestions[activeIndex])
                setIsVisible(false)
            }
        } else if (event.key === 'Escape') {
            setIsVisible(false)
        }
    }

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
        return parts.map((part, i) => (
            <span
                key={i}
                className={part.toLowerCase() === highlight.toLowerCase()
                    ? 'bg-indigo-100 text-indigo-700 font-semibold px-1 rounded'
                    : ''}
            >
                {part}
            </span>
        ))
    }

    return (
        <div className="relative w-full max-w-md mx-auto mt-16 font-sans">
            {/* Floating Label Input */}
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    className="peer w-full border border-gray-300 rounded-md px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 text-sm"
                    placeholder="Search a fruit"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                    aria-autocomplete="list"
                    aria-expanded={isVisible}
                    role="combobox"
                />
                <label
                    className="absolute left-3 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Search a fruit
                </label>

                {inputValue && (
                    <button
                        onClick={() => {
                            setInputValue('')
                            inputRef.current.focus()
                        }}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-lg"
                        aria-label="Clear input"
                    >
                        x
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {isVisible && (
                <ul
                    role="listbox"
                    className="absolute z-50 w-full bg-white rounded-lg shadow-xl mt-2 overflow-hidden max-h-72 overflow-y-auto backdrop-blur-sm grow-down"
                >
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={suggestion}
                            role="option"
                            aria-selected={activeIndex === index}
                            className={classNames(
                                'px-4 py-2 text-sm cursor-pointer transition-colors duration-200 hover:bg-indigo-50 slide-in',
                                { 'bg-indigo-100': index === activeIndex }
                            )}
                            style={{ animationDelay: `${index * 40}ms` }}
                            onMouseDown={() => {
                                setInputValue(suggestion)
                                setIsVisible(false)
                            }}
                        >
                            {getHighlightedText(suggestion, inputValue)}
                        </li>
                    ))}
                    {filteredSuggestions.length === 0 && (
                        <li className="px-4 py-2 text-sm text-gray-400">No results found</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default AutocompleteDropdown