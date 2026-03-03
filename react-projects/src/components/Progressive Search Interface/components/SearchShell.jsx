import { useEffect, useState } from "react"
import SmartSearchBar from "./SmartSearchBar"
import SuggestionPanel from "./SuggestionPanel"
import SmartFilterRow from "./SmartFilterRow"
import ResultsGrid from "./ResultsGrid"
import useDebounce from "../hooks/useDebounce"
import useSearchIntent from "../hooks/useSearchIntent"
import useSavedQueries from "../hooks/useSavedQueries"

export default function SearchShell() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false)

    const debouncedQuery = useDebounce(query)
    const intents = useSearchIntent(query)
    const { saved, saveQuery } = useSavedQueries()

    useEffect(() => {
        if (!debouncedQuery) return

        setLoading(true)

        setTimeout(() => {
            const mockResults = Array.from({ length: 9 }).map((_, i) => ({
                id: i,
                title: `${debouncedQuery} Result ${i + 1}`,
                description: "High quality product with modern design."
            }))

            setResults(mockResults)
            setLoading(false)
            saveQuery(debouncedQuery)
        }, 900)

    }, [debouncedQuery])

    return (
        <div className={`transition-all duration-500 ${active ? "pt-10" : "pt-32"} px-6`}>
            <SmartSearchBar
                query={query}
                setQuery={setQuery}
                onFocus={() => setActive(true)}
                isActive={active}
            />

            <SuggestionPanel query={query} />

            {active && (
                <>
                    <SmartFilterRow intents={intents} />
                    <ResultsGrid
                        results={results}
                        loading={loading}
                        query={query}
                    />
                </>
            )}
        </div>
    )
}