import React, { useState } from "react";
import BreadcrumbTrail from "./BreadcrumbTrail"

const AnimatedBreadcrumbTrail = () => {
    const [path, setPath] = useState(["Home", "Projects", "React App", "Settings"])

    const handleNavigate = (index) => {
        setPath(path.slice(0, index + 1))
    }

    const addSegment = () => {
        const next = `Step ${path.length}`
        setPath([...path, next])
    }

    return (
        <div className="flex flex-col items-start p-8 space-y-6 bg-white dark:bg-gray-900 min-h-screen">
            <BreadcrumbTrail path={path} onNavigate={handleNavigate} />

            <div className="space-x-3">
                <button
                    onClick={addSegment}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Add Segment
                </button>
                <button
                    onClick={() => setPath(["Home"])}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default AnimatedBreadcrumbTrail