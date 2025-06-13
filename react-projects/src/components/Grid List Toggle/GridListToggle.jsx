import { useEffect, useState } from 'react'
import ViewToggle from './ViewToggle'

const GridListToggle = () => {
    const [view, setView] = useState('grid')

    useEffect(() => {
        const saved = localStorage.getItem('view')
        if (saved) setView(saved)
    }, [])

    const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`)

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                    <ViewToggle view={view} setView={setView} />
                </header>

                <section
                    className={`grid gap-6 transition-all duration-500 ${view === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                        : 'grid-cols-1'
                        }`}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                        >
                            <h2 className="text-lg font-medium text-gray-700">{item}</h2>
                            <p className="text-sm text-gray-500 mt-2">
                                This is a preview of content for {item}.
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}

export default GridListToggle