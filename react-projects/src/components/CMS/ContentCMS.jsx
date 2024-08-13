import React, { useState } from 'react'
import ContentForm from './ContentForm'
import ContentList from './ContentList'

const ContentCMS = () => {


    const [content, setContent] = useState([])
    const [currentContent, setCurrentContent] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const handleSave = (contents) => {
        if (isEditing) {
            setContent((prevContents) =>
                prevContents.map((content) =>
                    content.id === currentContent.id ? { ...content, ...contents } : content
                )
            )
            setIsEditing(false)
        } else {
            setContent((prevContents) => [
                ...prevContents,
                { id: Date.now(), ...contents },
            ])
        }
        setCurrentContent(null)
    }

    const handleEdit = (content) => {
        setCurrentContent(content)
        setIsEditing(true)
    }

    const handleDelete = (id) => {
        setContent((prevContents) =>
            prevContents.filter((content) => content.id !== id)
        )
    }

    const handleCancel = () => {
        setCurrentContent(null)
        setIsEditing(false)
    }


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {currentContent ? (
                <ContentForm
                    currentContent={currentContent}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <ContentList
                    contents={content}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
            {!currentContent && !isEditing && (
                <button
                    onClick={() => setCurrentContent({})}
                    className="fixed bottom-4 right-4 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
                >
                    Add Content
                </button>
            )}
        </div>
    )
}

export default ContentCMS