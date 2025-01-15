import React from 'react'

const Achievements = () => {
    const achievements = [
        { name: 'Beginner', pointsRequired: 500, unlocked: true },
        { name: 'Intermediate', pointsRequired: 1000, unlocked: false },
        { name: 'Pro', pointsRequired: 2000, unlocked: false },
    ]

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Achievements</h1>
            <div className="space-y-4">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-lg ${achievement.unlocked ? 'bg-green-200' : 'bg-gray-200'}`}
                    >
                        <h2 className="text-xl font-semibold">{achievement.name}</h2>
                        <p className="text-gray-500">Points Required: {achievement.pointsRequired}</p>
                        {achievement.unlocked ? (
                            <span className="text-green-600 font-semibold">Unlocked!</span>
                        ) : (
                            <span className="text-gray-600">Locked</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements