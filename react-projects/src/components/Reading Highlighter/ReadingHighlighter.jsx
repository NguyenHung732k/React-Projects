import React, { useState, useEffect } from "react"
import Section from "./Section"
import StickyTracker from "./StickyTracker"

const sections = [
    { id: 1, title: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Chapter 1", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Chapter 2", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 4, title: "Conclusion", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
]

const ReadingHighlighter = () => {
    const [activeSection, setActiveSection] = useState(null)

    const handleScroll = () => {
        const sectionsOffsets = sections.map((section) => {
            const element = document.getElementById(`section-${section.id}`)
            return {
                id: section.id,
                top: element.offsetTop,
                bottom: element.offsetTop + element.clientHeight,
            }
        })

        const scrollPosition = window.scrollY + window.innerHeight / 2

        const currentSection = sectionsOffsets.find(
            (section) => scrollPosition >= section.top && scrollPosition <= section.bottom
        )
        setActiveSection(currentSection ? currentSection.id : null)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="flex gap-10 p-10 bg-gray-100">
            <div className="flex-1">
                {sections.map((section) => (
                    <Section
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        content={section.content}
                        isActive={activeSection === section.id}
                    />
                ))}
            </div>
            <StickyTracker sections={sections} activeSection={activeSection} />
        </div>
    )
}

export default ReadingHighlighter