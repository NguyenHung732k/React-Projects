import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Blog from './Blog'
import Post from './Post'

const BlogApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/posts/:id" element={<Post />} />
            </Routes>
        </Router>
    )
}

export default BlogApp