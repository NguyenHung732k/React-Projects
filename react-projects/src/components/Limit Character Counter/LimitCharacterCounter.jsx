import React from 'react';
import CharacterCounter from './CharacterCounter'

const LimitCharacterCounter = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100 p-8">
            <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
                Live Character Counter
            </h1>
            <CharacterCounter limit={280} showDonut={true} />
        </div>
    )
}

export default LimitCharacterCounter