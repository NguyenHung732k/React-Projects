import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, deleteTour }) => {
    return (
        <section className="w-4/6 flex flex-col justify-center items-center mx-auto">
            <div className="text-center my-16">
                <h2>Our Tours</h2>
                <div className="w-96 h-1 m-auto"></div>
            </div>

            <div>
                {tours && tours.length > 0 && tours.map(tour => (
                    <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
                ))}
            </div>
        </section>
    )
}

export default Tours