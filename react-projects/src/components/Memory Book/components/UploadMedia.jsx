import { useDropzone } from 'react-dropzone'

const UploadMedia = ({ onUpload }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            onUpload(acceptedFiles)
        }
    })

    return (
        <div {...getRootProps()} className="border-4 border-dashed border-gray-400 rounded-lg p-6 text-center">
            <input {...getInputProps()} />
            <p className="text-gray-600">Drag & drop your media files here or click to select.</p>
            <p className="text-sm text-gray-400">Images, Videos, and Messages</p>
        </div>
    )
}

export default UploadMedia