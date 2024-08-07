import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import notFoundImg from '../../assets/img-not-available.jpg'

const RecipeList = () => {


    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                    params: {
                        apiKey: 'e4808152588444d98f305f78347d2d4c',
                        query: 'pasta',
                        number: 50,
                    }
                })
                setRecipes(response.data.results)
            } catch (error) {
                setError('Failed to fetch recipes')
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes()
    }, [])

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Recipe List</h1>
            <input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-3 mb-6 border border-gray-300 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <ul className="grid grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id} className="flex flex-col justify-between items-start bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">{recipe.title}</h2>
                        <div className="w-full">
                            <img src={recipe.image ? recipe.image : notFoundImg} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <p className="text-gray-700">{recipe.summary ? recipe.summary.substring(0, 100) : 'No summary available...'}</p>
                            <Link
                                to={`/recipe/${recipe.id}`}
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                    View Recipe
                                </button>

                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeList