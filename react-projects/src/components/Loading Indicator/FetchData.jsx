import React, { useEffect, useState } from 'react'
import LoadingIndicator from './LoadingIndicator'

const FetchData = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result = await response.json()
                setPosts(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>
    }

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
                <div key={post.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                    <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchData