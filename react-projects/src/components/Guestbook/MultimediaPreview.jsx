import React from 'react'

const MultimediaPreview = ({ file }) => {
    const fileType = file.type.split('/')[0]

    return (
        <div className="mt-2">
            {fileType === 'image' ? (
                <img src={URL.createObjectURL(file)} alt="Uploaded" className="w-full h-auto rounded-md shadow-lg border border-gray-300" />
            ) : fileType === 'video' ? (
                <video controls className="w-full h-auto rounded-md shadow-lg border border-gray-300">
                    <source src={URL.createObjectURL(file)} />
                    Your browser does not support the video tag.
                </video>
            ) : null}
        </div>
    )
}

export default MultimediaPreview