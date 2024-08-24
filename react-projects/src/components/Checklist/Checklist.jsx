import React, { useEffect, useState } from 'react'


const Checklist = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        // Load tasks from localStorage
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (savedTasks) setTasks(savedTasks);
    }, []);

    useEffect(() => {
        // Save tasks to localStorage
        if (tasks?.length) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            const task = {
                id: Date.now(),
                text: newTask,
                completed: false
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Checklist App</h1>

                {/* Task Input Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Task</h2>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a new task"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <button
                        onClick={addTask}
                        className="w-full mt-4 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        Add Task
                    </button>
                </div>

                {/* Task List Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task List</h2>
                    {tasks.length > 0 ? (
                        <ul>
                            {tasks.map(task => (
                                <li key={task.id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTaskCompletion(task.id)}
                                            className="mr-3"
                                        />
                                        <p className={`flex-1 m-0 p-0 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                            {task.text}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => deleteTask(task.id)}
                                        className="ml-4 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-center">No tasks available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Checklist