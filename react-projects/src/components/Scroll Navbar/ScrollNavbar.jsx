import React from 'react';
import ScrollHeader from './ScrollHeader'

const ScrollNavbar = () => {
    return (
        <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
            <ScrollHeader animation="slide" threshold={30}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-indigo-600 hover:scale-105 transition-transform cursor-pointer">
                        MyApp
                    </div>
                    <ul className="hidden md:flex space-x-6 text-sm font-medium">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <li
                                key={item}
                                className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </ScrollHeader>

            <main className="pt-24 px-4">
                <section className="max-w-3xl mx-auto space-y-8">
                    {[...Array(40)].map((_, i) => (
                        <p key={i} className="text-lg leading-7">
                            Scroll content block #{i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        </p>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default ScrollNavbar