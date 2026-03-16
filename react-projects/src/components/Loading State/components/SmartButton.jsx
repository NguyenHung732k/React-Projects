export function SmartButton({ loading, children }) {
    return (
        <button
            disabled={loading}
            className="relative px-5 py-2 rounded-lg bg-indigo-600 text-white transition-all disabled:bg-indigo-400"
        >

            <span className={loading ? "opacity-0" : "opacity-100"}>
                {children}
            </span>

            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </span>
            )}

        </button>
    )
}