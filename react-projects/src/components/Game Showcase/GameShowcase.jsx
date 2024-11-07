import React, { useState, useEffect } from 'react'
import GameList from './GameList'
import SearchBar from './SearchBar'
import EmptyState from './EmptyState'
import { gamesData } from './data/gamesData'

const GameShowcase = () => {
    const [games, setGames] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [ratingFilter, setRatingFilter] = useState(null)

    const genres = ['Action', 'Adventure', 'Puzzle', 'RPG', 'Strategy']

    const fetchGames = async () => {
        setLoading(true)
        const filteredGames = gamesData
            .filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .filter((game) => (selectedGenre ? game.genre === selectedGenre : true))
            .filter((game) => (ratingFilter ? game.rating >= ratingFilter : true))

        const newGames = filteredGames.slice((page - 1) * 6, page * 6)
        setGames((prev) => [...prev, ...newGames])
        setLoading(false);
        if (newGames.length < 6) setHasMore(false)
    }

    useEffect(() => {
        setGames([])
        setPage(1)
        setHasMore(true)
        fetchGames()
    }, [searchQuery, selectedGenre, ratingFilter])

    const fetchMoreGames = () => {
        if (!loading && hasMore) {
            setPage(page + 1)
            fetchGames()
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-center mt-20">Indie Game Showcase</h1>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                genres={genres}
                setSelectedGenre={setSelectedGenre}
                setRatingFilter={setRatingFilter}
            />
            {games.length === 0 ? (
                <EmptyState message="No games found. Try different filters!" />
            ) : (
                <GameList games={games} fetchMoreGames={fetchMoreGames} hasMore={hasMore} loading={loading} />
            )}
        </div>
    )
}

export default GameShowcase