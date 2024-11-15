import React from 'react'

const ClassReport = ({ students, grades }) => {
    const totalGrades = students.reduce((acc, student) => {
        const studentGrades = grades[student.id] || {}
        Object.keys(studentGrades).forEach((subject) => {
            acc.push(...studentGrades[subject])
        })
        return acc
    }, [])

    const classGPA = totalGrades.length
        ? (totalGrades.reduce((acc, grade) => acc + grade, 0) / totalGrades.length).toFixed(2)
        : 'N/A'

    return (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Class Report</h3>
            <p className="text-lg text-gray-600">Class GPA: <span className="font-bold text-blue-600">{classGPA}</span></p>
            <div className="mt-4 border-t border-gray-300 pt-4">
                <h4 className="font-semibold text-lg text-gray-800">Students</h4>
                <ul className="list-disc pl-5">
                    {students.map((student) => (
                        <li key={student.id} className="text-gray-700">{student.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ClassReport