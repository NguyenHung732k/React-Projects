import React from 'react'
import { Link } from 'react-router-dom'





const BlogPost = ({ id, title, date, content }) => {



    return (
        <Link to={`/posts/${id}`} className="text-black text-decoration-none">
            <article className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{date}</p>
                <div>{content}</div>
            </article>
        </Link>
    )
}

export default BlogPost