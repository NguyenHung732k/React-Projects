import React from 'react'

import ParallaxSection from './ParallaxSection'
import image1 from '../../assets/photo-1439337153520-7082a56a81f4.avif'
import image2 from '../../assets/photo-1473177104440-ffee2f376098.avif'
import image3 from '../../assets/photo-1488034976201-ffbaa99cbf5c.avif'
import image4 from '../../assets/photo-1721058677807-34a4fcde1952.avif'
import image5 from '../../assets/premium_photo-1671734046045-6ffc442d068b.avif'

const Parallax = () => {
    return (
        <div>
            <ParallaxSection image={image1}>
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Photography</h1>
            </ParallaxSection>
            <section className="p-8">
                <h2 className="text-3xl font-semibold">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <img src={image1} alt="Gallery 1" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image2} alt="Gallery 2" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image3} alt="Gallery 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </section>
            <ParallaxSection image={image3}>
                <h1 className="text-4xl md:text-6xl font-bold">Gallery</h1>
            </ParallaxSection>
            <section className="p-8">
                <h2 className="text-3xl font-semibold">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <img src={image3} alt="Gallery 1" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image4} alt="Gallery 2" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image5} alt="Gallery 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </section>
            <ParallaxSection image={image4}>
                <h1 className="text-4xl md:text-6xl font-bold">Gallery</h1>
            </ParallaxSection>
            <section className="p-8">
                <h2 className="text-3xl font-semibold">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <img src={image2} alt="Gallery 1" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image4} alt="Gallery 2" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src={image5} alt="Gallery 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </section>
            <ParallaxSection image={image5}>
                <h1 className="text-4xl md:text-6xl font-bold">Gallery</h1>
            </ParallaxSection>
        </div>
    )
}

export default Parallax