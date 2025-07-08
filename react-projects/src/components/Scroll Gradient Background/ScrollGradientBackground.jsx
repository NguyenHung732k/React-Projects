import React from 'react';
import ScrollGradientWrapper from './ScrollGradientWrapper'
import Section from './Section'

const ScrollGradientBackground = () => {
    return (
        <ScrollGradientWrapper>
            <Section id="hero" title="Welcome to Our Website" />
            <Section id="about" title="About Us" />
            <Section id="contact" title="Get in Touch" />
        </ScrollGradientWrapper>
    )
}

export default ScrollGradientBackground