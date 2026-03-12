export default function Resizer({ direction }) {
    return (
        <div
            className={`group ${direction === "row"
                    ? "w-1 cursor-col-resize"
                    : "h-1 cursor-row-resize"
                }`}
        >
            <div className="w-full h-full bg-neutral-800 group-hover:bg-blue-500 transition-all" />
        </div>
    )
}