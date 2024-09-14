import React, { useState } from 'react'
import IngredientInput from './IngredientInput'
import SubstitutionSuggestions from './SubstitutionSuggestions'
import RecipeSelector from './RecipeSelector'

import { recipes } from './recipes'


const IngredientSubstituter = () => {

    const [ingredients, setIngredients] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)


    const handleAddIngredient = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient])
    }

    const handleSelectRecipe = (recipe) => {
        setIngredients(recipes[recipe])
        setSelectedRecipe(recipe)
    }


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold my-6">Ingredient Substituter</h1>
            <div className="max-w-4xl w-full p-4">
                <RecipeSelector onSelectRecipe={handleSelectRecipe} />
                <IngredientInput onAddIngredient={handleAddIngredient} />
                <div className="mt-6 space-y-4">
                    {ingredients.map((ingredient, index) => (
                        <SubstitutionSuggestions key={index} ingredient={ingredient} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IngredientSubstituter