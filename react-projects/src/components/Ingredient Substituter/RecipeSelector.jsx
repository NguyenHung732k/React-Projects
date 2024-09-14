import React from 'react'
import { recipes } from './recipes'

const RecipeSelector = ({ onSelectRecipe }) => {
    return (
        <div className="p-6 mb-2 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Select a Recipe:</h2>
            <ul className="mt-4 space-y-2">
                {Object.keys(recipes).map((recipe) => (
                    <li
                        key={recipe}
                        onClick={() => onSelectRecipe(recipe)}
                        className="cursor-pointer text-blue-600 hover:underline"
                    >
                        {recipe}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeSelector