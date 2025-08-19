import React from "react";
import ImageZoomLens from "./ImageZoomLens"

const ImageZoom = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center px-4">
            <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Product Zoom Preview</h2>

                <ImageZoomLens
                    src="https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-blue-desktop-wallpaper-with-bokeh-light-bg-shiny-illustration-photo-image_13267726.jpg"
                    zoom={2.5}
                    lensShape="circle"
                    lensSize={130}
                    showZoomPane={true}
                />
            </div>
        </div>
    )
}

export default ImageZoom