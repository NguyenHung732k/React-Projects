import React from 'react'

const ElementTypes = () => {
    return (
        <div className="grid grid-cols-5 gap-6">
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-emerald-900 border-red-200 border p-2 rounded-full flex"></span>Post-transition metals
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-purple-950 border-purple-200 border p-2 rounded-full flex"></span>Transition metals
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-900 border-lime-200 border p-2 rounded-full flex"></span>Lanthanoids
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-amber-950 border-indigo-200 border p-2 rounded-full flex"></span>Actinoids
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-red-900 border-red-200 border p-2 rounded-full flex"></span>Alkaline earth metals
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-cyan-50 border-cyan-200 border p-2 rounded-full flex"></span>Alkali metals
            </p>

            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-pink-900 border-pink-200 border p-2 rounded-full flex"></span>Noble gases
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-sky-900 border-blue-200 border p-2 rounded-full flex"></span>Reactive nonmetals
            </p>

            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-900 border-yellow-200 border p-2 rounded-full flex"></span>Metailoids
            </p>
            <p className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-300 border-zinc-200 border p-2 rounded-full flex"></span>Unknown
            </p>
        </div>
    )
}

export default ElementTypes