import { useState } from 'react'
import CarbonChart from './CarbonChart'

const CarbonCalculator = () => {
    const [transportation, setTransportation] = useState(0)
    const [energyUsage, setEnergyUsage] = useState(0)
    const [footprint, setFootprint] = useState(null)

    const calculateFootprint = () => {
        const totalFootprint = transportation * 0.5 + energyUsage * 0.3
        setFootprint(totalFootprint)
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Calculate Your Carbon Footprint</h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-700">Transportation (kg CO2 per week)</label>
                    <input
                        type="number"
                        value={transportation}
                        onChange={(event) => setTransportation(event.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-1/2"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-700">Energy Usage (kg CO2 per week)</label>
                    <input
                        type="number"
                        value={energyUsage}
                        onChange={(event) => setEnergyUsage(event.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-1/2"
                    />
                </div>
            </div>
            <button
                onClick={calculateFootprint}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:scale-105 transition duration-300"
            >
                Calculate
            </button>

            {footprint !== null && (
                <div className="text-center mt-4">
                    <p className="text-xl font-bold text-green-600">Your Carbon Footprint</p>
                    <p className="text-lg">{footprint.toFixed(2)} kg CO2</p>
                    <CarbonChart transportation={transportation} energyUsage={energyUsage} />
                </div>
            )}
        </div>
    )
}

export default CarbonCalculator