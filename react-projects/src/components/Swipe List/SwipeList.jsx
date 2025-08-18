import { useState } from "react";
import SwipeListItem from "./SwipeListItem"

const SwipeList = () => {
    const [items, setItems] = useState([
        "Finish project proposal",
        "Call the bank",
        "Pick up dry cleaning",
        "Read the React docs"
    ])

    const handleDelete = (index) => {
        setItems((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="max-w-md mx-auto mt-12 px-4">
            <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
            {items.map((item, index) => (
                <SwipeListItem
                    key={index}
                    text={item}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    )
}

export default SwipeList