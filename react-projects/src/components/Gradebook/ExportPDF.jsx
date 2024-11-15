import React from 'react'
import { jsPDF } from 'jspdf'

const ExportPDFButton = ({ students, grades }) => {
    const exportPDF = () => {
        const doc = new jsPDF()
        students.forEach((student, index) => {
            doc.text(`Student: ${student.name}`, 10, 10 + index * 20)
            const studentGrades = grades[student.id] || {}
            Object.keys(studentGrades).forEach((subject, subIndex) => {
                const avgGrade = (studentGrades[subject].reduce((acc, grade) => acc + grade, 0) / studentGrades[subject].length).toFixed(2)
                doc.text(`${subject}: ${avgGrade}`, 10, 15 + index * 20 + subIndex * 10)
            })
        })

        doc.save('grade_report.pdf')
    }

    return (
        <button
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            onClick={exportPDF}
        >
            Export to PDF
        </button>
    )
}

export default ExportPDFButton