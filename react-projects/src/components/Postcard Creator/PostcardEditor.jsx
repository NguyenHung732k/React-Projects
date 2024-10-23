import React, { useState } from 'react'
import TextInput from './TextInput'
import ImageUploader from './ImageUploader'
import FontSelector from './FontSelector'
import ColorPicker from './ColorPicker'
import TextSizeSlider from './TextSizeSlider'

const PostcardEditor = () => {
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const [selectedFont, setSelectedFont] = useState('Arial')
    const [textColor, setTextColor] = useState('#000000')
    const [textSize, setTextSize] = useState(24)


    return (
        <div className="w-4/6 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create Your Digital Postcard</h2>
            <div className="border-2 border-gray-300 w-1/2 h-auto min-h-72 flex justify-center items-center relative bg-gray-50 rounded-lg shadow">
                {image && (
                    <img src={URL.createObjectURL(image)} alt="Postcard" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                )}
                <h1
                    className="absolute text-center"
                    style={{
                        fontFamily: selectedFont,
                        color: textColor,
                        fontSize: `${textSize}px`,
                    }}
                >
                    {text}
                </h1>
            </div>
            <TextInput text={text} setText={setText} />
            <div className="w-full flex justify-evenly items-center my-4">
                <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
                <ColorPicker color={textColor} setColor={setTextColor} />
                <TextSizeSlider textSize={textSize} setTextSize={setTextSize} />
            </div>
            <ImageUploader setImage={setImage} />
        </div>
    )
}

export default PostcardEditor