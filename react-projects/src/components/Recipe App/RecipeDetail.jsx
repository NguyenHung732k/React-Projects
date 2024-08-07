import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'




const RecipeDetail = () => {

    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchRecipe = async () => {

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                    params: {
                        apiKey: 'e4808152588444d98f305f78347d2d4c',
                    },
                })

                setRecipe(response.data)
            } catch (error) {
                setError('Failed to fetch recipe')
            } finally {
                setLoading(false)
            }
        }


        fetchRecipe()
    }, [id])

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;


    return (
        <div className="max-w-4xl mx-auto p-6">
            {recipe ? (
                <>
                    <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover rounded-lg mb-6" />
                    <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
                                recipe.extendedIngredients.map(ingredient => (
                                    <li key={ingredient.id} className="text-xl text-gray-700">{ingredient.original}</li>
                                ))
                            ) : (
                                <li className="text-xl text-gray-700">No ingredients available.</li>
                            )}
                        </ul>
                    </div>
                </>
            ) : (
                <p className="text-gray-500">No recipe details available.</p>
            )}
        </div>
    )
}

export default RecipeDetail