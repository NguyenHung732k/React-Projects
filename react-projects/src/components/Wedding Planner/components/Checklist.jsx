import React, { useState } from 'react'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'

function Checklist() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    const addTask = () => {
        if (task) {
            setTasks([...tasks, { id: Date.now(), task, completed: false }])
            setTask('')
        }
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    const taskCompletion = (tasks.filter(t => t.completed).length / tasks.length) * 100

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Wedding Checklist</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Add new task"
                />
                <button onClick={addTask} className="bg-teal-500 text-white px-4 py-2 rounded-md">Add</button>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${taskCompletion}%` }}></div>
            </div>
            <ul className="space-y-4">
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center">
                            {task.completed ? (
                                <FiCheckCircle className="text-teal-500 mr-2" />
                            ) : (
                                <FiCircle className="text-gray-500 mr-2" />
                            )}
                            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.task}</span>
                        </div>
                        <button onClick={() => toggleTask(task.id)} className="text-teal-500 hover:text-teal-700">
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Checklist