import React, { useState } from 'react';

const TodoItem = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState)
  }

  return (
    <div className="todo-item flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
      <div
        onClick={handleCheckboxClick}
        className="relative w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-all duration-300 ${isChecked ? 'text-green-500' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="transition-all duration-300"
          />
          <path
            d="M7 12l5 5L17 7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transform transition-all duration-300 ${isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-center bounce-checkmark`}
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-1/2 left-0 right-0 h-[2px] bg-gray-500 transition-all duration-500 ${isChecked ? 'stroke-1' : 'stroke-0 opacity-0'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M4 12h16" strokeWidth="2" />
        </svg>
      </div>

      <span
        className={`text-lg font-medium transition-all duration-300 ${isChecked ? 'line-through text-gray-500' : 'text-gray-800'}`}
      >
        {text}
      </span>
    </div>
  )
}

export default TodoItem