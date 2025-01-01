import React from 'react'

const Reports = () => {
    const weeklyReport = {
        studyHours: 15,
        breakHours: 5,
    }

    return (
        <div className="reports-container mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
            {weeklyReport ? (
                <div>
                    <p>Total Study Hours: {weeklyReport.studyHours}</p>
                    <p>Total Break Hours: {weeklyReport.breakHours}</p>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    )
}

export default Reports