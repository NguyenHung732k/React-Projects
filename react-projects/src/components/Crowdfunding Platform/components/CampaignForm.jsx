import React, { useContext, useState } from 'react'
import { CampaignContext } from '../context/CampaignContext'

const CampaignForm = () => {
    const { addCampaign } = useContext(CampaignContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [goal, setGoal] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (title && description && goal) {
            addCampaign({ title, description, goal })
            setTitle('')
            setDescription('')
            setGoal('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Campaign Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="border p-2 w-full mb-3"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="border p-2 w-full mb-3"
            />
            <input
                type="number"
                placeholder="Funding Goal"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="border p-2 w-full mb-3"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Create Campaign
            </button>
        </form>
    )
}

export default CampaignForm