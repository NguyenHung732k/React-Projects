import React, { useState } from 'react'

const CharacterForm = ({ character, onChange, onSkillAdd }) => {
    const [newSkill, setNewSkill] = useState('')

    const handleSkillSubmit = (event) => {
        event.preventDefault()
        if (newSkill) {
            onSkillAdd(newSkill)
            setNewSkill('')
        }
    }

    return (
        <form className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Character Information</h2>
            {['name', 'class', 'level', 'health', 'experience', 'alignment', 'background'].map((field) => (
                <div className="mb-4" key={field}>
                    <label className="block text-sm font-medium text-gray-700 capitalize flex items-center">
                        {field === 'name' &&
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                            </svg>
                        }
                        {field === 'class' &&
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                            </svg>
                        }
                        {field === 'health' &&
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        }
                        {field === 'experience' &&
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        }
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                        type={field === 'level' || field === 'health' || field === 'experience' ? 'number' : 'text'}
                        name={field}
                        value={character[field]}
                        onChange={onChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter character ${field}`}
                    />
                </div>
            ))}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Skills</label>
                <div className="flex">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(event) => setNewSkill(event.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a skill"
                    />
                    <button
                        onClick={handleSkillSubmit}
                        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CharacterForm