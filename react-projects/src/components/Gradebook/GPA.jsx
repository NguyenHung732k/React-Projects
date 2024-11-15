import React from 'react'

const GPA = ({ student, grades }) => {
    const studentGrades = grades[student.id] || {}
    const weightedGPA = Object.keys(studentGrades).reduce((acc, subject) => {
        const subjectGrades = studentGrades[subject]
        const totalWeight = subjectGrades.reduce((total, { weight }) => total + weight, 0)
        const weightedSum = subjectGrades.reduce((sum, { grade, weight }) => sum + grade * weight, 0)
        return acc + weightedSum / totalWeight
    }, 0)

    const totalSubjects = Object.keys(studentGrades).length
    const gpa = totalSubjects ? (weightedGPA / totalSubjects).toFixed(2) : 'N/A'

    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">GPA: <span className="text-blue-600">{gpa}</span></h3>
        </div>
    )
}

export default GPA