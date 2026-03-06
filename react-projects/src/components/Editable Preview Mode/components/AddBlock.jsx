export function AddBlock({ onAdd }) {
  return (
    <div className="flex items-center justify-center py-4">
      <button
        onClick={onAdd}
        className="
        px-3 py-1
        text-sm
        bg-gray-100
        rounded-full
        hover:bg-gray-200
        "
      >
        + Add Block
      </button>
    </div>
  )
}