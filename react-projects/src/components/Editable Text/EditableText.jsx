import { useState, useRef, useEffect } from 'react';
import './EditableText.css'

const EditableText = ({ initialText = "Click text to edit..." }) => {
    const [text, setText] = useState(initialText)
    const [editing, setEditing] = useState(false)
    const [saved, setSaved] = useState(false)
    const [inputValue, setInputValue] = useState(text)
    const inputRef = useRef(null)

    useEffect(() => {
        if (editing) inputRef.current?.focus()
    }, [editing])

    const handleSave = () => {
        setText(inputValue.trim() || text)
        setEditing(false)
        setSaved(true)
        setTimeout(() => setSaved(false), 1500)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') handleSave()
        if (event.key === 'Escape') {
            setInputValue(text)
            setEditing(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="editable-text-container">
                {editing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        className="editable-input"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={handleSave}
                    />
                ) : (
                    <span
                        onClick={() => setEditing(true)}
                        className="editable-text"
                    >
                        {text}
                        <svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z" />
                        </svg>
                    </span>
                )}

                {saved && (
                    <div className="checkmark-container">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EditableText