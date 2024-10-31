import ArtGallery from './ArtGallery'

const Home = () => {
    const artworks = [
        { id: 1, title: "Artwork 1", artist: "Artist A", imageUrl: "image1.jpg", rating: 4.5 },
        { id: 2, title: "Artwork 2", artist: "Artist B", imageUrl: "image2.jpg", rating: 4.0 },
    ]

    return (
        <div className="h-screen mx-auto">
            <h1 className="text-3xl font-bold p-4">Welcome to the Art Commission Marketplace</h1>
            <ArtGallery artworks={artworks} />
        </div>
    )
}

export default Home