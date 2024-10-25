import React, { useState } from 'react'
import GuestbookForm from './GuestbookForm'
import GuestbookEntries from './GuestbookEntries'

const Guestbook = () => {
    const [entries, setEntries] = useState([])

    const addEntry = (entry) => {
        setEntries([...entries, { ...entry, isApproved: false }])
    }

    const approveEntry = (index) => {
        const newEntries = [...entries]
        newEntries[index].isApproved = true
        setEntries(newEntries)
    }

    const shareGuestbook = () => {
        const shareableLink = `${window.location.origin}/guestbook`
        navigator.clipboard.writeText(shareableLink)
            .then(() => alert("Link copied to clipboard!"))
            .catch(error => console.error("Could not copy link: ", error))
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-6">Virtual Wedding Guestbook</h1>
            <GuestbookForm addEntry={addEntry} />
            <GuestbookEntries entries={entries} approveEntry={approveEntry} />
            <button
                onClick={shareGuestbook}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
                Share Guestbook Link
            </button>
        </div>
    )
}

export default Guestbook