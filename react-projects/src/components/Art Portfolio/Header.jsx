import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <motion.header
            className="bg-white text-black p-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl">Artist Name</h1>
                <ul class="font-medium flex rounded-lg bg-gray-50">
                    <li><Link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded rounded text-decoration-none hover:bg-gray-100">Home</Link></li>
                    <li><Link to="/portfolio" class="block py-2 px-3 text-gray-900 rounded text-decoration-none hover:bg-gray-100">Portfolio</Link></li>
                    <li><Link to="/about" class="block py-2 px-3 text-gray-900 rounded text-decoration-none hover:bg-gray-100">About</Link></li>
                    <li><Link to="/contact" class="block py-2 px-3 text-gray-900 rounded text-decoration-none hover:bg-gray-100">Contact</Link></li>
                </ul>
            </nav>
        </motion.header>
    )
}

export default Header