import axios from "axios"

const BASE_URL = "https://api.coingecko.com/api/v3/"

export const fetchCryptoPrices = async () => {
    const response = await axios.get(`${BASE_URL}simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd`)
    return response.data
}