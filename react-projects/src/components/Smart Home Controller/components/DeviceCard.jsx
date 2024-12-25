import React from 'react'

const DeviceCard = ({ device, onControl }) => {
    return (
        <div className={`flex flex-col justify-between bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out ${device.state === 'on' ? 'border-4 border-green-500' : 'border-4 border-gray-300'}`}>
            <div className="flex flex-col justify-between items-center mt-4">
                <h3 className="text-xl font-semibold mb-2">{device.name}</h3>
                <p className="text-gray-600">{device.type}</p>
                {device.type === 'thermostat' && (
                    <p className="text-gray-600">Temperature: {device.temperature}°F</p>
                )}
            </div>
            <div className="w-full flex justify-between items-center mt-4">
                <span className={`text-sm font-semibold ${device.state === 'on' ? 'text-green-500' : 'text-red-500'}`}>
                    {device.state === 'on' ? 'On' : 'Off'}
                </span>
                <button
                    onClick={() => onControl(device.id)}
                    className={`px-4 py-2 rounded-lg text-white ${device.state === 'on' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {device.state === 'on' ? 'Turn Off' : 'Turn On'}
                </button>
            </div>
        </div>
    )
}

export default DeviceCard