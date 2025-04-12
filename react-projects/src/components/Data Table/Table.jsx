import React, { useState, useCallback } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import { FiSearch, FiDownload, FiX } from 'react-icons/fi'
import { saveAs } from 'file-saver'

const Table = ({ data, columns }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [theme, setTheme] = useState('light')

    // Filter data based on search term
    const filteredData = React.useMemo(() => {
        return data.filter((row) => {
            return columns.some((column) =>
                row[column.accessor].toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
    }, [data, columns, searchTerm])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { pageIndex, pageSize },
        canNextPage,
        canPreviousPage,
        nextPage,
        previousPage,
        pageOptions,
        setPageSize,
    } = useTable(
        {
            columns,
            data: filteredData,
            initialState: {
                pageIndex: 0,
                pageSize: 5,
            },
        },
        useSortBy,
        usePagination
    )

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }, [])

    const handleExport = () => {
        const csvData = filteredData.map((row) => columns.map((column) => row[column.accessor]))
        const csv = [
            columns.map((column) => column.Header).join(','),
            ...csvData.map((row) => row.join(','))
        ].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
        saveAs(blob, 'data.csv')
    }

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} p-6`}>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors hover:bg-gray-400"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <div className="relative w-1/4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg w-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <FiX />
                            </button>
                        )}
                    </div>
                </div>
                <button
                    onClick={handleExport}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                >
                    <FiDownload className="text-xl" />
                    <span>Export</span>
                </button>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table {...getTableProps()} className="min-w-full table-auto">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-4 py-3 bg-gray-200 text-left font-semibold cursor-pointer hover:bg-gray-300"
                                    >
                                        {column.render('Header')}
                                        <span className="ml-1">
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="hover:bg-gray-100 transition-all">
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()} className="px-4 py-3 border-t">{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6">
                <div>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
                    >
                        Previous
                    </button>
                    <span className="mx-4">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
                    >
                        Next
                    </button>
                </div>
                <select
                    value={pageSize}
                    onChange={(event) => setPageSize(Number(event.target.value))}
                    className="bg-gray-200 border rounded-lg px-4 py-2"
                >
                    {[5, 10, 20, 50].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Table