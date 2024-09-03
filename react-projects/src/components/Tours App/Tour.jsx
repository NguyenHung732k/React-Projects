import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, deleteTour }) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <article className="border my-8 mx-0 p-4 shadow-md transition hover:shadow-lg">
            <img className="w-full h-full object-cover rounded-tr rounded-tl" src={image} alt={name} />
            <footer>
                <div className="flex justify-between items-center my-6">
                    <h4 className="mb-0">{name}</h4>
                    <h4 className="rounded py-1 px-2 mb-0">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="bg-transparent border-transparent text-base pl-1 text-sky-700" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : '  read more'}
                    </button>
                </p>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                    onClick={() => deleteTour(id)}
                >
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default Tour