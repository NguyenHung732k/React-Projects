import React from 'react'

const DonationList = ({ donations }) => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Donation List</h3>
            <ul>
                {donations && donations.map((donation, index) => (
                    <li key={index} className="flex justify-between p-2 border-b last:border-b-0">
                        <span>{donation.cause}</span>
                        <span className="font-semibold">${donation.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DonationList