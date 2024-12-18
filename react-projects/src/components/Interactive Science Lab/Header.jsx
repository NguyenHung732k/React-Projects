import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Interactive Science Lab</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="text-blue-600 text-decoration-none">Home</a></li>
                    <li><a href="#experiment" className="text-blue-600 text-decoration-none">Experiment</a></li>
                    <li><a href="#quiz" className="text-blue-600 text-decoration-none">Quiz</a></li>
                    <li><a href="#results" className="text-blue-600 text-decoration-none">Results</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header