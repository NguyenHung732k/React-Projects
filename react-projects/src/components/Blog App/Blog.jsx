import React, { useEffect, useState } from 'react'

import Layout from './Layout'
import BlogPost from './BlogPost'



const API_URL = 'https://dummyjson.com/posts'




const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                setPosts(data.posts)

            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }

        fetchPosts()
    }, [])


    return (
        <Layout title="Home">
            {posts.map(post => (
                <BlogPost
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    date={new Date().toLocaleDateString()}
                    content={post.body}
                />
            ))}
        </Layout>
    )
}

export default Blog