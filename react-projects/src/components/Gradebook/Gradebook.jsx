import React, { useState } from 'react'
import StudentProfile from './StudentProfile'
import GradeInput from './GradeInput'
import GPA from './GPA'
import ClassReport from './ClassReport'
import ExportCSV from './ExportCSV'
import ExportPDF from './ExportPDF'

const Gradebook = () => {
    const [students, setStudents] = useState([])
    const [grades, setGrades] = useState({})

    const addGrade = (studentId, subject, grade) => {
        setGrades((prevGrades) => ({
            ...prevGrades,
            [studentId]: {
                ...prevGrades[studentId],
                [subject]: [...(prevGrades[studentId]?.[subject] || []), grade],
            },
        }))
    }

    const addStudent = (name) => {
        const newStudent = { id: Date.now(), name }
        setStudents([...students, newStudent])
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Student Gradebook</h1>

            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <button
                    className="bg-blue-600 text-white p-2 rounded-lg mb-4 w-full hover:bg-blue-700 transition"
                    onClick={() => addStudent(prompt("Enter student's name:"))}
                >
                    Add Student
                </button>

                {students.length === 0 ? (
                    <div className="text-center text-gray-500">No students added yet.</div>
                ) : (
                    students.map((student) => (
                        <div key={student.id} className="mb-6 border-b pb-6">
                            <StudentProfile student={student} />
                            <GradeInput student={student} addGrade={addGrade} />
                            <GPA student={student} grades={grades} />
                        </div>
                    ))
                )}

                <div className="flex justify-between mt-6">
                    <ExportCSV students={students} grades={grades} />
                    <ExportPDF students={students} grades={grades} />
                </div>
            </div>

            {students.length > 0 && (
                <ClassReport students={students} grades={grades} />
            )}
        </div>
    )
}

export default Gradebook