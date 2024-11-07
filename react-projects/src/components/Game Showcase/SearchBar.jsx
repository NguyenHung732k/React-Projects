import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery, genres, setSelectedGenre, setRatingFilter }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-md p-4 mb-6 mx-4 sm:mx-0">
            <input
                type="text"
                className="p-3 border-2 border-gray-300 rounded-md w-full sm:w-1/3"
                placeholder="Search for a game..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <select
                    className="p-2 border-2 border-gray-300 rounded-md"
                    onChange={(event) => setSelectedGenre(event.target.value)}
                    defaultValue=""
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                <select
                    className="p-2 border-2 border-gray-300 rounded-md"
                    onChange={(event) => setRatingFilter(Number(event.target.value))}
                    defaultValue=""
                >
                    <option value="">All Ratings</option>
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <option key={rating} value={rating}>
                            {rating} Stars & Up
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SearchBar