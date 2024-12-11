import React from 'react'

const QnA = () => {
    return (
        <div className="mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg">Ask a Question</button>
            <div className="space-y-2 mt-4">
                <div className="text-sm font-semibold">Q: What's the agenda for today?</div>
                <div className="text-sm">A: We'll discuss new features...</div>
            </div>
        </div>
    )
}

export default QnA