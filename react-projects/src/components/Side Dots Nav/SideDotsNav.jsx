import SideDotsNavSection from "./SideDotsNavSection"
import Section from "./Section"

const SideDotsNav = () => {
    return (
        <div className="relative scroll-smooth">
            <SideDotsNavSection />
            <Section id="home" title="Home" color="bg-gradient-to-br from-gray-800 to-gray-700" />
            <Section id="about" title="About" color="bg-gradient-to-br from-blue-800 to-blue-600" />
            <Section id="services" title="Services" color="bg-gradient-to-br from-green-700 to-green-500" />
            <Section id="contact" title="Contact" color="bg-gradient-to-br from-purple-800 to-purple-600" />
        </div>
    )
}

export default SideDotsNav