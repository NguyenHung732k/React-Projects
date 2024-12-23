import React from 'react'

const ItemFilters = ({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, conditionFilter, setConditionFilter, expirationFilter, setExpirationFilter }) => {
    return (
        <div className="mb-8">
            <div className="flex space-x-6 mb-6">
                <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-full px-4 py-3 border-r-8 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex space-x-6 mb-6">
                <select
                    value={categoryFilter}
                    onChange={(event) => setCategoryFilter(event.target.value)}
                    className="w-full px-4 py-3 border-r-8 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Filter by Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Furniture">Furniture</option>
                </select>

                <select
                    value={conditionFilter}
                    onChange={(event) => setConditionFilter(event.target.value)}
                    className="w-full px-4 py-3 border-r-8 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Filter by Condition</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                </select>

                <input
                    type="date"
                    value={expirationFilter}
                    onChange={(event) => setExpirationFilter(event.target.value)}
                    className="w-full px-4 py-3 border-r-8 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
        </div>
    )
}

export default ItemFilters