import React, { useState, useRef } from "react"
import "./SelectableGrid.css"

const NUM_ROWS = 5
const NUM_COLS = 20

const SelectableGrid = () => {
    const [selected, setSelected] = useState(new Set())
    const [startIndex, setStartIndex] = useState(null)
    const [dragBox, setDragBox] = useState(null)
    const [isDragging, setIsDragging] = useState(false)
    const gridRef = useRef(null)

    const items = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, i) => i)

    const handleMouseDown = (event) => {
        if (event.button !== 0) return
        const rect = gridRef.current.getBoundingClientRect()
        const startX = event.clientX - rect.left
        const startY = event.clientY - rect.top
        setIsDragging(true)
        setDragBox({ startX, startY, endX: startX, endY: startY })
    }

    const handleMouseMove = (event) => {
        if (!isDragging) return
        const rect = gridRef.current.getBoundingClientRect()
        setDragBox((prev) => ({
            ...prev,
            endX: event.clientX - rect.left,
            endY: event.clientY - rect.top,
        }))
    }

    const handleMouseUp = () => {
        if (isDragging && dragBox) {
            const box = getSelectionBox(dragBox)
            const selectedIndices = getItemsInBox(box)
            setSelected((prev) => new Set([...prev, ...selectedIndices]))
        }
        setIsDragging(false)
        setDragBox(null)
    }

    const handleItemClick = (event, index) => {
        const newSelected = new Set(selected);

        if (event.shiftKey && startIndex !== null) {
            const rangeStart = Math.min(startIndex, index)
            const rangeEnd = Math.max(startIndex, index)
            for (let i = rangeStart; i <= rangeEnd; i++) newSelected.add(i)
        } else if (event.ctrlKey || event.metaKey) {
            newSelected.has(index) ? newSelected.delete(index) : newSelected.add(index)
            setStartIndex(index)
        } else {
            newSelected.clear()
            newSelected.add(index)
            setStartIndex(index)
        }

        setSelected(newSelected)
    }

    const getSelectionBox = ({ startX, startY, endX, endY }) => ({
        left: Math.min(startX, endX),
        top: Math.min(startY, endY),
        right: Math.max(startX, endX),
        bottom: Math.max(startY, endY),
    })

    const getItemsInBox = ({ left, top, right, bottom }) => {
        const gridRect = gridRef.current.getBoundingClientRect()
        const selectedIndices = []

        gridRef.current.childNodes.forEach((node, i) => {
            const rect = node.getBoundingClientRect()
            const x = rect.left - gridRect.left
            const y = rect.top - gridRect.top
            if (
                x + rect.width > left &&
                x < right &&
                y + rect.height > top &&
                y < bottom
            ) {
                selectedIndices.push(i)
            }
        })

        return selectedIndices
    }

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
            <div
                className="relative w-full h-full select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <div
                    ref={gridRef}
                    className="grid gap-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200"
                    style={{ gridTemplateColumns: `repeat(${NUM_COLS}, minmax(0, 1fr))` }}
                >
                    {items.map((i) => (
                        <div
                            key={i}
                            onClick={(event) => handleItemClick(event, i)}
                            className={`transition-all duration-200 ease-in-out w-14 h-14 flex items-center justify-center rounded-lg text-sm font-medium shadow-sm cursor-pointer border border-gray-300 ${selected.has(i)
                                ? "bg-blue-600 text-white scale-105 shadow-md"
                                : "bg-gray-50 hover:bg-blue-100"
                                }`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>

                {isDragging && dragBox && (
                    <div
                        className="absolute drag-box"
                        style={{
                            left: `${getSelectionBox(dragBox).left}px`,
                            top: `${getSelectionBox(dragBox).top}px`,
                            width: `${getSelectionBox(dragBox).right - getSelectionBox(dragBox).left}px`,
                            height: `${getSelectionBox(dragBox).bottom - getSelectionBox(dragBox).top}px`,
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default SelectableGrid