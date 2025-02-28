import React from 'react'

const Explanation = ({ steps }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Step-by-Step Explanation</h2>
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div key={index} className="p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-200">
                        <p className="text-gray-800">{index + 1}. {step}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explanation