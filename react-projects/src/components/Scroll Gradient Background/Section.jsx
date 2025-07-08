import React from 'react';

const Section = ({ id, title }) => (
    <section
        id={id}
        className="h-screen flex items-center justify-center text-white text-center text-5xl font-extrabold px-6 opacity-0 animate-fade-in text-glow"
    >
        {title}
    </section>
);

export default Section