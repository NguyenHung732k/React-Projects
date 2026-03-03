import highlightMatch from "../utils/highlightMatch"

export default function ResultCard({ result, query, delay }) {
    return (
        <div
            className="bg-white p-6 rounded-xl shadow-md opacity-0 translate-y-4 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms` }}
        >
            <h3 className="text-lg font-semibold">
                {highlightMatch(result.title, query)}
            </h3>
            <p className="text-gray-500 mt-2">
                {result.description}
            </p>
        </div>
    )
}