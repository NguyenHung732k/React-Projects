import React from 'react'

const AnalyticsCard = ({ title, value }) => {
    return (
        <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-4 m-2 transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-2xl">{value}</p>
        </div>
    )
}

export default AnalyticsCard