import React from "react"

const StickyTracker = ({ sections, activeSection }) => {
    return (
        <div className="sticky top-0 w-64 h-screen p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Table of Contents</h2>
            <ul className="mt-6 space-y-4">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#section-${section.id}`}
                            className={`block text-lg px-3 py-2 rounded-lg text-decoration-none transition-all duration-300 ${activeSection === section.id
                                ? "bg-blue-500 text-white"
                                : "text-gray-800 hover:bg-blue-100"
                                }`}
                        >
                            <span className="inline-block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StickyTracker