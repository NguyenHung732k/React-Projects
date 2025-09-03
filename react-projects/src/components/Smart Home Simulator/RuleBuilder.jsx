import React from "react";

const RuleBuilder = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-semibold">Automation Rules</h2>
            <form className="mt-4">
                <div className="flex flex-col space-y-4">
                    <label className="text-sm font-medium">Set Time:</label>
                    <input type="time" className="border px-4 py-2 rounded-lg" />

                    <label className="text-sm font-medium">Action:</label>
                    <select className="border px-4 py-2 rounded-lg">
                        <option>Turn off lights</option>
                        <option>Turn on AC</option>
                        <option>Lock door</option>
                    </select>

                    <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
                        Save Rule
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RuleBuilder