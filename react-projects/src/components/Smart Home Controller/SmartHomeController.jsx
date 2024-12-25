import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import Analytics from './components/Analytics'
import Notifications from './components/Notifications'
import DeviceScheduler from './components/DeviceScheduler'
import useDevices from './hooks/useDevices'

const SmartHomeController = () => {
    const [devices, setDevices] = useDevices()
    const [notifications, setNotifications] = useState([])

    setInterval(() => {
        setNotifications((prev) => [
            ...prev,
            { id: Date.now(), message: 'Motion detected in the living room!' },
        ])
    }, 30 * 60 * 1000)

    const handleControl = (id) => {
        setDevices((prevDevices) =>
            prevDevices.map((device) =>
                device.id === id
                    ? { ...device, state: device.state === 'on' ? 'off' : 'on' }
                    : device
            )
        )
    }

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="max-w-7xl mx-auto p-6">
                    <Routes>
                        <Route
                            path="/"
                            element={<ControlPanel devices={devices} onControl={handleControl} />}
                        />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/notifications" element={<Notifications notifications={notifications} />} />
                        <Route path="/scheduler" element={<DeviceScheduler devices={devices} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default SmartHomeController