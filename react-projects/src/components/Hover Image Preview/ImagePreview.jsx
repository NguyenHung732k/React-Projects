import HoverImagePreview from './HoverImagePreview';

const ImagePreview = () => {
    return (
        <div className="p-10 text-lg text-gray-800 dark:text-gray-200">
            <p>
                Explore our <HoverImagePreview text="Gallery" imageUrl="https://via.placeholder.com/300x200" /> to see more.
            </p>
        </div>
    );
}

export default ImagePreview