import { useEffect, useState } from "react"
import { fetchCryptoPrices } from "../services/cryptoAPI"

const CryptoTable = () => {
    const [prices, setPrices] = useState({})

    useEffect(() => {
        const getPrices = async () => {
            const data = await fetchCryptoPrices()
            setPrices(data)
        }
        getPrices()
    }, [])

    return (
        <div id="prices" className="overflow-x-auto bg-white shadow-md rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Live Crypto Prices</h2>
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-lg text-primary">Crypto</th>
                        <th className="px-4 py-2 text-lg text-primary">Price (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(prices).map(([crypto, data]) => (
                        <tr key={crypto} className="border-b hover:bg-gray-50 transition">
                            <td className="px-4 py-2">{crypto}</td>
                            <td className="px-4 py-2">${data.usd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CryptoTable