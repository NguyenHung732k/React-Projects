export function MicroShimmer() {
    return (
        <div className="relative overflow-hidden rounded-md bg-neutral-200 h-8 w-full">

            <div className="absolute inset-0 animate-microShimmer
        bg-gradient-to-r from-transparent via-white/60 to-transparent"/>

        </div>
    )
}