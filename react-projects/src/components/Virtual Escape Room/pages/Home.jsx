import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/room1-bg.jpg')" }}>
            <div className="text-center bg-black bg-opacity-60 p-8 rounded-lg space-y-6">
                <h1 className="text-5xl text-white font-bold drop-shadow-lg">Virtual Escape Room</h1>
                <p className="text-xl text-white drop-shadow-md">Can you solve all the puzzles and escape in time?</p>
                <Link to="/room1">
                    <button className="bg-blue-500 text-white text-2xl mt-4 py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600">
                        Start Game
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home