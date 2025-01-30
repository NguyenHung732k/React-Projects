import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 sticky top-0 z-50">
            <div className="flex justify-between items-center container mx-auto">
                <Link to="/" className="text-3xl font-bold text-white hover:text-gray-300 text-decoration-none">
                    Event Memory Book
                </Link>
                <nav className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/create-memory" className="text-white hover:text-gray-300 text-decoration-none">
                        Create Memory
                    </Link>
                    <Link to="/timeline" className="text-white hover:text-gray-300 text-decoration-none">
                        Timeline
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header