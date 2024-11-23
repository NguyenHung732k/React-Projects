import React, { useState } from "react"
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"
import BlockInfo from "./BlockInfo"
import TransactionInfo from "./TransactionInfo"
import NetworkStats from "./NetworkStats"
import SearchBar from "./SearchBar"
import Spinner from "./Spinner"

const API_KEY = "ETHERSCAN_API_KEY"

const queryClient = new QueryClient()

const fetchBlockData = async (blockNumber) => {
    try {
        const { data } = await axios.get(`https://api.etherscan.io/api`, {
            params: {
                module: "proxy",
                action: "eth_getBlockByNumber",
                tag: `0x${parseInt(blockNumber).toString(16)}`,
                boolean: "true",
                apiKey: API_KEY,
            },
        })
        if (data.result) {
            return data.result
        } else {
            throw new Error("Block not found.");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching block data")
    }
}

const fetchTransactionData = async (txHash) => {
    try {
        const { data } = await axios.get(`https://api.etherscan.io/api`, {
            params: {
                module: "proxy",
                action: "eth_getTransactionByHash",
                txhash: txHash,
                apiKey: API_KEY,
            },
        })
        if (data.result) {
            return data.result;
        } else {
            throw new Error("Transaction not found.")
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching transaction data")
    }
}

const fetchNetworkStats = async () => {
    try {
        const { data } = await axios.get(`https://api.etherscan.io/api`, {
            params: {
                module: "stats",
                action: "ethsupply",
                apiKey: API_KEY,
            },
        })
        return data.result
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching network stats")
    }
}

const SimpleBlockchain = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchType, setSearchType] = useState("block")
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true" || true)
    const [error, setError] = useState(null)

    const { data: blockData, isLoading: blockLoading, isError: blockError } = useQuery({
        queryKey: ["blockData", searchQuery],
        queryFn: () => fetchBlockData(searchQuery),
        enabled: searchType === "block" && searchQuery !== "",
        onError: (err) => setError(err.message),
    })

    const { data: txData, isLoading: txLoading, isError: txError } = useQuery({
        queryKey: ["transactionData", searchQuery],
        queryFn: () => fetchTransactionData(searchQuery),
        enabled: searchType === "transaction" && searchQuery !== "",
        onError: (err) => setError(err.message),
    })

    const { data: networkStats, isLoading: networkStatsLoading, isError: networkStatsError } = useQuery({
        queryKey: ["networkStats"],
        queryFn: fetchNetworkStats,
        onError: (err) => setError(err.message),
    })

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem("darkMode", !isDarkMode)
    }

    const themeClasses = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"

    return (
        <QueryClientProvider client={queryClient}>
            <div className={`${themeClasses} min-h-screen transition-all`}>
                <header className="bg-indigo-600 p-6 shadow-lg">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-center text-white">Blockchain Explorer</h1>
                        <button
                            className="p-2 text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-700"
                            onClick={toggleTheme}
                        >
                            Toggle Dark Mode
                        </button>
                    </div>
                </header>

                <main className="p-6">
                    <SearchBar setSearchQuery={setSearchQuery} setSearchType={setSearchType} />

                    <div className="mb-8">
                        <NetworkStats data={networkStats} loading={networkStatsLoading} />
                    </div>

                    {error && (
                        <div className="text-red-500 bg-red-100 p-4 mb-6 rounded-md">
                            <strong>Error:</strong> {error}
                        </div>
                    )}

                    <div>
                        {blockLoading && searchType === "block" ? (
                            <Spinner />
                        ) : blockData ? (
                            <BlockInfo data={blockData} />
                        ) : (
                            blockError && <p className="text-red-500">{blockError}</p>
                        )}

                        {txLoading && searchType === "transaction" ? (
                            <Spinner />
                        ) : txData ? (
                            <TransactionInfo data={txData} />
                        ) : (
                            txError && <p className="text-red-500">{txError}</p>
                        )}
                    </div>
                </main>
            </div>
        </QueryClientProvider>
    )
}

export default SimpleBlockchain