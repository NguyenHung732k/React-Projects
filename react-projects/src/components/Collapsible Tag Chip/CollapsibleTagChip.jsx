import React, { useEffect, useRef, useState } from "react";

const STAGGER_MS = 50

const sampleTags = [
    "React", "Tailwind", "UI", "Responsive", "JavaScript",
    "Accessibility", "Hooks", "Performance", "UX", "Components",
]

const CollapsibleTagChip = ({ tags = sampleTags }) => {
    const containerRef = useRef(null)
    const tagRefs = useRef([])
    const [visibleCount, setVisibleCount] = useState(tags.length)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (!expanded) {
                calculateVisibleTags()
            }
        })

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [tags, expanded])

    useEffect(() => {
        if (!expanded) calculateVisibleTags()
    }, [expanded])

    const calculateVisibleTags = () => {
        const container = containerRef.current
        if (!container) return

        const containerWidth = container.offsetWidth
        let totalWidth = 0
        let fitCount = 0

        for (let i = 0; i < tags.length; i++) {
            const tagEl = tagRefs.current[i]
            if (!tagEl) continue

            const chipWidth = tagEl.offsetWidth + 8
            const reservedWidth = 80

            if (totalWidth + chipWidth > containerWidth - reservedWidth) break

            totalWidth += chipWidth
            fitCount++
        }

        setVisibleCount(fitCount)
    }

    const handleToggle = () => setExpanded((prev) => !prev)

    const visibleTags = expanded ? tags : tags.slice(0, visibleCount)
    const hiddenCount = tags.length - visibleCount

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Tags</h1>
            <div
                ref={containerRef}
                className="relative flex flex-wrap gap-2 transition-all duration-300"
            >
                {visibleTags.map((tag, idx) => (
                    <span
                        key={tag}
                        ref={(el) => (tagRefs.current[idx] = el)}
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 shadow-sm transition-all duration-300 transform opacity-100 scale-100"
                        style={{
                            transitionDelay: expanded ? `${idx * STAGGER_MS}ms` : "0ms",
                        }}
                    >
                        {tag}
                    </span>
                ))}

                {/* Expand Button */}
                {!expanded && hiddenCount > 0 && (
                    <button
                        onClick={handleToggle}
                        aria-label={`Show ${hiddenCount} more tags`}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 shadow transition"
                    >
                        +{hiddenCount} more
                    </button>
                )}

                {/* Collapse Button */}
                {expanded && tags.length > visibleCount && (
                    <button
                        onClick={handleToggle}
                        aria-label="Collapse tags"
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 shadow transition"
                    >
                        Show less
                    </button>
                )}
            </div>
        </div>
    )
}

export default CollapsibleTagChip