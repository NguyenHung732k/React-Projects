import React, { useEffect, useState } from 'react'
import './StarRatingStyles.css'

import { FaStar } from "react-icons/fa";

const StarRating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const noOfStars = 5


    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }



    return (
        <div className="star-container">

            <div className="star-card">
                <div className="star-rating">
                    {[...Array(noOfStars)].map((_, index) => {
                        index += 1;

                        return (
                            <FaStar
                                key={index}
                                className={index <= (hover || rating) ? "star-active" : "star-inactive"}
                                onClick={() => handleClick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={50}
                            />
                        )
                    })}
                </div>

                <button
                    onClick={() => setRating(0)}
                    className="button-star-rating">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StarRating