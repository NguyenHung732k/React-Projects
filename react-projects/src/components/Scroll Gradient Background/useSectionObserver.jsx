import { useEffect, useState } from 'react';

export const useSectionObserver = (sectionIds = []) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.6 }
        )

        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el);
        })

        return () => observer.disconnect()
    }, [sectionIds])

    return activeSection
}