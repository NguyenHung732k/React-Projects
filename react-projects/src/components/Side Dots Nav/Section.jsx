import React from 'react'

const Section = ({ id, color, title }) => {
  return (
    <section
      id={id}
      className={`h-screen flex items-center justify-center text-white text-5xl font-extrabold tracking-wide ${color}`}
    >
      <div className="text-center space-y-4">
        <h2 className="uppercase drop-shadow-lg">{title}</h2>
        <p className="text-xl font-light text-gray-200">
          {`Welcome to the ${title} section`}
        </p>
      </div>
    </section>
  )
}

export default Section