export function LockOverlay({ user }) {
    return (
        <div className="
      absolute inset-0
      bg-gray-100/70
      flex items-center justify-center
      text-sm
    ">
            🔒 Locked by {user}
        </div>
    )
}