import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.length > 0 ? (
                items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))
            ) : (
                <p className="text-center text-gray-700">No items found</p>
            )}
        </div>
    )
}

export default ItemList