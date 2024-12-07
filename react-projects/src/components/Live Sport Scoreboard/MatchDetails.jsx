import React from 'react'

const MatchDetails = ({ match }) => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-4 bg-white rounded-lg shadow-xl mb-6">
            <h2 className="text-2xl font-semibold mb-4">
                {match.homeTeam.name} vs {match.awayTeam.name}
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-medium text-lg">Score: {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
                    <p className="text-gray-600">Match Time: {match.utcDate}</p>
                </div>
                <div>
                    <p className="font-medium text-lg">Location: {match.venue}</p>
                </div>
            </div>
        </div>
    )
}

export default MatchDetails