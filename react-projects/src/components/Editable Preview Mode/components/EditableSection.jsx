export function EditableSection({ children, locked }) {
    return (
        <div
            className={`
      group relative p-6 rounded-xl transition
      hover:ring-1 hover:ring-blue-200
      ${locked ? "opacity-60 pointer-events-none" : ""}
      `}
        >
            {children}

            {/* drag handle */}
            <div className="absolute left-2 top-4 opacity-0 group-hover:opacity-100 cursor-move">
                ⋮⋮
            </div>

            {/* settings */}
            <div className="absolute right-2 top-4 opacity-0 group-hover:opacity-100">
                ⚙
            </div>
        </div>
    )
}