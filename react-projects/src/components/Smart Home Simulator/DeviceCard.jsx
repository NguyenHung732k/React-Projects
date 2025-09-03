import React from "react";

const DeviceCard = ({ deviceName, status }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{deviceName}</h2>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className={`text-sm ${status ? "text-green-500" : "text-red-500"}`}>
                    {status ? "On" : "Off"}
                </p>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => { }}
                >
                    Toggle
                </button>
            </div>
        </div>
    )
}

export default DeviceCard