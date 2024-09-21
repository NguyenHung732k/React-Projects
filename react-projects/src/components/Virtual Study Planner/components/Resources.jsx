import React, { useState } from 'react'
import { useStudy } from '../context/StudyContext'

const Resources = () => {
    const { resources, setResources } = useStudy()
    const [resourceName, setResourceName] = useState('')
    const [resourceLink, setResourceLink] = useState('')

    const handleAddResource = () => {
        if (resourceName && resourceLink) {
            setResources([...resources, { name: resourceName, link: resourceLink }])
            setResourceName('')
            setResourceLink('')
        }
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Resources</h1>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold">Add New Resource</h2>
                <input
                    type="text"
                    placeholder="Resource Name"
                    value={resourceName}
                    onChange={(event) => setResourceName(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                    type="url"
                    placeholder="Resource URL"
                    value={resourceLink}
                    onChange={(event) => setResourceLink(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddResource}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Resource
                </button>
            </div>
            <div className="space-y-4 mt-6">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold">{resource.name}</h3>
                        <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Resource
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resources