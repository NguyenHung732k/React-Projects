import ResultCard from "./ResultCard"
import LoadingSkeleton from "./LoadingSkeleton"

export default function ResultsGrid({ results, loading, query }) {
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <LoadingSkeleton key={i} />
                ))
                : results.map((r, i) => (
                    <ResultCard
                        key={r.id}
                        result={r}
                        query={query}
                        delay={i * 60}
                    />
                ))}
        </div>
    )
}