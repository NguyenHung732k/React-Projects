export default function SuggestionPanel({ query }) {
    if (!query || query.length < 3) return null

    const suggestions = [
        `Looking for ${query} under $50?`,
        `Top rated ${query}`,
        `Best selling ${query}`
    ]

    return (
        <div className="max-w-2xl mx-auto mt-4 bg-white rounded-xl shadow-lg divide-y animate-fadeInUp">
            {suggestions.map((s, i) => (
                <div
                    key={i}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition"
                >
                    <span className="text-blue-500 text-sm font-medium">
                        Suggested
                    </span>
                    <p>{s}</p>
                </div>
            ))}
        </div>
    )
}