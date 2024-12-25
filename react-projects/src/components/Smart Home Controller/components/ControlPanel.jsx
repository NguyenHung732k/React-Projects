import React from 'react'
import DeviceCard from './DeviceCard'

const ControlPanel = ({ devices, onControl }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device) => (
                <DeviceCard key={device.id} device={device} onControl={onControl} />
            ))}
        </div>
    )
}

export default ControlPanel