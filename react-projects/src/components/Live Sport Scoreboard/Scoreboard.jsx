import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.FOOTBALL_API_KEY

const Scoreboard = ({ selectedSport }) => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (selectedSport) {
            fetchScores(selectedSport)
        }
    }, [selectedSport])

    const fetchScores = async (sport) => {
        setLoading(true)
        try {
            const response = await axios.get('https://api.football-data.org/v4/matches', {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            setMatches(response.data.matches)
        } catch (error) {
            console.error('Error fetching live scores:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-6">
            <h2 className="text-2xl font-semibold mb-4">{selectedSport} Live Matches</h2>
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
                </div>
            ) : (
                <div className="space-y-6">
                    {matches.length === 0 ? (
                        <p>No live matches available at the moment.</p>
                    ) : (
                        matches.map((match) => (
                            <div key={match.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={match.homeTeam.crestUrl}
                                        alt={match.homeTeam.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="text-lg font-medium">{match.homeTeam.name}</span>
                                </div>
                                <div className="text-xl font-semibold">
                                    {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={match.awayTeam.crestUrl}
                                        alt={match.awayTeam.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="text-lg font-medium">{match.awayTeam.name}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default Scoreboard