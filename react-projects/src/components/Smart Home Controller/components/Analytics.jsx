import React from 'react'
import EnergyAnalytics from './EnergyAnalytics'

const Analytics = () => {
    const energyData = [
        { date: '2024-01-01', consumption: 10 },
        { date: '2024-01-02', consumption: 15 },
        { date: '2024-01-03', consumption: 8 },
        { date: '2024-01-04', consumption: 20 },
    ]

    return (
        <div className="space-y-4">
            <EnergyAnalytics data={energyData} />
        </div>
    )
}

export default Analytics