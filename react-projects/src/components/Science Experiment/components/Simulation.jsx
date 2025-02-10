import { useState } from 'react'
import { calculateKineticEnergy } from '../utils/physicsUtils'
import { calculatePH } from '../utils/chemistryUtils'
import { roundToDecimal } from '../utils/mathUtils'

const Simulation = () => {
    const [mass, setMass] = useState(50)
    const [velocity, setVelocity] = useState(10)
    const [hydrogenIonConcentration, setHydrogenIonConcentration] = useState(0.0001)

    const [kineticEnergy, setKineticEnergy] = useState(0)
    const [pH, setPH] = useState(0)

    const handleKineticEnergyCalculate = () => {
        const energy = calculateKineticEnergy(mass, velocity)
        setKineticEnergy(energy)
    }

    const handlePhCalculate = () => {
        const pHValue = calculatePH(hydrogenIonConcentration)
        setPH(pHValue)
    }

    return (
        <div className="p-8 bg-gray-800 text-white rounded-lg shadow-lg space-y-6">
            <div className="text-2xl font-semibold">Science Experiment Simulator</div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-lg">Mass (kg):</label>
                    <input
                        type="number"
                        value={mass}
                        onChange={(event) => setMass(event.target.value)}
                        className="bg-gray-700 text-white rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label className="text-lg">Velocity (m/s):</label>
                    <input
                        type="number"
                        value={velocity}
                        onChange={(event) => setVelocity(event.target.value)}
                        className="bg-gray-700 text-white rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <button
                onClick={handleKineticEnergyCalculate}
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
                Calculate Kinetic Energy
            </button>

            {kineticEnergy > 0 && (
                <div className="mt-6 bg-blue-600 text-center p-4 rounded-lg text-lg">
                    <p>Kinetic Energy: {roundToDecimal(kineticEnergy)} Joules</p>
                </div>
            )}

            <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center">
                    <label className="text-lg">H+ Ion Concentration (M):</label>
                    <input
                        type="number"
                        value={hydrogenIonConcentration}
                        onChange={(event) => setHydrogenIonConcentration(event.target.value)}
                        className="bg-gray-700 text-white rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <button
                onClick={handlePhCalculate}
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
                Calculate pH
            </button>

            {pH > 0 && (
                <div className="mt-6 bg-blue-600 text-center p-4 rounded-lg text-lg">
                    <p>pH: {roundToDecimal(pH)}</p>
                </div>
            )}
        </div>
    )
}

export default Simulation