import { useState } from "react"

const ShareDream = ({ addDream }) => {
    const [dreamTitle, setDreamTitle] = useState("")
    const [dreamDescription, setDreamDescription] = useState("")
    const [tags, setTags] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const newDream = {
            title: dreamTitle,
            description: dreamDescription,
            tags: tags.split(",").map((tag) => tag.trim()),
            date: new Date().toLocaleDateString(),
        }
        addDream(newDream)
        setDreamTitle("")
        setDreamDescription("")
        setTags("")
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-indigo-50 shadow-xl rounded-lg space-y-4">
            <input
                type="text"
                placeholder="Enter Dream Title"
                value={dreamTitle}
                onChange={(event) => setDreamTitle(event.target.value)}
                className="w-full p-4 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
                placeholder="Describe your dream..."
                value={dreamDescription}
                onChange={(event) => setDreamDescription(event.target.value)}
                className="w-full p-4 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
                type="text"
                placeholder="Add tags (comma separated)"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                className="w-full p-4 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
                type="submit"
                className="w-full p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
                Share Your Dream Anonymously
            </button>
        </form>
    )
}

export default ShareDream