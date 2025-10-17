import React from "react";
import ZoomImage from "./ZoomImage"

const ScrollZoomImage = () => {
    return (
        <div className="min-h-screen font-sans text-white bg-gray-900 scroll-smooth">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-700 to-blue-900 shadow-lg z-50 p-4">
                <h1 className="text-center text-xl sm:text-2xl font-bold tracking-wide">
                    Parallax Scroll Zoom Gallery
                </h1>
            </header>

            {/* Spacer for header */}
            <div className="h-20" />

            {/* Scroll Zoom Image Section */}
            <section className="h-screen">
                <ZoomImage
                    src="https://images.unsplash.com/photo-1604079628043-9430b63edaf8?auto=format&fit=crop&w=1920&q=80"
                    alt="Scroll Zoom"
                    className="w-full h-full"
                />
            </section>

            {/* Text Section 1 */}
            <section className="h-screen flex items-center justify-center bg-gray-800 px-6 text-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Smooth Scroll-Triggered Zoom</h2>
                    <p className="text-lg max-w-xl mx-auto text-gray-300">
                        This image subtly scales up based on your scroll depth, adding immersive depth to parallax galleries and landing pages.
                    </p>
                </div>
            </section>

            {/* Scroll Zoom Image Section 2 */}
            <section className="h-screen">
                <ZoomImage
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
                    alt="Second Image"
                    className="w-full h-full"
                />
            </section>

            {/* Text Section 2 */}
            <section className="h-screen flex items-center justify-center bg-gray-700 px-6 text-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Fully Responsive & Smooth</h2>
                    <p className="text-lg max-w-xl mx-auto text-gray-300">
                        Built with React and Tailwind CSS for fast, smooth, and responsive interactions across all devices.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default ScrollZoomImage