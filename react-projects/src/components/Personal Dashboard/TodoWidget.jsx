import React, { useState } from 'react'

const TodoWidget = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">To-Do List</h3>
            <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                className="border p-2 mt-2 w-full rounded"
            />
            <button
                onClick={addTask}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
                Add Task
            </button>
            <ul className="mt-4">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between py-2">
                        {task}
                        <button onClick={() => removeTask(index)} className="text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoWidget