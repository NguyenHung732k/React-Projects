import React from 'react';
import ParallaxCardComponent from './ParallaxCardComponent'

const ParallaxCard = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-10">
            <ParallaxCardComponent
                image="/images/product-bg.jpg"
                layer1="/images/light-layer.png"
                layer2="/images/depth-layer.png"
                title="Futuristic Headphones"
                subtitle="Immersive audio meets modern design"
                tag="New Arrival"
            />
        </div>
    )
}

export default ParallaxCard