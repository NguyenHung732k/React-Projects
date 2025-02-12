const Resources = ({ style }) => {
    const getResources = (style) => {
        switch (style) {
            case "Surrealism":
                return (
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=Z2DpQZ9Ad9Y"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Surrealism Art Tutorial (Video)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.artistsnetwork.com/art-techniques/surrealism/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Surrealism Techniques Guide (Article)
                            </a>
                        </li>
                    </ul>
                );
            case "Cubism":
                return (
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=U6HT7rZGOsM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Cubism Art Tutorial (Video)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.artsy.net/article/artsy-editorial-introduction-cubism-art"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Introduction to Cubism (Article)
                            </a>
                        </li>
                    </ul>
                )
            default:
                return null
        }
    }

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Learning Resources:</h3>
            {getResources(style)}
        </div>
    )
}

export default Resources