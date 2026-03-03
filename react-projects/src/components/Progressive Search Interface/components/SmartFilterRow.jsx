export default function SmartFilterRow({ intents }) {
    return (
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
            {Object.entries(intents).map(([key, value], i) =>
                value ? (
                    <div
                        key={key}
                        className="px-4 py-2 bg-gray-100 rounded-full shadow-sm animate-fadeInUp"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        {key} filter
                    </div>
                ) : null
            )}
        </div>
    )
}