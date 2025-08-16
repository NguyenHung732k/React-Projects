import React, { useEffect, useState } from 'react';

const FadeInList = ({ items, delay = 300, triggerOnScroll = false }) => {
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false))

    useEffect(() => {
        if (!triggerOnScroll) {
            const timeouts = items.map((_, index) => {
                return setTimeout(() => {
                    setVisibleItems((prev) => {
                        const updated = [...prev]
                        updated[index] = true
                        return updated
                    })
                }, index * delay)
            })

            return () => timeouts.forEach(clearTimeout)
        }
    }, [items, delay, triggerOnScroll])

    const handleScroll = (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setVisibleItems((prev) => {
                    const updated = [...prev]
                    updated[index] = true
                    return updated
                })
            }
        })
    }

    useEffect(() => {
        if (triggerOnScroll) {
            const observer = new IntersectionObserver(handleScroll, {
                threshold: 0.5,
            })

            const itemsToObserve = document.querySelectorAll('.fade-item')
            itemsToObserve.forEach((item) => observer.observe(item))

            return () => observer.disconnect()
        }
    }, [triggerOnScroll, items.length])

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`fade-item transition-opacity duration-1000 opacity-0 ${visibleItems[index] ? 'opacity-100' : ''
                        }`}
                    style={{
                        transitionDelay: `${index * delay}ms`,
                    }}
                >
                    <div
                        className="p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l duration-300"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">{item}</h3>
                        <p className="text-sm text-white opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut pulvinar
                            orci.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FadeInList