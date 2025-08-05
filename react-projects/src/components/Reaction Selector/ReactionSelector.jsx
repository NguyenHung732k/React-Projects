import React, { useState, useRef } from 'react';
import clsx from 'clsx';

const reactions = [
    { emoji: '👍', label: 'Like' },
    { emoji: '❤️', label: 'Love' },
    { emoji: '😂', label: 'Haha' },
    { emoji: '😮', label: 'Wow' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
]

const radius = 90

const ReactionSelector = () => {
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(null)
    const [selected, setSelected] = useState(null)
    const timerRef = useRef(null)

    const handlePressStart = () => {
        timerRef.current = setTimeout(() => {
            setOpen(true)
            if (navigator.vibrate) navigator.vibrate(30)
        }, 400)
    }

    const handlePressEnd = () => {
        clearTimeout(timerRef.current)
        if (hovered) {
            setSelected(hovered)
        }
        setOpen(false)
        setHovered(null)
    }

    const handleSelect = (reaction) => {
        setSelected(reaction.label)
        setOpen(false)
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => {
                    setOpen(false);
                    setHovered(null);
                }}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
            >
                {/* Main Reaction Button */}
                <button
                    className={clsx(
                        'w-16 h-16 rounded-full text-white text-2xl shadow-xl flex items-center justify-center transition-transform duration-200',
                        {
                            'bg-blue-600 ring-4 ring-blue-300': selected,
                            'bg-blue-500 hover:scale-105': !selected,
                        }
                    )}
                >
                    {selected ? reactions.find((r) => r.label === selected)?.emoji : '👍'}
                </button>

                {/* Radial Reactions */}
                {open && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {reactions.map((reaction, index) => {
                            const angle = (360 / reactions.length) * index - 90;
                            const x = radius * Math.cos((angle * Math.PI) / 180);
                            const y = radius * Math.sin((angle * Math.PI) / 180);

                            return (
                                <div
                                    key={reaction.label}
                                    className="absolute pointer-events-auto transition-opacity duration-200"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`,
                                        transitionDelay: `${index * 40}ms`,
                                    }}
                                >
                                    <button
                                        onClick={() => handleSelect(reaction)}
                                        onMouseEnter={() => setHovered(reaction.label)}
                                        onMouseLeave={() => setHovered(null)}
                                        onTouchStart={() => setHovered(reaction.label)}
                                        onTouchEnd={() => setHovered(reaction.label)}
                                        className={clsx(
                                            'w-12 h-12 text-xl bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 backdrop-blur-sm',
                                            {
                                                'scale-125 ring-2 ring-blue-400': hovered === reaction.label,
                                                'hover:scale-125': hovered !== reaction.label,
                                            }
                                        )}
                                        title={reaction.label}
                                    >
                                        {reaction.emoji}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Output */}
            {selected && (
                <div className="mt-6 text-lg text-gray-800">
                    You selected: <span className="font-semibold">{selected}</span>
                </div>
            )}
        </div>
    )
}

export default ReactionSelector