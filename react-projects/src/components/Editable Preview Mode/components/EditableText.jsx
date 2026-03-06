import { useState } from "react"

export default function EditableText({ value, onSave }) {

    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(value)

    const save = () => {
        setEditing(false)
        onSave(text)
    }

    return (
        <div className="group relative">

            {!editing ? (
                <p
                    onClick={() => setEditing(true)}
                    className="
          cursor-text
          transition
          px-1
          group-hover:bg-blue-50
          "
                >
                    {text}
                </p>
            ) : (
                <input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={save}
                    className="
          w-full
          border
          border-blue-400
          rounded
          px-2 py-1
          outline-none
          "
                />
            )}

            {/* edit icon */}
            <span className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 text-gray-400">
                ✏
            </span>

        </div>
    )
}