import { useState } from 'react';
import './SlideTab.css'

const SlideTab = () => {
    const tabs = ['Math', 'Science', 'History', 'Geography', 'Chemistry']
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="tab-slider-container">
            <div className="tabs-container">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(index)}
                        className={`tab-button ${index === activeTab ? 'active' : ''}`}
                    >
                        {tab}
                        {/* Active Bubble */}
                        
                    </button>
                ))}
            </div>

            <div className="tab-content">
                <h2>{tabs[activeTab]}</h2>
                <p>Explore the world of {tabs[activeTab]} with fun lessons and activities!</p>
                <div className="content-box">
                    <p>Content for {tabs[activeTab]} will appear here...</p>
                </div>
            </div>
        </div>
    )
}

export default SlideTab