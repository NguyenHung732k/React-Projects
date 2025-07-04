import React, { useState, useEffect } from 'react';
import './TagInput.css'


const TagInput = () => {
    const [tags, setTags] = useState([])
    const [input, setInput] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [error, setError] = useState('')

    const availableTags = ['React', 'Vue', 'Angular', 'JavaScript', 'CSS', 'HTML']

    const addTag = (tag) => {
        if (tag && !tags.includes(tag)) {
            setTags([...tags, tag])
            setInput('')
            setError('')
        } else if (tags.includes(tag)) {
            setError('Tag already exists.')
        }
    }

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index))
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        setInput(value)

        if (value) {
            setSuggestions(
                availableTags.filter(tag => tag.toLowerCase().includes(value.toLowerCase()))
            )
        } else {
            setSuggestions([])
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && input.trim()) {
            addTag(input.trim())
        }
    }

    const handleTagClick = (tag) => {
        addTag(tag)
        setSuggestions([])
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.tag-input-container')) {
                setSuggestions([])
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className="container">
            <div className="tag-input-container relative">
                <div className="flex flex-wrap gap-2 p-2 border rounded-xl bg-gray-50">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">
                            {tag}
                            <button
                                onClick={() => removeTag(index)}
                                className="delete-btn"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Press Enter to add tags"
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                {suggestions.length > 0 && (
                    <div className="suggestions">
                        {suggestions.map((tag, index) => (
                            <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TagInput