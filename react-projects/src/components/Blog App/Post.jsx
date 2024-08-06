import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './Layout'



const API_URL = 'https://dummyjson.com/posts'


const Post = () => {

    const { id } = useParams()
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`)
                const data = await response.json()
                setPost(data)
                setLoading(false)

            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }

        fetchPost()
    }, [id])


    return (
        loading ? (<div></div>) : (
            <Layout title={post.title}>
                <article className="min-h-screen mt-16">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <p className="text-gray-600 mb-4">{new Date().toLocaleDateString()}</p>
                    <div>{post.body}</div>
                </article>
            </Layout>
        )
    )
}

export default Post