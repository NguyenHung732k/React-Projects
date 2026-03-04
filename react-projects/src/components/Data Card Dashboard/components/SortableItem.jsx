import {
    DndContext,
    closestCenter
} from "@dnd-kit/core"
import {
    SortableContext,
    useSortable,
    arrayMove,
    verticalListSortingStrategy
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"
import DataCard from "./DataCard"
import { motion } from "framer-motion"

function SortableItem({ id }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <DataCard title={id} initial={Math.floor(Math.random() * 50000)} />
        </div>
    )
}

export default function Dashboard() {
    const [items, setItems] = useState([
        "Revenue",
        "Active Users",
        "Conversions",
        "Growth",
        "Sessions"
    ])

    const [compare, setCompare] = useState(false)

    function handleDragEnd(event) {
        const { active, over } = event
        if (active.id !== over?.id) {
            setItems(items => {
                const oldIndex = items.indexOf(active.id)
                const newIndex = items.indexOf(over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    return (
        <div className="min-h-screen p-10">

            {/* Floating Compare Toolbar */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full">
                <button
                    onClick={() => setCompare(!compare)}
                    className="text-sm text-zinc-300 hover:text-white transition"
                >
                    Toggle Compare Mode
                </button>
            </div>

            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    <motion.div
                        layout
                        className={`grid gap-6 ${compare
                                ? "grid-cols-3 auto-rows-[150px]"
                                : "grid-cols-2 auto-rows-[180px]"
                            }`}
                    >
                        {items.map(id => (
                            <SortableItem key={id} id={id} />
                        ))}
                    </motion.div>
                </SortableContext>
            </DndContext>
        </div>
    )
}