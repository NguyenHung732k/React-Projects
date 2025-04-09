import React, { useState } from 'react'
import { FaHome, FaUserAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleSidebar = () => setIsOpen(!isOpen)
    const toggleCollapse = () => setIsCollapsed(!isCollapsed)

    return (
        <div className="relative">
            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Hamburger Icon for Mobile */}
            <button
                className="lg:hidden absolute top-4 left-4 text-white"
                onClick={toggleSidebar}
                aria-label="Open Sidebar"
            >
                <FaBars size={30} />
            </button>

            {/* Sidebar */}
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-700 to-blue-900 text-white transform transition-transform duration-300 ease-in-out z-50 shadow-lg lg:group lg:translate-x-0 lg:relative lg:hover:translate-x-0 lg:w-64`}
            >
                {/* Sidebar Header with Close Button */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-semibold">My App</h2>
                    <button
                        onClick={toggleSidebar}
                        className="text-white lg:hidden"
                        aria-label="Close Sidebar"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="px-6 mt-4 space-y-6">
                    <ul>
                        <li>
                            <a
                                href="/"
                                className="flex items-center space-x-3 text-lg text-decoration-none hover:text-blue-400 transition duration-200"
                            >
                                <FaHome />
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="flex items-center space-x-3 text-lg text-decoration-none hover:text-blue-400 transition duration-200"
                            >
                                <FaUserAlt />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="flex items-center space-x-3 text-lg text-decoration-none hover:text-blue-400 transition duration-200"
                            >
                                <FaCog />
                                <span>Settings</span>
                            </a>
                        </li>

                        {/* Collapsible Section */}
                        <li>
                            <button
                                onClick={toggleCollapse}
                                className="w-full text-left flex items-center space-x-3 text-lg hover:text-blue-400"
                            >
                                <FaCog />
                                <span>More Options</span>
                            </button>
                            <div
                                className={`${isCollapsed ? 'h-0 overflow-hidden' : 'h-32'
                                    } transition-all duration-300 ease-in-out overflow-hidden pl-8 mt-2`}
                            >
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center space-x-3 text-sm text-decoration-none hover:text-blue-400 transition duration-200"
                                        >
                                            <FaCog />
                                            <span>Option 1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center space-x-3 text-sm text-decoration-none hover:text-blue-400 transition duration-200"
                                        >
                                            <FaCog />
                                            <span>Option 2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar