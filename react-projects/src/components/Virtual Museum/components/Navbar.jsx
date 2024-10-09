import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-10">
            <div className="flex justify-around items-center">
                <Link to="/" className="text-white hover:text-blue-400 text-decoration-none">Home</Link>
                <Link to="/museum" className="inline-flex items-center justify-center p-2 text-base font-medium text-white text-decoration-none rounded-lg bg-gray-900 hover:text-black hover:bg-gray-800">
                    <span class="w-full">Museum Tour</span>
                    <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar