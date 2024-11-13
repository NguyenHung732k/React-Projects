import React, { useState } from 'react'
import { stores, storePrices } from '../data/storeData'
import GroceryItem from '../components/GroceryItem'
import SearchBar from '../components/SearchBar'
import PriceComparisonChart from '../components/PriceComparisonChart'
import StoreLocationMap from '../components/StoreLocationMap'
import ShoppingList from '../components/ShoppingList'

const PriceComparison = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [shoppingList, setShoppingList] = useState([])
    const [showChart, setShowChart] = useState(false)

    const filteredItems = stores.map((store) =>
        store.priceList.filter((product) => product.item.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    console.log(filteredItems)

    const handleItemSelection = (item) => {
        setSelectedItem(item)
        setShowChart(true)
    }

    const addItemToList = (item) => {
        setShoppingList([...shoppingList, item])
    }

    const removeItemFromList = (item) => {
        setShoppingList(shoppingList.filter((i) => i !== item))
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 space-y-8">

            <section className="bg-blue-600 text-white text-center py-20">
                <h1 className="text-3xl font-bold">Compare Grocery Prices Across Stores</h1>
                <p className="mt-4 text-lg">Find the best deals on your favorite grocery items near you!</p>
            </section>

            <SearchBar
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleItemSelection={handleItemSelection}
            />

            <section className="max-w-4xl mx-auto py-10">
                <h2 className="text-2xl font-semibold text-center mb-6">Grocery Items</h2>
                <div className="flex flex-col justify-center items-center">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <GroceryItem key={item.id} item={item} stores={stores} storePrices={storePrices} />
                        ))) : (
                        <p className="text-center text-gray-500">No items found</p>
                    )}
                </div>
            </section>

            {selectedItem && showChart && (
                <section className="max-w-4xl mx-auto py-10">
                    <h2 className="text-xl font-bold mb-4">Price Comparison Chart</h2>
                    <PriceComparisonChart item={selectedItem} stores={stores} storePrices={storePrices} />
                </section>
            )}


            <section className="max-w-4xl mx-auto py-10">
                <StoreLocationMap stores={stores} />
            </section>

            <section className="max-w-4xl mx-auto py-10">
                <h2 className="text-2xl font-semibold text-center mb-6">Your Shopping List</h2>
                <ShoppingList items={shoppingList} addItem={addItemToList} removeItem={removeItemFromList} />
            </section>


            <footer className="bg-blue-600 text-white text-center py-4">
                <p>© 2024 Grocery Price Compare. All rights reserved.</p>
                <p className="text-sm">Contact us: info@grocerycompare.com</p>
            </footer>

        </div>
    )
}

export default PriceComparison