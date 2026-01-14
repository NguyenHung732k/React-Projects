import React, { useState } from 'react'

const BMICalculator = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
            setCategory('Underweight');
        } else if (bmiValue < 24.9) {
            setCategory('Normal weight');
        } else if (bmiValue < 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obesity');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Height (cm)</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    onClick={calculateBMI}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                    Calculate BMI
                </button>
                {bmi && (
                    <div className="mt-4 text-center">
                        <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                        <p className="text-md mt-1 text-gray-600">Category: {category}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BMICalculator