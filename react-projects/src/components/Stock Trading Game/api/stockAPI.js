import axios from 'axios'

const YAHOO_FINANCE_API = process.env.YAHOO_FINANCE_API

const fetchStockPrice = async (symbol) => {
    const url = `https://yahoo-finance2.p.rapidapi.com/stock/v2/get-summary`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yahoo-finance2.p.rapidapi.com',
            'X-RapidAPI-Key': YAHOO_FINANCE_API,
        },
    }

    try {
        const response = await axios.get(url, { params: { symbol }, headers: options.headers })
        return response.data.price.regularMarketPrice.raw;
    } catch (error) {
        console.error("Error fetching stock data:", error)
    }
}

export { fetchStockPrice }