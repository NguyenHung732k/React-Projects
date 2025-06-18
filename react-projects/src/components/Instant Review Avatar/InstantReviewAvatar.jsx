import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const InstantReviewAvatar = () => {
    const [preview, setPreview] = useState(null)

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0]
        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setPreview(previewUrl)
        }
    }, [])

    const resetPreview = () => {
        setPreview(null)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
    })

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <div className="text-center space-y-5">
                <div
                    {...getRootProps()}
                    className={`relative w-40 h-40 mx-auto rounded-full border-4 border-dashed flex items-center justify-center transition duration-300 cursor-pointer overflow-hidden 
            ${isDragActive ? 'border-blue-500 shadow-xl shadow-blue-300/50' : 'border-gray-300'} 
            hover:shadow-lg hover:shadow-blue-400/40 group`}
                >
                    <input {...getInputProps()} />

                    {preview ? (
                        <img
                            src={preview}
                            alt="Avatar Preview"
                            className="w-full h-full object-cover rounded-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex flex-col items-center text-gray-400">
                            <p className="text-sm">Click or drag image</p>
                        </div>
                    )}

                    {preview && (
                        <button
                            onClick={resetPreview}
                            className="absolute top-0 right-0 m-1 bg-white text-gray-600 hover:text-red-500 rounded-full p-1 shadow-md transition"
                            title="Remove image"
                        >
                            X
                        </button>
                    )}
                </div>

                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                    Upload a square image (e.g., 400x400) for best results. JPG or PNG preferred.
                </p>
            </div>
        </div>
    )
}

export default InstantReviewAvatar