import React from 'react'

const Card = ({ userData }) => {
    return (
        <div className=" w-[525px] h-[300px] bg-white shadow-xl rounded-xl p-6 my-8 mx-auto relative">
            {userData.backgroundImage && (
                <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                        backgroundImage: userData.backgroundImage ? `url(${userData.backgroundImage})` : '',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '250px',
                        filter: 'blur(4px)'
                    }}
                ></div>
            )}

            <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-white">{userData.name}</h2>
                <p className="text-gray-200 text-sm mb-4">{userData.jobTitle}</p>
                <p className="text-gray-200 mb-2">{userData.phone}</p>
                <p className="text-gray-200 mb-2">{userData.email}</p>
                <p className="text-gray-200 mb-4">{userData.website}</p>

                <div className="flex space-x-4">
                    {userData.socialLinks.twitter && (
                        <a
                            href={userData.socialLinks.twitter}
                            className="text-blue-500 hover:text-blue-700 transition duration-200"
                        >
                            Twitter
                        </a>
                    )}
                    {userData.socialLinks.linkedin && (
                        <a
                            href={userData.socialLinks.linkedin}
                            className="text-blue-700 hover:text-blue-900 transition duration-200"
                        >
                            LinkedIn
                        </a>
                    )}
                    {userData.socialLinks.github && (
                        <a
                            href={userData.socialLinks.github}
                            className="text-gray-800 hover:text-gray-900 transition duration-200"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card