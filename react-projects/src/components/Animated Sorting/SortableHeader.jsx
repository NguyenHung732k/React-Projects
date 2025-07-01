import React from 'react';

const SortableHeader = ({ columnKey, label, sortConfig, onSort }) => {
    const isActive = sortConfig.key === columnKey
    const direction = isActive ? sortConfig.direction : null

    const iconClass = "w-4 h-4 transition-transform duration-300"

    const getIcon = () => {
        switch (direction) {
            case 'asc':
                return (<svg className={`${iconClass} rotate-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>);
            case 'desc':
                return (<svg className={`${iconClass} rotate-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>);
            default:
                return (<svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>);
        }
    }

    return (
        <th
            scope="col"
            tabIndex={0}
            onClick={() => onSort(columnKey)}
            onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && onSort(columnKey)}
            aria-sort={
                direction === 'asc' ? 'ascending' :
                    direction === 'desc' ? 'descending' :
                        'none'
            }
            className={`px-4 py-3 cursor-pointer select-none group transition-colors 
        ${isActive ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold' : ''}
      `}
        >
            <div className="flex items-center gap-1">
                <span>{label}</span>
                <span className="group-hover:scale-110 transition-transform">{getIcon()}</span>
            </div>
        </th>
    )
}

export default SortableHeader