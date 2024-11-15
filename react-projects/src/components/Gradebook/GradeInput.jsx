import React, { useState } from 'react'

const GradeInput = ({ student, addGrade }) => {
    const [grade, setGrade] = useState('')
    const [subject, setSubject] = useState('')
    const [weight, setWeight] = useState(1)

    const handleSubmit = () => {
        if (grade !== '' && subject !== '') {
            addGrade(student.id, subject, { grade: parseFloat(grade), weight: parseFloat(weight) })
            setGrade('')
            setSubject('')
            setWeight(1)
        }
    }

    return (
        <div className="mb-4">
            <div className="flex items-center space-x-4">
                <select
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="border p-2 rounded-lg w-40"
                >
                    <option value="">Select Subject</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                </select>
                <input
                    type="number"
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                    placeholder="Grade"
                    className="border p-2 rounded-lg w-28"
                />
                <input
                    type="number"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="Weight"
                    className="border p-2 rounded-lg w-28"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
                >
                    Add Grade
                </button>
            </div>
        </div>
    )
}

export default GradeInput