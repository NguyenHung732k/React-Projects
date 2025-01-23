import React from 'react'

const OutfitSuggestions = ({ weatherData, clothes }) => {
    const { temp, condition, icon } = weatherData

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-4">
            <h3 className="text-2xl font-semibold">Today's Outfit</h3>
            <div className="flex items-center">
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={condition} className="w-12 h-12" />
                <p className="text-xl ml-4">{`Weather: ${condition}, ${temp}°C`}</p>
            </div>
            <div>
                <h4 className="text-lg font-medium">Suggested Outfit:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {clothes.map(item => (
                        <div key={item.id} className="p-4 bg-gray-100 rounded-lg">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-2 text-center">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OutfitSuggestions