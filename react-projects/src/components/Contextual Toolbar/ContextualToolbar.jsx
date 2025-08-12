import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar'

const ContextualToolbar = () => {
    const [selectedText, setSelectedText] = useState('')
    const [toolbarPosition, setToolbarPosition] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    const applyStyle = (style) => {
        const selection = window.getSelection()
        if (selection.rangeCount) {
            const range = selection.getRangeAt(0)
            const span = document.createElement('span')
            span.style[style] = 'initial'
            range.surroundContents(span)
        }
    }

    const onBold = () => {
        applyStyle('fontWeight')
    }

    const onItalic = () => {
        applyStyle('fontStyle')
    }

    const onUnderline = () => {
        applyStyle('textDecoration')
    }

    const handleMouseUp = () => {
        const selection = window.getSelection()
        const text = selection.toString()

        if (text) {
            setSelectedText(text)

            const range = selection.getRangeAt(0)
            const rect = range.getBoundingClientRect()
            setToolbarPosition({
                x: rect.left + window.scrollX + rect.width / 2 - 30,
                y: rect.top + window.scrollY - 40,
            });
            setIsVisible(true)
        } else {
            setSelectedText('')
            setIsVisible(false)
        }
    }

    const handleMouseDown = () => {
        setSelectedText('')
        setIsVisible(false)
    }

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousedown', handleMouseDown)

        return () => {
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <div className="bg-white p-6 rounded-lg border shadow-lg">
                <p className="text-lg text-gray-800">
                    Select some text in this paragraph and use the floating toolbar to apply formatting (bold, italic, underline).
                </p>
            </div>

            <div
                className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <Toolbar
                    position={toolbarPosition}
                    onBold={onBold}
                    onItalic={onItalic}
                    onUnderline={onUnderline}
                />
            </div>
        </div>
    )
}

export default ContextualToolbar