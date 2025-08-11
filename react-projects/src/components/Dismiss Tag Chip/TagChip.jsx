import { useState } from "react";

const TagChip = ({ tag, onRemove }) => {
    const [dismissed, setDismissed] = useState(false)


    const handleRemove = () => {

        setDismissed(true)
        setTimeout(() => {
            onRemove(tag)
        }, 300)
    }

    return (
        <div
            className={`tag-chip ${dismissed ? "poof" : ""}`}
            onClick={handleRemove}
            role="button"
            aria-label={`Remove ${tag} tag`}
        >
            <span className="tag-text">{tag}</span>
            <button className="dismiss-btn" aria-label="Dismiss">
                &times;
            </button>
        </div>
    )
}

export default TagChip