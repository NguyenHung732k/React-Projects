import React from "react"
import TimelineItem from "./TimelineItem"

const timelineData = [
    { id: 1, title: "Project Initiated", date: "January 2023" },
    { id: 2, title: "Design Phase Completed", date: "February 2023" },
    { id: 3, title: "Development Started", date: "March 2023" },
    { id: 4, title: "First Beta Release", date: "May 2023" },
]

const TimelineScroll = () => {
    return (
        <div className="h-screen relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-slate-600" />

            <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-12">
                {timelineData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    )
}

export default TimelineScroll