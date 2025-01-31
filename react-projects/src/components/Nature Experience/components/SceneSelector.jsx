import React from 'react'

const SceneSelector = ({ sceneType, setSceneType }) => {
    const scenes = [
        { name: "Forest", image: "https://treesforall.nl/app/uploads/2022/03/Bos-Nederland-Epe-e1719389547661-0x835-c-default.webp", type: "forest" },
        { name: "Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D", type: "beach" },
        { name: "Mountain", image: "https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-4.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop", type: "mountain" },
    ]

    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 p-4">
            {scenes.map((scene) => (
                <div
                    key={scene.type}
                    onClick={() => setSceneType(scene.type)}
                    className="cursor-pointer transition-transform transform hover:scale-105"
                >
                    <div
                        className="relative h-32 w-32 rounded-lg overflow-hidden shadow-lg"
                        style={{
                            backgroundImage: `url(${scene.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            {scene.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SceneSelector