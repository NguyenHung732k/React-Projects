import React from 'react';
import FadeInList from './FadeInList'

const FadeInOnLoad = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
    ]

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Welcome to the Sequential Fade-In List
            </h1>
            <FadeInList items={items} delay={500} />
        </div>
    )
}

export default FadeInOnLoad