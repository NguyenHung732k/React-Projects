import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-10">
            <div className="container mx-auto flex justify-between">
                <div>© 2024 Art Commission Marketplace</div>
                <div>
                    <a href="/contact" className="hover:underline text-decoration-none">Contact Us</a>
                    <span className="mx-2">|</span>
                    <a href="/about" className="hover:underline text-decoration-none">About</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer