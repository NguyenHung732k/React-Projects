import React, { useState } from 'react'

const lengthUnits = ['meters', 'kilometers', 'miles']
const temperatureUnits = ['celsius', 'fahrenheit', 'kelvin']

const UnitConverter = () => {
    const [fromUnit, setFromUnit] = useState('meters')
    const [toUnit, setToUnit] = useState('kilometers')
    const [value, setValue] = useState('')
    const [result, setResult] = useState(null);
    const [unitType, setUnitType] = useState('length')

    const handleConvert = () => {
        if (value === '') {
            alert('Please enter a value')
            return
        }

        let convertedValue
        if (unitType === 'length') {
            convertedValue = convertLength(value, fromUnit, toUnit)
        } else if (unitType === 'temperature') {
            convertedValue = convertTemperature(value, fromUnit, toUnit)
        }
        setResult(convertedValue)
    }

    const convertLength = (value, fromUnit, toUnit) => {
        const conversions = {
            meters: 1,
            kilometers: 1000,
            miles: 1609.34
        }
        const meters = value * conversions[fromUnit]
        return meters / conversions[toUnit]
    };

    const convertTemperature = (value, fromUnit, toUnit) => {
        let celsius
        if (fromUnit === 'fahrenheit') {
            celsius = (value - 32) * 5 / 9
        } else if (fromUnit === 'kelvin') {
            celsius = value - 273.15
        } else {
            celsius = value
        }

        if (toUnit === 'fahrenheit') {
            return (celsius * 9 / 5) + 32
        } else if (toUnit === 'kelvin') {
            return celsius + 273.15
        } else {
            return celsius
        }
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Unit Converter</h1>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Type</label>
                <select
                    value={unitType}
                    onChange={(event) => setUnitType(event.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="length">Length</option>
                    <option value="temperature">Temperature</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">From Unit</label>
                <select
                    value={fromUnit}
                    onChange={(event) => setFromUnit(event.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {(unitType === 'length' ? lengthUnits : temperatureUnits).map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">To Unit</label>
                <select
                    value={toUnit}
                    onChange={(event) => setToUnit(event.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {(unitType === 'length' ? lengthUnits : temperatureUnits).map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Value</label>
                <input
                    type="number"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter value"
                />
            </div>

            <button
                onClick={handleConvert}
                className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Convert
            </button>

            {result !== null && (
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-semibold">Result</h2>
                    <p className="text-xl mt-2">{result.toFixed(5)} {toUnit}</p>
                </div>
            )}
        </div>
    )
}

export default UnitConverter