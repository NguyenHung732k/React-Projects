import React from 'react'
import Papa from 'papaparse'

const ExportCSV = ({ students, grades }) => {
    const exportCSV = () => {
        const data = students.map((student) => {
            const studentGrades = grades[student.id] || {}
            const subjects = Object.keys(studentGrades)
            const subjectGrades = subjects.map((subject) => {
                const avgGrade = (studentGrades[subject].reduce((acc, grade) => acc + grade, 0) / studentGrades[subject].length).toFixed(2)
                return `${subject}: ${avgGrade}`
            }).join(', ')

            return {
                'Student Name': student.name,
                'Grades': subjectGrades,
            }
        })

        const csv = Papa.unparse(data)
        const blob = new Blob([csv], { type: 'text/csv' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'grade_report.csv'
        link.click()
    }

    return (
        <button
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            onClick={exportCSV}
        >
            Export to CSV
        </button>
    )
}

export default ExportCSV