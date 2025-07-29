import React, { useState, useEffect } from "react";

const CheckboxCluster = () => {
    const [checkedValues, setCheckedValues] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target
        setCheckedValues((prev) =>
            checked ? [...prev, value] : prev.filter((val) => val !== value)
        )
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-10 bg-white rounded-xl shadow-lg w-96 space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Select Your Options
                </h2>
                <div className="space-y-6">
                    {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((label, index) => (
                        <div
                            key={label}
                            className={`transform transition-all duration-500 ${visible
                                ? `opacity-100 scale-100 delay-[${index * 150}ms]`
                                : 'opacity-0 scale-75'
                                }`}
                        >
                            <label className="flex items-center space-x-3 cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-200 ease-in-out">
                                <input
                                    type="checkbox"
                                    value={label}
                                    onChange={handleCheckboxChange}
                                    checked={checkedValues.includes(label)}
                                    className={`w-6 h-6 accent-blue-500 rounded-md border-2 ${checkedValues.includes(label)
                                        ? 'border-blue-500 bg-blue-100'
                                        : 'border-gray-300'
                                        } focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
                                />
                                <span className="text-lg font-medium text-gray-700">{label}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckboxCluster