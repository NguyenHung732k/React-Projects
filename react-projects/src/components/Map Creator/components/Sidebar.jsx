import React from 'react'
import TerrainSelector from './TerrainSelector'

const Sidebar = ({ setSelectedTerrain, setIsExportModalOpen }) => {
    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <div className="text-xl mb-6">Map Tools</div>

            <TerrainSelector setSelectedTerrain={setSelectedTerrain} />

            <button
                onClick={() => setIsExportModalOpen(true)}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white mb-3"
            >
                <svg className="w-5 h-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
                Export Map
            </button>
            <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded text-white mb-3">
                <svg className="w-5 h-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
                </svg>
                Save Map
            </button>
            <button className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white mb-3">
                <svg className="w-5 h-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
                </svg>
                View Map
            </button>
        </div>
    )
}
export default Sidebar