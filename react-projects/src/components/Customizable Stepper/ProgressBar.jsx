const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full mt-4">
            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressBar