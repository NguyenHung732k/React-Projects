import React from 'react'

const StudentProfile = ({ student }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-300 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
            <p className="text-gray-600 text-sm">Student ID: {student.id}</p>
        </div>
    )
}

export default StudentProfile