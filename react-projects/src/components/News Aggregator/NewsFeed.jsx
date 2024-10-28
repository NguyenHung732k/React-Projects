import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'

const API_KEY = "a139df360990400796d33cc2eee8dbf8"

const NewsFeed = ({ preferences, savedArticles, setSavedArticles }) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${preferences}&apiKey=${API_KEY}`);
                setArticles(response.data.articles)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchArticles()
    }, [preferences])

    const saveArticle = (article) => {
        setSavedArticles((prev) => [...prev, article])
    }

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                placeholder="Search articles..."
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            {loading ? (
                <div className="flex justify-center items-center h-48">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredArticles.map(article => (
                        <ArticleCard key={article.url} article={article} saveArticle={saveArticle} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default NewsFeed