export function Presence({ users }) {

    return (
        <div className="flex -space-x-2">
            {users.map(u => (
                <img
                    key={u.id}
                    src={u.avatar}
                    className="w-7 h-7 rounded-full border"
                />
            ))}
        </div>
    )
}