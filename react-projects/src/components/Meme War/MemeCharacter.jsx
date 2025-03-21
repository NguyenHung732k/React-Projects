import React from 'react'

const MemeCharacter = ({ meme, onAttack, isAttacking }) => {
    return (
        <div
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-transform transform hover:scale-110 ${isAttacking ? 'animate-pulse' : ''}`}
            onClick={onAttack}
        >
            <img
                src={meme.image}
                alt={meme.name}
                className={`w-48 h-48 object-cover rounded-full transition-all transform ${isAttacking ? 'animate-bounce' : ''}`}
            />
            <div className="mt-4 text-xl font-bold text-center">{meme.name}</div>
        </div>
    )
}

export default MemeCharacter