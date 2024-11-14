import React, { useState } from "react"
import Calendar from "./Calendar"

const VirtualCalendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date())


    return (
        <div className="w-screen bg-gray-50 min-h-screen flex flex-col items-center py-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-12">Virtual Calendar with Daily Themes</h1>
            <div className="w-5/6 bg-white shadow-lg rounded-lg w-5/6 p-4">
                <Calendar />
            </div>
        </div>
    )
}

export default VirtualCalendar