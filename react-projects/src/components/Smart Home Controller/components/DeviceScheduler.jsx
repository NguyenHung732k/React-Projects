import React, { useState } from 'react'

const DeviceScheduler = ({ devices }) => {
    const [selectedDevice, setSelectedDevice] = useState(devices[0].id)
    const [scheduleTime, setScheduleTime] = useState('')

    const handleSchedule = () => {
        alert(`Scheduled ${devices.find(device => device.id === selectedDevice).name} at ${scheduleTime}`)
    }

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Set Device Schedule</h3>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div>
                    <label className="block text-sm font-semibold">Device</label>
                    <select
                        className="w-full mt-2 p-2 border rounded-md"
                        value={selectedDevice}
                        onChange={(event) => setSelectedDevice(event.target.value)}
                    >
                        {devices.map(device => (
                            <option key={device.id} value={device.id}>{device.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold">Set Time</label>
                    <input
                        type="time"
                        className="w-full mt-2 p-2 border rounded-md"
                        value={scheduleTime}
                        onChange={(event) => setScheduleTime(event.target.value)}
                    />
                </div>

                <button
                    onClick={handleSchedule}
                    className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600"
                >
                    Set Schedule
                </button>
            </div>
        </div>
    )
}

export default DeviceScheduler