import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const items = [
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'Tailwind CSS',
    'Next.js',
    'Gatsby',
    'Redux',
    'Node.js',
    'Express',
]

const LiveFilterList = () => {
    const [query, setQuery] = useState('')

    const filteredItems = useMemo(() => {
        if (!query) return items
        const lower = query.toLowerCase()
        return items.filter(item => item.toLowerCase().includes(lower))
    }, [query])

    const highlightMatch = (text) => {
        const idx = text.toLowerCase().indexOf(query.toLowerCase())
        if (idx === -1 || query === '') return text

        const before = text.slice(0, idx)
        const match = text.slice(idx, idx + query.length)
        const after = text.slice(idx + query.length)

        return (
            <>
                {before}
                <mark className="bg-yellow-300 text-black rounded px-1">{match}</mark>
                {after}
            </>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            <div className="max-w-xl mx-auto mt-16 px-6 py-8 bg-white rounded-xl shadow-2xl border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">🔍 Filter Technologies</h1>

                <input
                    type="text"
                    placeholder="Type to filter..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />

                <motion.div
                    key={filteredItems.length}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-500 mb-3"
                >
                    {filteredItems.length > 0
                        ? `${filteredItems.length} item${filteredItems.length !== 1 ? 's' : ''} found`
                        : 'No matches found'}
                </motion.div>

                <ul className="space-y-2 min-h-[100px]">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="px-5 py-3 bg-blue-50 text-blue-900 rounded-md border border-blue-200 shadow-sm hover:shadow-md transition"
                            >
                                {highlightMatch(item)}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-center text-gray-400"
                    >
                        Try another search term.
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default LiveFilterList