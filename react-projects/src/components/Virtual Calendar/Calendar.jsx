import React, { useState } from "react"
import { format, startOfMonth, endOfMonth, addMonths, subMonths, eachDayOfInterval } from "date-fns"
import { enUS } from "date-fns/locale"
import { FaDumbbell, FaRegHandshake, FaHeart, FaBullhorn, FaUsers, FaRegCalendarAlt, FaSmile } from 'react-icons/fa'
import { motion } from 'framer-motion'

const themes = {
    Monday: { text: "Motivation Monday", icon: <FaBullhorn />, bgColor: "bg-blue-300", blurColor: "bg-blue-500/20" },
    Tuesday: { text: "Tip Tuesday", icon: <FaRegCalendarAlt />, bgColor: "bg-green-300", blurColor: "bg-green-500/20" },
    Wednesday: { text: "Workout Wednesday", icon: <FaDumbbell />, bgColor: "bg-yellow-300", blurColor: "bg-yellow-500/20" },
    Thursday: { text: "Thoughtful Thursday", icon: <FaHeart />, bgColor: "bg-pink-300", blurColor: "bg-pink-500/20" },
    Friday: { text: "Focus Friday", icon: <FaSmile />, bgColor: "bg-indigo-300", blurColor: "bg-indigo-500/20" },
    Saturday: { text: "Social Saturday", icon: <FaUsers />, bgColor: "bg-purple-300", blurColor: "bg-purple-500/20" },
    Sunday: { text: "Self-care Sunday", icon: <FaRegHandshake />, bgColor: "bg-teal-300", blurColor: "bg-teal-500/20" },
}

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [hoveredDay, setHoveredDay] = useState(null)

    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1))
    }

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1))
    }

    const getDayTheme = (day) => {
        const dayName = format(day, "EEEE", { locale: enUS })
        return themes[dayName] || ""
    }

    return (
        <div className="w-full relative mx-auto p-6">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-30 z-[-1] blur-md"></div>

            <motion.div
                className="bg-white shadow-lg rounded-lg p-6 z-10 relative"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <motion.button
                        onClick={handlePrevMonth}
                        className="text-2xl font-bold text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {"<"}
                    </motion.button>
                    <span className="text-2xl font-semibold text-gray-800">{format(currentDate, "MMMM yyyy")}</span>
                    <motion.button
                        onClick={handleNextMonth}
                        className="text-2xl font-bold text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {">"}
                    </motion.button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-700">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-sm text-gray-500">{day}</div>
                    ))}

                    {daysInMonth.map((day) => {
                        const theme = getDayTheme(day)
                        return (
                            <motion.div
                                key={day}
                                className={`relative p-6 bg-white border rounded-lg shadow-sm cursor-pointer transition duration-200 ease-in-out 
                  ${hoveredDay === day ? "bg-blue-100" : "hover:bg-blue-50"} 
                  ${theme.bgColor} ${theme.blurColor}`}
                                onMouseEnter={() => setHoveredDay(day)}
                                onMouseLeave={() => setHoveredDay(null)}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-lg font-semibold text-gray-800">{format(day, "d")}</div>

                                <div className="absolute bottom-1 left-0 right-0 text-xs text-gray-600 p-1">
                                    <div className="flex justify-center items-center space-x-1">
                                        <div className="text-lg">{theme.icon}</div>
                                        <div>{theme.text}</div>
                                    </div>
                                </div>

                                {hoveredDay === day && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 bg-white p-2 rounded-t-md shadow-lg mt-2 text-xs text-gray-800"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="text-lg">{theme.icon}</div>
                                            <div className="text-sm font-semibold">{theme.text}</div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Calendar