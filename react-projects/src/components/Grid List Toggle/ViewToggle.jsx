import { FaThLarge, FaListUl } from 'react-icons/fa'

const ViewToggle = ({ view, setView }) => {
    const toggleView = () => {
        const newView = view === 'grid' ? 'list' : 'grid'
        setView(newView)
        localStorage.setItem('view', newView)
    }

    return (
        <button
            onClick={toggleView}
            className="flex items-center justify-center p-[20px] rounded-full hover:bg-gray-100 outline-none transition"
        >
            <span className="relative w-3 h-3">
                <FaThLarge
                    className={`absolute inset-0 transition-all duration-300 transform ${view === 'grid' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
                        }`}
                />
                <FaListUl
                    className={`absolute inset-0 transition-all duration-300 transform ${view === 'list' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-90'
                        }`}
                />
            </span>
            <span className="absolute top-full mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition">
                {view === 'grid' ? 'List View' : 'Grid View'}
            </span>
        </button>
    )
}

export default ViewToggle