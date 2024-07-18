import React from 'react'

const Options = ({ options, selectedOption, onOptionChange, others, onInputChange }) => {
    return (
        <div className="flex flex-col justify-center items-start gap-2">
            {options.map((option, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center">
                    <input
                        type='radio'
                        name='option'
                        value={option}
                        id={option}
                        checked={selectedOption === option}
                        onChange={onOptionChange}
                        className='h-4 border-gray-300'
                    />
                    <label htmlFor={option} className='inline-block mx-2 my-2'>{option}</label>
                </div>
            ))}
        </div>
    )
}

export default Options

