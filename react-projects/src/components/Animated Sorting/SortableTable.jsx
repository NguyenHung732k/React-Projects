import React, { useState, useMemo } from 'react';
import SortableHeader from './SortableHeader'

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
]

const SortableTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                const nextDirection =
                    prev.direction === 'asc' ? 'desc' : prev.direction === 'desc' ? null : 'asc'
                return { key, direction: nextDirection }
            }
            return { key, direction: 'asc' }
        })
    }

    const sortedData = useMemo(() => {
        if (!sortConfig.key || !sortConfig.direction) return data;
        return [...data].sort((a, b) => {
            const valA = a[sortConfig.key]
            const valB = b[sortConfig.key]
            if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1
            if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1
            return 0
        })
    }, [sortConfig])

    return (
        <div className="overflow-x-auto rounded-md border border-gray-300 dark:border-gray-700">
            <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-200">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                        <SortableHeader
                            columnKey="name"
                            label="Name"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                        />
                        <SortableHeader
                            columnKey="age"
                            label="Age"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                        />
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900">
                    {sortedData.map((row, idx) => (
                        <tr
                            key={idx}
                            className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <td className="px-4 py-3">{row.name}</td>
                            <td className="px-4 py-3">{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SortableTable