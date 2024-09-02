import React, { useState } from 'react'

const Square = ({ value, onSquareClick }) => {
    return (
        <div className="w-44 h-44 flex justify-center items-center border-4 rounded-xl cursor-pointer" onClick={onSquareClick}>
        </div>
    )
}

export default Square