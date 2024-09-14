import React from 'react'
import { substitutions } from './substitutions'

const SubstitutionSuggestions = ({ ingredient }) => {

    const substitutes = substitutions[ingredient.toLowerCase()] || []

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            {substitutes.length > 0 ? (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Substitutes for "{ingredient}":</h3>
                    <div className="space-y-2">
                        {substitutes.map((substitute, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded shadow-sm bg-gray-50">
                                {substitute}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-gray-600">No substitutes found.</p>
            )}
        </div>
    )
}

export default SubstitutionSuggestions