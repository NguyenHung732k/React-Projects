import React, { useState } from 'react'
import { useStudy } from '../context/StudyContext'
import { toast } from 'react-toastify'

const Reminders = () => {
    const { reminders, setReminders } = useStudy()
    const [reminderTitle, setReminderTitle] = useState('')
    const [reminderDate, setReminderDate] = useState('')
    const [reminderType, setReminderType] = useState('goal')

    const handleAddReminder = () => {
        if (reminderTitle && reminderDate) {
            const reminder = {
                title: reminderTitle,
                date: reminderDate,
                type: reminderType,
            }

            setReminders([...reminders, reminder])
            toast.success(`Reminder for ${reminderType} added successfully!`)
            setReminderTitle('')
            setReminderDate('')
            setReminderType('goal')
        } else {
            toast.error('Please fill in all fields.')
        }
    }


    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Reminders</h1>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold">Add New Reminder</h2>
                <input
                    type="text"
                    placeholder="Reminder Title"
                    value={reminderTitle}
                    onChange={(event) => setReminderTitle(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    value={reminderDate}
                    onChange={(event) => setReminderDate(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <select
                    value={reminderType}
                    onChange={(event) => setReminderType(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                >
                    <option value="goal">Goal</option>
                    <option value="session">Session</option>
                    <option value="resource">Resource</option>
                    <option value="note">Note</option>
                </select>
                <button
                    onClick={handleAddReminder}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Reminder
                </button>
            </div>
        </div>
    )
}

export default Reminders