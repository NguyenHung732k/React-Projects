import React from 'react'
import LookbookItem from './LookbookItem'

const Lookbook = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {items.length > 0 ? (
                items.map((item, index) => <LookbookItem key={index} item={item} />)
            ) : (
                <p className="col-span-3 text-center text-gray-500">No items to display. Add some!</p>
            )}
        </div>
    )
}

export default Lookbook