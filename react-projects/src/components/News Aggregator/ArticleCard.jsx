import React from 'react'

import imgNotFound from '../../assets/img-not-available.jpg'

const ArticleCard = ({ article, saveArticle }) => {
    return (
        <div className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
            <div>
                <img src={article.urlToImage || imgNotFound} alt={article.title} className="rounded-md mb-2" />
                <h2 className="font-bold text-lg text-blue-700 dark:text-blue-400">{article.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{article.description}</p>
            </div>
            <div className="flex justify-evenly items-center">
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-decoration-none"
                >
                    Read more
                </a>
                <button
                    onClick={() => saveArticle(article)}
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ArticleCard