import React, { useState } from 'react'

const RuleEditor = () => {
    const [ruleType, setRuleType] = useState('Attack Rule')
    const [description, setDescription] = useState('')

    const handleDescriptionChange = (event) => setDescription(event.target.value)

    const handleSaveRule = () => {
        alert(`Saved Rule: ${ruleType} - ${description}`)
    }

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4">Define Custom Rules</h2>

            <div className="space-y-4">
                <div className="flex flex-col">
                    <label className="font-medium text-gray-700">Rule Type</label>
                    <select
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={ruleType}
                        onChange={(event) => setRuleType(event.target.value)}
                    >
                        <option>Attack Rule</option>
                        <option>Defense Rule</option>
                        <option>Special Ability</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-medium text-gray-700">Rule Description</label>
                    <textarea
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Describe your rule..."
                    />
                </div>

                <div className="text-center">
                    <button
                        onClick={handleSaveRule}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Save Rule
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RuleEditor