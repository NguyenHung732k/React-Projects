import React from 'react'

const GridOverlay = ({ columns, rows, gutter, visible }) => {
    if (!visible) return null

    const colArray = Array.from({ length: columns })
    const rowArray = Array.from({ length: rows })

    return (
        <div className="fixed inset-0 z-40 pointer-events-none">
            {/* Columns */}
            <div className="absolute inset-0 flex opacity-40 transition-all duration-300">
                {colArray.map((_, i) => (
                    <div
                        key={i}
                        className="h-full border-r border-blue-500 border-dotted"
                        style={{
                            flex: 1,
                            marginRight: i !== columns - 1 ? `${gutter}px` : 0,
                        }}
                    />
                ))}
            </div>
            {/* Rows */}
            <div className="absolute inset-0 flex flex-col opacity-40 transition-all duration-300">
                {rowArray.map((_, i) => (
                    <div
                        key={i}
                        className="w-full border-b border-pink-500 border-dotted"
                        style={{
                            flex: 1,
                            marginBottom: i !== rows - 1 ? `${gutter}px` : 0,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default GridOverlay