import React from 'react'

const CraftCard = ({ craft, isGallery, saveCraft }) => {
    return (
        <div className="card w-96 mx-auto bg-white shadow-lg rounded-lg transform transition duration-200 hover:scale-105 hover:shadow-2xl">
            <figure>
                <img
                    src={URL.createObjectURL(craft.image)}
                    alt={craft.title}
                    className="object-cover w-full h-48 rounded-t-lg"
                />
            </figure>
            <div className="card-body p-6">
                <h3 className="text-xl font-semibold">{craft.title}</h3>
                <p className="mt-2 text-gray-700">{craft.instructions}</p>
                <div className="mt-4 text-sm text-gray-500">{craft.difficulty}</div>

                {!isGallery && (
                    <button
                        onClick={() => saveCraft(craft)}
                        className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
                    >
                        Save to Gallery
                    </button>
                )}
            </div>
        </div>
    )
}

export default CraftCard