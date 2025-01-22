import { useState } from 'react'

const CustomTour = () => {
    const [tourName, setTourName] = useState('')
    const [savedTours, setSavedTours] = useState([])

    const saveTour = () => {
        if (!tourName) return
        setSavedTours([...savedTours, tourName])
        setTourName('')
    };

    const removeTour = (tour) => {
        setSavedTours(savedTours.filter(t => t !== tour))
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl text-center mb-4">Create Your Custom Space Tour</h2>
            <input
                type="text"
                value={tourName}
                onChange={(event) => setTourName(event.target.value)}
                className="w-full p-3 text-lg border border-gray-700 rounded-lg bg-gray-800 text-white mb-4"
                placeholder="Tour name"
            />
            <button
                onClick={saveTour}
                className="w-full p-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300"
            >
                Save Tour
            </button>

            <div className="mt-6">
                <h3 className="text-2xl text-center mb-4">Saved Tours</h3>
                <ul className="space-y-4">
                    {savedTours.length === 0 ? (
                        <p className="text-center text-gray-400">No saved tours yet!</p>
                    ) : (
                        savedTours.map((tour, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
                                <span>{tour}</span>
                                <button
                                    onClick={() => removeTour(tour)}
                                    className="text-red-500 hover:text-red-300 transition duration-300"
                                >
                                    Delete
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CustomTour