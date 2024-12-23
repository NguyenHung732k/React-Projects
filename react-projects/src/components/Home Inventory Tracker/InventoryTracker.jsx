import React, { useState } from 'react'
import AddItemForm from './AddItemForm'
import ItemList from './ItemList'
import ItemFilters from './ItemFilters'
import Reminders from './Reminders'

const InventoryTracker = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'TV', category: 'Electronics', condition: 'New', expirationDate: '', description: 'Smart TV', },
        { id: 2, name: 'Bananas', category: 'Groceries', condition: 'Used', expirationDate: '2024-12-31', description: 'Perishable fruit' },
        { id: 3, name: 'Sofa', category: 'Furniture', condition: 'New', expirationDate: '', description: 'Leather sofa' },
    ])

    const [searchTerm, setSearchTerm] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    const [conditionFilter, setConditionFilter] = useState('')
    const [expirationFilter, setExpirationFilter] = useState('')
    const [activeSection, setActiveSection] = useState('inventory')


    const handleAddItem = (item) => {
        setItems([...items, { ...item, id: Date.now() }])
    }

    const filteredItems = items.filter((item) => {
        return (
            (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (categoryFilter === '' || item.category === categoryFilter) &&
            (conditionFilter === '' || item.condition === conditionFilter) &&
            (expirationFilter === '' || item.expirationDate === expirationFilter || (new Date(item.expirationDate) <= new Date(expirationFilter)))
        )
    })

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="bg-gradient-to-b from-blue-500 to-indigo-500 text-white w-64 p-6 space-y-6">
                <h2 className="text-3xl font-bold mb-6">Inventory Tracker</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <button
                                onClick={() => setActiveSection('inventory')}
                                className="w-full text-left p-3 rounded-lg hover:bg-indigo-600 transition-colors"
                            >
                                Inventory
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('add-item')}
                                className="w-full text-left p-3 rounded-lg hover:bg-indigo-600 transition-colors"
                            >
                                Add Item
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('reminders')}
                                className="w-full text-left p-3 rounded-lg hover:bg-indigo-600 transition-colors"
                            >
                                Reminders
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="w-full p-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Home Inventory Tracker</h1>

                {activeSection === 'inventory' && (
                    <>
                        <ItemFilters
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            categoryFilter={categoryFilter}
                            setCategoryFilter={setCategoryFilter}
                            conditionFilter={conditionFilter}
                            setConditionFilter={setConditionFilter}
                            expirationFilter={expirationFilter}
                            setExpirationFilter={setExpirationFilter}
                        />
                        <ItemList items={filteredItems} />
                    </>
                )}

                {activeSection === 'add-item' && (
                    <AddItemForm onAddItem={handleAddItem} />
                )}

                {activeSection === 'reminders' && <Reminders />}
            </div>
        </div>
    )
}

export default InventoryTracker