import React, { useState } from 'react'
import Card from './Card'
import CardForm from './CardForm'
import QRCodeCard from './QRCodeCard'
import ShareButtons from './ShareButtons'

const BusinessCard = () => {
    const [userData, setUserData] = useState({
        name: '',
        jobTitle: '',
        phone: '',
        email: '',
        website: '',
        socialLinks: { twitter: '', linkedin: '', github: '' },
        backgroundImage: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData((prevData) => ({
                    ...prevData,
                    backgroundImage: reader.result,
                }))
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-xl max-w-xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Your Virtual Business Card
                </h1>
                <CardForm userData={userData} handleChange={handleChange} handleImageChange={handleImageChange} />
                <div className="mt-6">
                    <Card userData={userData} />
                    <QRCodeCard userData={userData} />
                    <ShareButtons userData={userData} />
                </div>
            </div>
        </div>
    )
}

export default BusinessCard 