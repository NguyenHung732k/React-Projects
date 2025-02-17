import axios from "axios"

const NEWS_API_KEY = 'a139df360990400796d33cc2eee8dbf8'; // Get it from newsapi.org

export const fetchCryptoNews = async () => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${NEWS_API_KEY}`)
    return response.data.articles
};