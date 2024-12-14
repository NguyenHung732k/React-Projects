import React, { useRef } from "react"
import Webcam from "react-webcam"

const CameraCapture = ({ onCapture }) => {
    const webcamRef = useRef(null)

    const captureImage = () => {
        const imageSrc = webcamRef.current.getScreenshot()
        onCapture(imageSrc)
    }

    return (
        <div className="relative w-full h-screen bg-gray-800">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                videoConstraints={{ facingMode: "environment" }}
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    onClick={captureImage}
                    className="bg-blue-600 text-white rounded-full p-5 shadow-lg transition-transform transform hover:scale-110"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CameraCapture