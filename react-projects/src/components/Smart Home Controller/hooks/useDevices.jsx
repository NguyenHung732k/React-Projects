import { useState } from 'react'

const useDevices = () => {
    const [devices, setDevices] = useState([
        { id: 1, name: 'Living Room Light', type: 'light', state: 'off' },
        { id: 2, name: 'Thermostat', type: 'thermostat', state: 'off', temperature: 72 },
        { id: 3, name: 'Security Camera', type: 'camera', state: 'on' },
    ])

    return [devices, setDevices]
}

export default useDevices