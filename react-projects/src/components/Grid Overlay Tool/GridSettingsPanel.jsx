import React from 'react'

const GridSettingsPanel = ({ settings, setSettings }) => {
    const handleChange = (event) => {
        setSettings({ ...settings, [event.target.name]: Number(event.target.value) });
    }

    return (
        <div className="fixed top-6 left-6 z-50 backdrop-blur-md bg-white/80 shadow-lg rounded-xl p-5 w-64 space-y-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Grid Settings</h2>
            {['columns', 'rows', 'gutter'].map((key) => (
                <div key={key} className="flex flex-col">
                    <label className="text-sm text-gray-600 capitalize">{key}</label>
                    <input
                        type="number"
                        name={key}
                        value={settings[key]}
                        onChange={handleChange}
                        className="mt-1 px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            ))}
        </div>
    )
}

export default GridSettingsPanel