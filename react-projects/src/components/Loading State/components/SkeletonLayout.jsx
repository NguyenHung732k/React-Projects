export function SkeletonLayout() {
    return (
        <div className="p-4 rounded-xl border bg-white space-y-4">

            <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-lg animate-pulse" />

                <div className="flex-1 space-y-2">
                    <div className="h-4 w-40 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-3 w-60 bg-neutral-200 rounded animate-pulse" />
                </div>
            </div>

            <div className="h-3 bg-neutral-200 rounded w-full animate-pulse" />
            <div className="h-3 bg-neutral-200 rounded w-5/6 animate-pulse" />

        </div>
    )
}