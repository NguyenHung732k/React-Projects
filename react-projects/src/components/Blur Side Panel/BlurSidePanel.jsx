import React, { useState } from 'react';
import SidePanel from './SidePanel'

const BlurSidePanel = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <button
                onClick={() => setOpen(true)}
                className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
                Open Side Panel
            </button>

            <SidePanel isOpen={open} onClose={() => setOpen(false)}>
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <div className="space-y-4 text-gray-700">
                    <p>Customize your preferences here.</p>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                        <span>Enable notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                        <span>Dark mode</span>
                    </label>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                    >
                        Save & Close
                    </button>
                </div>
            </SidePanel>
        </div>
    )
}

export default BlurSidePanel