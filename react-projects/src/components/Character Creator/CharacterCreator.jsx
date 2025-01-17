import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BodyTypeSelector from './components/BodyTypeSelector'
import ClothingSelector from './components/ClothingSelector'
import AccessorySelector from './components/AccessorySelector'
import ExportOptions from './components/ExportOptions'
import CharacterProfile from './components/CharacterProfile'

const CharacterCreator = () => {
    const [bodyType, setBodyType] = useState('default')
    const [clothing, setClothing] = useState('casual')
    const [accessories, setAccessories] = useState([])

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <header className="bg-blue-600 p-4 text-white text-center">
                    <h1 className="text-3xl font-bold">Character Creator</h1>
                </header>

                <div className="flex flex-1">
                    {/* Sidebar Navigation */}
                    <div className="w-1/6 bg-gray-800 p-6 text-white">
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/body" className="hover:text-blue-400 text-decoration-none">Body Type</Link>
                                </li>
                                <li>
                                    <Link to="/clothing" className="hover:text-blue-400 text-decoration-none">Clothing</Link>
                                </li>
                                <li>
                                    <Link to="/accessories" className="hover:text-blue-400 text-decoration-none">Accessories</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="w-5/6 p-8 flex flex-col items-center space-y-6 bg-gray-100">
                        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                            <CharacterProfile bodyType={bodyType} clothing={clothing} accessories={accessories} />
                        </div>

                        <Routes>
                            <Route path="/body" element={<BodyTypeSelector selectedBody={bodyType} setSelectedBody={setBodyType} />} />
                            <Route path="/clothing" element={<ClothingSelector selectedClothing={clothing} setSelectedClothing={setClothing} />} />
                            <Route path="/accessories" element={<AccessorySelector selectedAccessories={accessories} setSelectedAccessories={setAccessories} />} />
                        </Routes>

                        <ExportOptions character={{ bodyType, clothing, accessories }} />
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default CharacterCreator
