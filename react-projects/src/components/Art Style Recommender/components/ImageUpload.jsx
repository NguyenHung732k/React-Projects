import { useDropzone } from "react-dropzone"

const ImageUpload = ({ onImageUpload, isUploading }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0]
            onImageUpload(file)
        },
    })

    return (
        <div className="flex justify-center mt-8">
            <div
                {...getRootProps()}
                className={`border-4 ${isUploading ? 'border-gray-400' : 'border-blue-500'} 
                    p-12 rounded-xl text-center cursor-pointer hover:border-blue-700 transition-all duration-300 
                    ${isUploading && 'bg-gray-200'}`}
            >
                <input {...getInputProps()} />
                {isUploading ? (
                    <p className="text-xl text-gray-600">Analyzing your image...</p>
                ) : (
                    <p className="text-xl text-gray-600">Drag & drop an image, or click to select one</p>
                )}
            </div>
        </div>
    )
}

export default ImageUpload