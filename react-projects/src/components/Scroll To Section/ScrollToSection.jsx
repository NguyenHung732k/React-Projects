import React, { useRef } from 'react'

import './ScrollToSectionStyles.css'

const ScrollToSection = () => {

  const ref = useRef()

  const data = [
    {
      label: "First Card",
      style: {
        width: "70%",
        height: "600px",
        background: "red",
        borderRadius: "20px",
        textAlign: "center",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "70%",
        height: "600px",
        background: "grey",
        borderRadius: "20px",
        textAlign: "center",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "70%",
        height: "600px",
        background: "blue",
        borderRadius: "20px",
        textAlign: "center",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "70%",
        height: "600px",
        background: "green",
        borderRadius: "20px",
        textAlign: "center",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "70%",
        height: "600px",
        background: "orange",
        borderRadius: "20px",
        textAlign: "center",
      },
    },
  ];



  const handleScrollToSection = () => {
    const rect = ref.current.getBoundingClientRect().top

    window.scrollTo({
      top: rect,
      behavior: "smooth",
    })
  }



  return (
    <div className="scroll-section-container">
      <h1>Scroll to a particular section</h1>
      <button className="scroll-section-button" onClick={handleScrollToSection}>Scroll To Third Card</button>
      {data.map((dataItem, index) => (
        <div ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  )
}

export default ScrollToSection