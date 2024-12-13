import React, { useState } from 'react'

function CommentSection({ videoId }) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [rating, setRating] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleCommentChange = (event) => {
        setNewComment(event.target.value)
    }

    const handleRatingChange = (newRating) => {
        setRating(newRating)
    }

    // Submit new comment and rating
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!newComment || rating === 0) {
            return
        }

        setIsSubmitting(true)

        // Simulate saving the comment and rating (this could be an API call in a real app)
        setTimeout(() => {
            const newCommentEntry = {
                id: Date.now(),
                text: newComment,
                rating,
                videoId,
            }

            setComments([...comments, newCommentEntry])
            setNewComment('')
            setRating(0)
            setIsSubmitting(false)
        }, 1000)
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-4">
            <h4 className="text-xl font-semibold text-gray-800">Comments & Ratings</h4>

            <div className="my-4">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700">Rating: </span>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => handleRatingChange(star)}
                            className={`text-yellow-500 ${rating >= star ? 'text-yellow-400' : ''} text-2xl`}
                        >
                            ★
                        </button>
                    ))}
                </div>
            </div>

            <textarea
                value={newComment}
                onChange={handleCommentChange}
                rows="3"
                placeholder="Write a comment..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Comment & Rating'}
            </button>

            <div className="mt-6">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to leave one!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="border-b border-gray-200 py-4">
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`text-yellow-500 ${comment.rating >= star ? 'text-yellow-400' : 'text-gray-300'} text-xl`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="mt-2 text-gray-800">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CommentSection