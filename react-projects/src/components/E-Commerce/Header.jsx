import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="w-screen min-h-12">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center my-4 mx-auto max-w-screen-xl">

                    <div className="justify-between items-center w-full lg:flex lg:w-auto">
                        <div className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-decoration-none text-xl px-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-600 lg:p-0">Home</Link>
                            <Link to="/cart" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-decoration-none text-xl px-4 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-600 lg:p-0">Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header