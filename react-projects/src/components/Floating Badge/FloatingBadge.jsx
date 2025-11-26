import { useEffect, useState, useRef } from "react";
import './FloatingBadge.css'

const FloatingBadge = () => {
    const [visible, setVisible] = useState(false)
    const milestoneRef = useRef(null)

    // Intersection Observer to track visibility of the milestone section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When the milestone section enters the viewport, the badge becomes visible
                    if (entry.isIntersecting) {
                        setVisible(true)
                    } else {
                        setVisible(false) // Fade-out the badge when user scrolls past
                    }
                })
            },
            { threshold: 0.4 } // Trigger when 40% of the section is visible
        )

        if (milestoneRef.current) {
            observer.observe(milestoneRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-10">Welcome to the Milestone Tracker</h1>
            {/* Floating Badge */}
            <div
                className={`floating-badge ${visible ? "visible animate-bounceIn" : "animate-fadeOut"}`}
            >
                {/* Badge Icon */}
                <span role="img" aria-label="celebration" className="emoji">🎉</span>
                <span>Milestone Reached!</span>
            </div>

            {/* Milestone Section */}
            <section
                ref={milestoneRef}
                className="h-[600px] flex items-center justify-center bg-gray-100 border mt-40 rounded-lg"
            >
                <h2 className="text-3xl font-bold text-center">Reach Your Milestone!</h2>
            </section>

            <div className="h-screen bg-gray-200 mt-40">
                <p className="text-center text-xl py-20">
                    Scroll down to see the floating badge appear as you reach the milestone section!
                </p>
            </div>
        </>
    )
}

export default FloatingBadge