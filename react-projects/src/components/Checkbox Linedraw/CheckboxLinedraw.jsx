import React from 'react';
import TodoItem from './TodoItem'

const CheckboxLinedraw = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">To-Do List</h1>

                <TodoItem text="Learn React" />
                <TodoItem text="Study SVG Animations" />
                <TodoItem text="Build a Project" />
                <TodoItem text="Publish Your First App" />
            </div>
        </div>
    )
}

export default CheckboxLinedraw