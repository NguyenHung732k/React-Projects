import React, { useState } from 'react';
import ToggleGroup from './ToggleGroup'

const FluidToggleGroup = () => {
    const [selected, setSelected] = useState('Overview')

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Selected: {selected}
            </h1>

            <ToggleGroup
                options={['Overview', 'Stats', 'Activity', 'Settings']}
                onChange={setSelected}
                activeColor="bg-teal-500"
                gradient={true}
                pillShadow={true}
                className="w-full max-w-md"
            />
        </div>
    )
}

export default FluidToggleGroup