import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const Breadcrumb = () => {
    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = useState([])

    useEffect(() => {
        const pathnames = location.pathname.split('/').filter((x) => x)
        const breadcrumbPaths = pathnames.map((_, index) => {
            return {
                name: pathnames[index],
                path: `/${pathnames.slice(0, index + 1).join('/')}`,
            }
        })

        setBreadcrumbItems(breadcrumbPaths)
    }, [location])

    return (
        <nav aria-label="breadcrumb" className="bg-gray-100 py-3 px-4 rounded-md shadow-md">
            <ul className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                <li className="flex items-center">
                    <Link
                        to="/"
                        className="flex items-center text-blue-600 text-decoration-none hover:text-blue-800 transition-colors duration-300 ease-in-out"
                    >
                        <FaHome className="mr-1 text-lg" />
                        Home
                    </Link>
                </li>
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <FaChevronRight className="text-gray-400 mx-2" />
                        <Link
                            to={item.path}
                            className={`text-blue-600 hover:text-blue-800 text-decoration-none transition-colors duration-300 ease-in-out ${index === breadcrumbItems.length - 1 ? 'font-semibold' : ''
                                }`}
                        >
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Breadcrumb