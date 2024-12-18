import React, { useState } from 'react'

const Results = () => {
    const [observation, setObservation] = useState('')

    const handleSave = () => {
        alert('Results saved!')
    }

    return (
        <div className="results">
            <h2 className="text-2xl font-semibold mb-4">Your Observations</h2>
            <textarea
                value={observation}
                onChange={(event) => setObservation(event.target.value)}
                className="w-full p-4 border rounded-lg shadow-sm mb-4"
                rows="6"
                placeholder="Record your observations here..."
            />
            <button onClick={handleSave} className="bg-blue-500 text-white mb-4 py-2 px-6 rounded-lg hover:bg-blue-700">
                Save Results
            </button>
        </div>
    )
}

export default Results