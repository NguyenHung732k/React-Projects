import React, { useState } from 'react'
import DonationForm from './components/DonationForm'
import DonationList from './components/DonationList'
import VolunteerForm from './components/VolunteerForm'
import VolunteerList from './components/VolunteerList'
import { ToastContainer } from 'react-toastify'

const DonationTracker = () => {

    const [donations, setDonations] = useState([])
    const [volunteerHours, setVolunteerHours] = useState([])

    const handleAddDonation = (donation) => {
        setDonations([...donations, donation])
    }

    const handleAddVolunteerHours = (entry) => {
        setVolunteerHours([...volunteerHours, entry])
    }


    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Charity Donation Tracker</h1>
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-between items-center">
                    <DonationForm onAdd={handleAddDonation} />
                    <DonationList donations={donations} />
                </div>
                
                <div className="flex flex-col justify-between items-center">
                    <VolunteerForm onAdd={handleAddVolunteerHours} />
                    <VolunteerList volunteerHours={volunteerHours} />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default DonationTracker