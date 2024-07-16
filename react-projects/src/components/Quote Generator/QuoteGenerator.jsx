import React, { useEffect, useState } from 'react'

const QuoteGenerator = () => {

    const [quote, setQuote] = useState("")
    const [loading, setLoading] = useState(false)

    const url = `https://api.quotable.io/random`

    useEffect(() => {
        fetchQuote()
    }, [])

    const fetchQuote = async () => {
        try {
            setLoading(true)

            const response = await fetch(url)
            const data = await response.json()

            if (data) {
                setQuote(data)
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleClick = () => {
        fetchQuote()
    }

    return (
        loading ? <div>Loading...</div> :
        
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-[600px] h-[500px] flex flex-col justify-center items-center gap-8">
                <div className="w-full rounded-lg bg-white shadow-lg p-4 text-gray-800">
                    <div className="w-full mb-10">
                        <h3 className="text-md text-gray-600 text-center px-5">
                            {quote.content}
                        </h3>
                    </div>
                    <div className="w-full">
                        <p className="text-md text-indigo-500 font-bold text-center">{quote.author}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator