import React from 'react'

const VolunteerList = ({ volunteerHours }) => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Volunteer Hour List</h3>
            <ul>
                {volunteerHours && volunteerHours.map((entry, index) => (
                    <li key={index} className="flex justify-between p-2 border-b last:border-b-0">
                        <span>{entry.activity}</span>
                        <span className="font-semibold">{entry.hours}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VolunteerList