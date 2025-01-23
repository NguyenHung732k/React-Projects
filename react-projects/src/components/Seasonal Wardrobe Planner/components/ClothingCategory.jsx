import React from 'react'

const ClothingCategory = ({ clothes, season, handleAddToTravelList }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{season}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {clothes.filter(item => item.season === season).map(item => (
                    <div key={item.id} className="group relative p-4 bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg group-hover:opacity-75" />
                        <div className="mt-2 text-center">
                            <p className="text-lg font-medium">{item.name}</p>
                            <button
                                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition"
                                onClick={() => handleAddToTravelList(item)}
                            >
                                Add to Travel List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClothingCategory