import { useState } from "react";
import TagChip from "./TagChip"

const TagList = () => {
    const [tags, setTags] = useState(["React", "TailwindCSS", "JavaScript"])

    const handleTagRemove = (tagToRemove) => {
        setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove))
    }

    return (
        <div className="tag-list">
            {tags.map((tag) => (
                <TagChip key={tag} tag={tag} onRemove={handleTagRemove} />
            ))}
        </div>
    )
}

export default TagList