import React from 'react';
import ScrollFadeContainer from './ScrollFadeContainer';

const ScrollFade = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6">
            <h1 className="text-2xl font-semibold mb-6">✨ Scroll Fade UI</h1>

            <ScrollFadeContainer height="h-[28rem]">
                <ul className="space-y-3">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <li
                            key={i}
                            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            List Item #{i + 1}
                        </li>
                    ))}
                </ul>
            </ScrollFadeContainer>
        </div>
    )
}

export default ScrollFade