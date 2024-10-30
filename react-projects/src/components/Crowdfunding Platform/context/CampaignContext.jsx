import React, { createContext, useState, useEffect } from 'react'

export const CampaignContext = createContext()

export const CampaignProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState(() => {
        const savedCampaigns = localStorage.getItem('campaigns')
        return savedCampaigns ? JSON.parse(savedCampaigns) : []
    })

    useEffect(() => {
        localStorage.setItem('campaigns', JSON.stringify(campaigns))
    }, [campaigns])

    const addCampaign = (campaign) => {
        setCampaigns((prev) => [...prev, { ...campaign, totalRaised: 0, id: Date.now() }])
    }

    return (
        <CampaignContext.Provider value={{ campaigns, addCampaign }}>
            {children}
        </CampaignContext.Provider>
    )
}