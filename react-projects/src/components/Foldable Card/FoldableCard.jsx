import { useState } from 'react'

const FoldableCard = ({ direction = 'vertical', children }) => {
    const [isFolded, setIsFolded] = useState(true)

    const handleFoldToggle = () => {
        setIsFolded(!isFolded)
    }

    // Define the fold animation based on direction (vertical/horizontal)
    const foldStyles = {
        vertical: {
            foldClosed: 'h-0 overflow-hidden',
            foldOpen: 'h-full',
            foldDirection: 'rotateX',
        },
        horizontal: {
            foldClosed: 'w-0 overflow-hidden',
            foldOpen: 'w-full',
            foldDirection: 'rotateY',
        },
    }

    const { foldClosed, foldOpen, foldDirection } = foldStyles[direction]

    return (
        <div className="relative w-72 h-96 perspective-1000 mx-auto">
            <div
                className={`w-full h-full bg-white border-2 border-gray-300 rounded-2xl shadow-lg transition-all duration-700 transform ${isFolded ? `rotate-${foldDirection}-180` : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Folded Side */}
                <div
                    className={`absolute inset-0 ${isFolded ? foldClosed : foldOpen} bg-gradient-to-t from-blue-100 to-white rounded-2xl`}
                    style={{ transformOrigin: direction === 'vertical' ? 'top' : 'left' }}
                >
                    <div className="p-6 text-center text-gray-700">
                        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                        <p className="text-sm text-gray-500">Tap to unfold and see more content</p>
                    </div>
                </div>

                {/* Unfolded Side */}
                <div
                    className={`absolute inset-0 ${isFolded ? foldOpen : foldClosed} bg-white rounded-2xl`}
                    style={{
                        transformOrigin: direction === 'vertical' ? 'bottom' : 'right',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="p-6 text-center text-gray-700">
                        <h2 className="text-xl font-semibold">Card Content</h2>
                        <p>{children}</p>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={handleFoldToggle}
                aria-label={isFolded ? 'Unfold the card' : 'Fold the card'}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-5 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transform transition-transform duration-300 ${isFolded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
                <span className="ml-2">{isFolded ? 'Unfold' : 'Fold'}</span>
            </button>
        </div>
    )
}

export default FoldableCard