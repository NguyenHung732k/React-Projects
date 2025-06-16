import HoverScrubThumbnail from './HoverScrubThumbnail'

const ScrubThumbnail = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8 grid place-items-center">
            <HoverScrubThumbnail
                spriteSrc="/sprites/video-preview-sprite.jpg"
                videoSrc="/videos/video-preview.mp4"
                frameCount={10}
                frameWidth={320}
                frameHeight={180}
                className="w-80"
            />
        </div>
    )
}

export default ScrubThumbnail