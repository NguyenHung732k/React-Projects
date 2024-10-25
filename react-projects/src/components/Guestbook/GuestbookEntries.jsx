import React from 'react'
import MultimediaPreview from './MultimediaPreview'

const GuestbookEntries = ({ entries, approveEntry }) => {
    return (
        <div className="w-full max-w-lg space-y-4">
            {entries.map((entry, index) => (
                <div key={index} className={`p-4 rounded-lg shadow-md transition-transform ${entry.isApproved ? 'bg-white' : 'bg-yellow-100'}`}>
                    {entry.isApproved ? (
                        <>
                            <p className="text-lg">{entry.message}</p>
                            {entry.file && <MultimediaPreview file={entry.file} />}
                        </>
                    ) : (
                        <div className="text-gray-600 italic">Pending Approval</div>
                    )}
                    <button
                        onClick={() => approveEntry(index)}
                        className={`mt-2 ${entry.isApproved ? 'hidden' : 'bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600'}`}
                    >
                        Approve
                    </button>
                </div>
            ))}
        </div>
    )
}

export default GuestbookEntries