import React from 'react'
import ScrollSnapSection from './ScrollSnapSection'
import ParallaxSection from './ParallaxSection'

const ScrollSnapPage = () => {
    const sections = [
        () => (
            <ParallaxSection
                title="Introducing Vision Pro"
                subtitle="Welcome to the era of spatial computing."
                bgColor="bg-black"
                image="https://www.apple.com/newsroom/images/product/apple-vision-pro/standard/Apple-Vision-Pro-hero-230605.jpg.large.jpg"
            />
        ),
        () => (
            <ParallaxSection
                title="See the World Differently"
                subtitle="Blend digital content with your physical space."
                bgColor="bg-gray-900"
                image="https://www.apple.com/v/apple-vision-pro/a/images/overview/visionos/visionos_endframe__b0g0cctseq66_large.jpg"
            />
        ),
        () => (
            <ParallaxSection
                title="Control with Your Eyes, Hands & Voice"
                subtitle="No need for clunky controllers or devices."
                bgColor="bg-slate-800"
                image="https://www.apple.com/v/apple-vision-pro/a/images/overview/controls/controls_endframe__ftw6h43j1eqm_large.jpg"
            />
        ),
        () => (
            <ParallaxSection
                title="Available Soon"
                subtitle="Join the waitlist to be among the first."
                bgColor="bg-blue-800"
            />
        ),
    ]

    return <ScrollSnapSection sections={sections} />
}

export default ScrollSnapPage