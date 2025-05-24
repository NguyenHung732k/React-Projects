import React, { useState } from 'react'

const ExpandableTable = () => {
    const [expandedRow, setExpandedRow] = useState(null)

    const data = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            details: 'John is a senior developer with 10 years of experience specializing in backend systems.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            details: 'Jane is a UX/UI designer with a passion for crafting intuitive user interfaces.'
        },
        {
            id: 3,
            name: 'Alice Brown',
            email: 'alice@example.com',
            details: 'Alice is a project manager experienced in agile workflows and cross-functional teams.'
        },
    ]

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id)
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <table className="w-full border-separate border-spacing-y-2">
                <thead>
                    <tr className="bg-gray-100 text-left text-gray-800">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3 w-12 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        const isOpen = expandedRow === row.id;

                        return (
                            <div key={row.id} className="contents">
                                <tr
                                    onClick={() => toggleRow(row.id)}
                                    className="bg-white hover:shadow cursor-pointer transition rounded"
                                >
                                    <td className="px-4 py-3 rounded-l">{row.name}</td>
                                    <td className="px-4 py-3">{row.email}</td>
                                    <td className="px-4 py-3 text-center rounded-r">
                                        <svg
                                            className={`w-5 h-5 mx-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={3} className="px-4 pt-0">
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                                                }`}
                                        >
                                            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm text-gray-700">
                                                {row.details}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExpandableTable