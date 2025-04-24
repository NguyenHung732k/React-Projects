import React from 'react'
import PageCurlCard from './PageCurlCard'

const PageCurl = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Informational Card */}
                <PageCurlCard corner="top-right" intensity={30} className="bg-white dark:bg-gray-800 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Hover Curl</h2>
                    <p className="text-gray-600 dark:text-gray-300">Subtle animation on hover in top-right corner.</p>
                </PageCurlCard>

                {/* Interactive Image */}
                <PageCurlCard corner="bottom-right" intensity={40} className="overflow-hidden">
                    <img
                        src="https://source.unsplash.com/400x250/?nature,water"
                        alt="Nature"
                        className="object-cover w-full h-full rounded-xl"
                    />
                </PageCurlCard>

                {/* Clickable Fold */}
                <PageCurlCard clickToCurl corner="bottom-left" intensity={35} className="bg-indigo-100 dark:bg-indigo-900 p-6">
                    <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Click to Peel</h2>
                    <p className="text-indigo-700 dark:text-indigo-200">Try clicking the bottom-left corner.</p>
                </PageCurlCard>
            </div>
        </div>
    );
}

export default PageCurl