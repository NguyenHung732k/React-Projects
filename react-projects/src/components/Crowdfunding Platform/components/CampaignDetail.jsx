import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CampaignContext } from '../context/CampaignContext'

const CampaignDetail = () => {
    const { id } = useParams()
    const { campaigns } = useContext(CampaignContext)
    const campaign = campaigns.find(campaign => campaign.id === parseInt(id))

    if (!campaign) return <p>Campaign not found.</p>

    const goal = parseFloat(campaign.goal)
    const totalRaised = parseFloat(campaign.totalRaised || 0)
    const progress = (totalRaised / goal) * 100

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
            <p className="text-gray-700 mb-4">{campaign.description}</p>
            <h2 className="text-xl font-semibold mb-2">Funding Progress</h2>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            ${totalRaised}
                        </span>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                            Goal: ${goal}
                        </span>
                    </div>
                    <span className="text-xs font-semibold">{progress.toFixed(2)}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                    <div
                        className={`bg-blue-500 h-2 rounded-full`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Back this campaign
            </button>
        </div>
    )
}

export default CampaignDetail