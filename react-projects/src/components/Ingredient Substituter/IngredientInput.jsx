import React, { useState } from 'react'

const IngredientInput = ({ onAddIngredient }) => {

    const [ingredient, setIngredient] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()

        if (ingredient.trim()) {
            onAddIngredient(ingredient.trim())
            setIngredient("")
        }
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={ingredient}
                    onChange={(event) => setIngredient(event.target.value)}
                    placeholder="Enter ingredient"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
                >
                    Add Ingredient
                </button>
            </form>
        </div>
    )
}

export default IngredientInput