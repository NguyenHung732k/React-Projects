import React, { useState, useEffect } from 'react'
import axios from 'axios'

function URLShortener() {
    const [originalUrl, setOriginalUrl] = useState('')
    const [customShortUrl, setCustomShortUrl] = useState('')
    const [urls, setUrls] = useState([])
    const [message, setMessage] = useState('')

    const shortenUrl = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl, customShortUrl })
            setUrls([...urls, response.data])
            setOriginalUrl('')
            setCustomShortUrl('')
            setMessage('URL shortened successfully!')
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error shortening URL')
        }
    }

    const deleteUrl = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/urls/${id}`)
            setUrls(urls.filter(url => url._id !== id))
            setMessage('URL deleted successfully!')
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error deleting URL');
        }
    }

    useEffect(() => {
        const fetchUrls = async () => {
            const response = await axios.get('http://localhost:5000/api/urls')
            setUrls(response.data)
        }
        fetchUrls()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
                <input
                    type="text"
                    value={originalUrl}
                    onChange={(event) => setOriginalUrl(event.target.value)}
                    className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter long URL"
                />
                <input
                    type="text"
                    value={customShortUrl}
                    onChange={(event) => setCustomShortUrl(event.target.value)}
                    className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Custom short URL (optional)"
                />
                <button
                    onClick={shortenUrl}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 w-full"
                >
                    Shorten URL
                </button>
                {message && <div className="mt-4 text-center text-green-500">{message}</div>}
            </div>
            <div className="mt-6 w-full max-w-md">
                {urls.map(url => (
                    <div key={url._id} className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 mb-4 flex justify-between items-center">
                        <a
                            href={url.originalUrl}
                            className="text-gray-800 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {url.originalUrl}
                        </a>
                        <span className="text-blue-500 hover:underline">
                            <a
                                href={`/${url.shortUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {url.shortUrl}
                            </a>
                        </span>
                        <button
                            onClick={() => deleteUrl(url._id)}
                            className="text-red-500 hover:text-red-700 ml-4"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default URLShortener