import { useState } from "react"

const AddEventForm = ({ addEvent }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [media, setMedia] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const newEvent = {
            id: new Date().toISOString(),
            title,
            description,
            media,
        }
        addEvent(newEvent)
        setTitle("")
        setDescription("")
        setMedia("")
    }

    return (
        <form onSubmit={handleSubmit} className="w-4/6 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg my-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Event</h2>
            <input
                type="text"
                placeholder="Event Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="w-full p-3 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Event Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
                className="w-full p-3 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Media URL (optional)"
                value={media}
                onChange={(event) => setMedia(event.target.value)}
                className="w-full p-3 mb-6 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-200"
            >
                Add Event
            </button>
        </form>
    )
}

export default AddEventForm