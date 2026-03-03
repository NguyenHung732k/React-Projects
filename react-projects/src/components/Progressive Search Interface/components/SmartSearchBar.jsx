export default function SmartSearchBar({ query, setQuery, onFocus }) {
    return (
        <div className="flex justify-center transition-all duration-500">
            <div className="relative w-full max-w-2xl">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={onFocus}
                    placeholder="Search products..."
                    className="
            w-full px-6 py-4
            rounded-2xl
            border border-gray-200
            shadow-md
            focus:ring-2 focus:ring-blue-400
            focus:shadow-xl
            transition-all duration-500
            outline-none
          "
                />
            </div>
        </div>
    )
}