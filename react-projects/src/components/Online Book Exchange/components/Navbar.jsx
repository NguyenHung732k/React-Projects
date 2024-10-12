import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Book Exchange</h1>
            <ul className="flex space-x-6 p-0 m-0">
                <li><Link className="text-white hover:underline" to="/">Home</Link></li>
                <li><Link className="text-white hover:underline" to="/my-books">My Books</Link></li>
                <li><Link className="text-white hover:underline" to="/exchange">Exchange</Link></li>
            </ul>
        </div>
    </nav>
)

export default Navbar