import { useEffect, useState } from "react"
import { fetchCryptoNews } from "../services/newsAPI"

const NewsFeed = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const articles = await fetchCryptoNews()
            setNews(articles)
        }
        getNews()
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Crypto News</h2>
            <div id="news" className="space-y-6">
                {news.map((article, index) => (
                    <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt="News" className="w-20 h-20 object-cover rounded-lg mr-4" />
                        )}
                        <div>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-primary text-decoration-none hover:text-secondary transition">{article.title}</a>
                            <p className="text-sm text-gray-500">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsFeed