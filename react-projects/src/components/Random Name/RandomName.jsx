import React, { useState } from 'react'

const RandomName = () => {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [nameList, setNameList] = useState([
        'Luna', 'Max', 'Oliver', 'Bella', 'Charlie', 'Milo', 'Leo', 'Chloe', 'Rocky',
    ])

    const generateName = () => {
        setLoading(true);
        setTimeout(() => {
            const randomName = nameList[Math.floor(Math.random() * nameList.length)]
            setName(randomName)
            setLoading(false)
        }, 1000)
    }

    const addNameToList = () => {
        if (userInput.trim() !== '') {
            setNameList([...nameList, userInput.trim()])
            setUserInput('')
        }
    }

    const deleteName = (nameToDelete) => {
        setNameList(nameList.filter(name => name !== nameToDelete))
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 h-[550px] max-w-sm text-center transition-all duration-500 transform">
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">Random Name Generator</h1>
                <p className="text-lg text-gray-800 mb-8">Generate a unique name for characters, pets, or projects!</p>

                <div className="mb-6">
                    <div className="text-2xl font-semibold text-gray-800 mb-4">
                        {loading ? (
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-600 border-solid"></div>
                            </div>
                        ) : (
                            <span>{name || "Click 'Generate' to get a name"}</span>
                        )}
                    </div>
                </div>

                <button
                    onClick={generateName}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                    {loading ? 'Generating...' : 'Generate Name'}
                </button>

                <div className="mt-6">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                        className="w-full px-4 py-2 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                        placeholder="Enter a name to add..."
                    />
                    <button
                        onClick={addNameToList}
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Add Name
                    </button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 h-[550px] max-w-sm text-center transition-all duration-500 transform overflow-y-scroll">
                <div className="mt-6 text-left">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">List of Names:</h2>
                    <ul className="space-y-2 m-0 p-0">
                        {nameList.map((nameItem, index) => (
                            <li key={index} className="flex justify-between items-center text-sm text-gray-700 px-4 py-2 rounded-md border border-gray-300 bg-gray-50 hover:bg-indigo-100">
                                <span>{nameItem}</span>
                                <button
                                    onClick={() => deleteName(nameItem)}
                                    className="text-red-500 hover:text-red-700 ml-4 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RandomName