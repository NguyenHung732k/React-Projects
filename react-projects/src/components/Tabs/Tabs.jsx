import React, { useState } from 'react'
import './TabsStyles.css'

const Tabs = () => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleOnClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
    }

    const tabsContent = [
        {
            id: "1",
            title: "Arlina Design",
            content: "Arlina Design (specifically, the sweet orange) is the fruit of the citrus species Citrus x sinensis in the family Rutaceae. The fruit of the Citrus x sinensis is considered a sweet orange, whereas the fruit of the Citrus x aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.",
        },
        {
            id: "2",
            title: "Idntheme",
            content: "Idntheme (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata). The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.",
        },
        {
            id: "3",
            title: "Tekno Match",
            content: "Tekno Match (Citrus xclementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.",
        },
    ];

    return (
        <div className="tabs-container">

            <div className="tabs">
                <div className="heading">
                    {tabsContent.map((tabItem, index) => (
                        <div
                            className={`label ${currentTabIndex === index ? "active" : ""}`}
                            onClick={() => handleOnClick(index)}
                            key={tabItem.id}
                        >
                            {tabItem.title}
                        </div>
                    ))}
                </div>

                {tabsContent.map((tabItem, index) => (
                    <div className={`panel ${currentTabIndex === index ? "active" : ""}`}>
                        <h1>{tabsContent[currentTabIndex].title}</h1>
                        <p>{tabsContent[currentTabIndex].content}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Tabs