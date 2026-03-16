export function InteractivePlaceholder() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
                ⚡
            </div>

            <p className="text-sm text-neutral-500">
                Preparing your content...
            </p>

            <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition">
                    Continue Browsing
                </button>

                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    Notify Me
                </button>

            </div>

        </div>
    )
}