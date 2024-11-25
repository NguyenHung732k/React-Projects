import React, { useState } from 'react'

const CardEditor = ({ onChange }) => {
    const [text, setText] = useState("")
    const [image, setImage] = useState(null)


    const handleTextChange = (event) => {
        setText(event.target.value)
        onChange({ text: event.target.value, image })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
                onChange({ text, image: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }


    return (
        <div className="space-y-6 p-6 w-full bg-white shadow-xl rounded-lg">
            <h2 className="text-xl font-semibold text-darkBlue">Customize Your Card</h2>
            <div className="space-y-4">
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your message"
                />
                <div>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    <span className="text-sm text-gray-500 mt-2 block">Upload a custom image (optional)</span>
                </div>
            </div>
        </div>
    )
}

export default CardEditor