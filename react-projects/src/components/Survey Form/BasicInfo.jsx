import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BasicInfo = ({ addBasicInfo }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name || !email || !contact) {
            alert("Please Input All Field")
        } else {
            addBasicInfo(name, email, contact)
            navigate('/questions')
        }
    }

    return (
        <form
            className="w-screen h-screen flex justify-center items-center"
            onSubmit={handleSubmit}
        >
            <div className="w-[600px] h-[500px] flex flex-col justify-evenly items-center p-4 border border-solid border-gray rounded-lg bg-white/45 backdrop-blur-xl">
                <h2>Basic Info</h2>
                <div className="w-full">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        onChange={(event) => { setName(event.target.value) }}
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Name"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input
                        onChange={(event) => { setEmail(event.target.value) }}
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="name@email.com"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input
                        onChange={(event) => { setContact(event.target.value) }}
                        type="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Next</button>
            </div>
        </form>
    )
}

export default BasicInfo