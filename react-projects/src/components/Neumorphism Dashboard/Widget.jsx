import React from 'react'

const Widget = ({ title, value }) => {
    return (
        <div className="p-6 bg-gray-100 rounded-3xl shadow-neumorphism transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-medium ">{title}</h3>
                    <p className="text-lg">{value}</p>
                </div>
                <div className="bg-gray-200 rounded-full p-3 shadow-inner">
                    <i className="fas fa-cogs"></i>
                </div>
            </div>
        </div>
    )
}

export default Widget