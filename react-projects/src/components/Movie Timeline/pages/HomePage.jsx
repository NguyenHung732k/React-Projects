import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Interactive Movie Timeline</h1>
                <Link to="/timeline">
                    <button className="bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                        Go to Movie Timeline
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage