import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StarMap from './components/StarMap'
import Quiz from './components/Quiz'
import CustomTour from './components/CustomTour'

const SpaceExplorer = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white">
                <header className="p-6 bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900">
                    <h1 className="text-3xl font-bold text-center">Interactive Space Explorer</h1>
                </header>

                <main className="p-4">
                    <Routes>
                        <Route path="/" element={<StarMap />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/custom-tour" element={<CustomTour />} />
                    </Routes>
                </main>

                <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex justify-around shadow-lg">
                    <button className="text-white hover:text-gray-400 transition duration-300" onClick={() => window.location.href = '/'}>
                        Star Map
                    </button>
                    <button className="text-white hover:text-gray-400 transition duration-300" onClick={() => window.location.href = '/quiz'}>
                        Quiz
                    </button>
                    <button className="text-white hover:text-gray-400 transition duration-300" onClick={() => window.location.href = '/custom-tour'}>
                        Custom Tour
                    </button>
                </nav>
            </div>
        </Router>
    )
}

export default SpaceExplorer