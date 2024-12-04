import React from 'react'

const CardForm = ({ userData, handleChange, handleImageChange }) => {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={userData.jobTitle}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Software Engineer"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="(123) 456-7890"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="johndoe@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                    type="text"
                    name="website"
                    value={userData.website}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://www.johndoe.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Links</label>
                <input
                    type="text"
                    name="twitter"
                    placeholder="Twitter"
                    value={userData.twitter}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn"
                    value={userData.linkedin}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
                />
                <input
                    type="text"
                    name="github"
                    placeholder="GitHub"
                    value={userData.github}
                    onChange={handleChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="input input-bordered w-full p-3 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
        </div>
    )
}

export default CardForm