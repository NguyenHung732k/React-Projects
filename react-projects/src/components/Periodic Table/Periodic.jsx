import React from 'react'
import { motion } from 'framer-motion'
import ElementCard from './ElementCard'

import { elementPositions } from './elements'

const getElementTypeColor = (type) => {
    switch (type) {
        case 'Reactive Non-metal':
            return 'bg-sky-900'
        case 'Noble Gas':
            return 'bg-pink-900'
        case 'Alkali Metal':
            return 'bg-cyan-50'
        case 'Alkaline Earth Metal':
            return 'bg-red-900'
        case 'Lanthanoids':
            return 'bg-blue-900'
        case 'Metalloid':
            return 'bg-yellow-900'
        case 'Actinoids':
            return 'bg-amber-950'
        case 'Transition Metal':
            return 'bg-purple-950'
        case 'Post-transition Metal':
            return 'bg-emerald-900'
        default:
            return 'bg-gray-300'
    }
}

const PeriodicTable = ({ elements }) => {
    return (
        <div className="flex flex-wrap justify-center p-4 bg-gray-100">
            <div className="grid grid-cols-18 gap-1">
                {elements.map((element) => {
                    const position = elementPositions[element.number] || [0, 0]
                    const row = position[0]
                    const col = position[1]

                    return (
                        <motion.div
                            key={element.number}
                            className={`col-span-1 row-span-1 ${getElementTypeColor(element.type)} rounded-lg text-white`}
                            style={{
                                gridRow: row + 1,
                                gridColumn: col + 1,
                            }}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ElementCard element={element} />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default PeriodicTable