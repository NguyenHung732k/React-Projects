import React from 'react'

const Layout = ({ children, title }) => {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <nav className="container mx-auto">
                    <h1 className="text-2xl">{title ? `${title} - My Blog` : 'My Blog'}</h1>
                </nav>
            </header>
            <main className="container mx-auto mb-auto p-4">{children}</main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} My Blog
            </footer>
        </div>
    )
}

export default Layout