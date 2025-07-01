import React from 'react';
import SortableTable from './SortableTable'

const AnimatedSorting = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Animated Sortable Table
            </h1>
            <SortableTable />
        </div>
    )
}

export default AnimatedSorting