import React, { useState } from "react";
import DeviceCard from "./DeviceCard"
import EnergyChart from "./EnergyChart"
import RuleBuilder from "./RuleBuilder"

const Dashboard = () => {
    const [activeRoom, setActiveRoom] = useState("Living Room")

    return (
        <div className="flex-1 p-6">
            <div className="flex items-center space-x-4">
                {["Living Room", "Kitchen", "Bedroom"].map((room) => (
                    <button
                        key={room}
                        onClick={() => setActiveRoom(room)}
                        className="text-xl text-blue-500 hover:text-blue-700"
                    >
                        {room}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <DeviceCard deviceName="Light" status={true} />
                <DeviceCard deviceName="Lock" status={false} />
                <DeviceCard deviceName="AC" status={true} />
            </div>

            <EnergyChart />
            <RuleBuilder />
        </div>
    )
}

export default Dashboard