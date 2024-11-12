import React from 'react'

const TimeCapsule = ({ capsule }) => {
    const { message, unlockDate, media } = capsule
    const currentDate = new Date()
    const unlockDateTime = new Date(unlockDate)
    const isUnlocked = currentDate >= unlockDateTime
    const remainingTime = unlockDateTime - currentDate

    const formatRemainingTime = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        return `${days} days, ${hours} hours, ${minutes} minutes`
    }

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600">{new Date(unlockDate).toLocaleDateString()}</h3>
            <p className="mt-4 text-gray-700">{isUnlocked ? message : `This capsule will unlock in ${formatRemainingTime(remainingTime)}`}</p>

            {isUnlocked && media && (
                <div className="mt-4">
                    {media.type.startsWith('image') ? (
                        <img src={URL.createObjectURL(media)} alt="Media" className="mt-2 rounded-xl shadow-lg w-full h-48 object-cover" />
                    ) : (
                        <video className="mt-2 rounded-xl w-full h-48 object-cover" controls>
                            <source src={URL.createObjectURL(media)} type={media.type} />
                        </video>
                    )}
                </div>
            )}
        </div>
    )
}

export default TimeCapsule