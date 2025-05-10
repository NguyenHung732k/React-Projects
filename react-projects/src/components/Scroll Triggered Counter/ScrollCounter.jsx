import CountUpOnScroll from "./CountUpOnScroll"

const ScrollCounter = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Impact in Numbers
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <CountUpOnScroll end={250} duration={1500} label="Projects Completed" />
                    <CountUpOnScroll end={1200} duration={2000} label="Hours Coded" />
                    <CountUpOnScroll end={95} duration={1800} label="Client Satisfaction (%)" />
                    <CountUpOnScroll end={50} duration={1000} label="Team Members" />
                </div>
            </div>
        </section>
    )
}

export default ScrollCounter