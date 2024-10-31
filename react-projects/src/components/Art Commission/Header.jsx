import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Art Commission Marketplace</h1>
                <nav>
                    <ul className="flex space-x-6 m-0">
                        <li><Link to="/" className="hover:text-blue-400 text-decoration-none">Home</Link></li>
                        <li><Link to="/artists" className="hover:text-blue-400 text-decoration-none">Artists</Link></li>
                        <li><Link to="/dashboard" className="hover:text-blue-400 text-decoration-none">Dashboard</Link></li>
                        <li><Link to="/login" className="hover:text-blue-400 text-decoration-none">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header