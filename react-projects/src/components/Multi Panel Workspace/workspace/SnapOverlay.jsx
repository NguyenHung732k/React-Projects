export default function SnapOverlay() {
    return (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">

            <div className="snap-zone col-start-2 row-start-1" />
            <div className="snap-zone col-start-1 row-start-2" />
            <div className="snap-zone col-start-3 row-start-2" />
            <div className="snap-zone col-start-2 row-start-3" />

        </div>
    )
}