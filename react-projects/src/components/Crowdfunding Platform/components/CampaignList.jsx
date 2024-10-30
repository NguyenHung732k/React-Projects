import React, { useContext } from 'react'
import { CampaignContext } from '../context/CampaignContext'
import { Link } from 'react-router-dom'

const CampaignList = () => {
    const { campaigns } = useContext(CampaignContext)

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Active Campaigns</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {campaigns.map((campaign) => (
                    <li key={campaign.id} className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-semibold">{campaign.title}</h3>
                        <p className="text-gray-700">{campaign.description}</p>
                        <p className="text-gray-600">Goal: ${campaign.goal}</p>
                        <Link to={`/campaign/${campaign.id}`} className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-decoration-none">
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CampaignList