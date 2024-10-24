import React from 'react'

const Forum = () => {
    const posts = [
        { id: 1, title: "How to stay consistent?", content: "I struggle with keeping a daily meditation routine..." },
        { id: 2, title: "Best Meditations for Stress", content: "What are your favorites?" },
    ]

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Community Forum</h2>
            {posts.map(post => (
                <div key={post.id} className="border-b py-2">
                    <h3 className="font-bold">{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Forum