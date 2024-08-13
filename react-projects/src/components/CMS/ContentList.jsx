import React from 'react'

const ContentList = ({ contents, onEdit, onDelete }) => {
    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Content List</h2>
            <ul className="space-y-4">
                {contents.map((content) => (
                    <li key={content.id} className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">{content.title}</h3>
                        <p className="mt-2">{content.body}</p>
                        <div className="mt-4 flex space-x-4">
                            <button
                                onClick={() => onEdit(content)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(content.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContentList