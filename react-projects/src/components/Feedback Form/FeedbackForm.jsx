import React, { useState } from 'react'

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [comments, setComments] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError("")

        const formData = {
            rating,
            comments
        }

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to submit feedback')
            }

            setSubmitted(true)
            setRating(0)
            setComments('')

        } catch (error) {
            setError('There was an error submitting your feedback. Please try again.')
        }

    }



    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-2/6 mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">We Value Your Feedback</h2>
                {submitted && (
                    <div className="mb-6 p-4 text-green-800 bg-green-100 border border-green-300 rounded-md shadow-sm">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Thank you for your feedback!</span>
                        </div>
                    </div>
                )}
                {error && (
                    <div className="mb-6 p-4 text-red-800 bg-red-100 border border-red-300 rounded-md shadow-sm">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M12 9v6" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Rating</label>
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    className={`w-8 h-8 flex items-center justify-center text-2xl transition-colors ${rating >= star ? 'text-yellow-400' : 'text-gray-300'
                                        } hover:text-yellow-500`}
                                    onClick={() => setRating(star)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="comments">Comments</label>
                        <textarea
                            id="comments"
                            value={comments}
                            onChange={(event) => setComments(event.target.value)}
                            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            rows="5"
                            placeholder="Share your thoughts..."
                            aria-describedby="comments-help"
                        />
                        <p id="comments-help" className="mt-2 text-sm text-gray-500">Your feedback helps us improve!</p>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 px-4 font-semibold rounded-lg shadow-md focus:outline-none ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                            } text-white`}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                </form>
            </div>
        </div>

    )
}

export default FeedbackForm