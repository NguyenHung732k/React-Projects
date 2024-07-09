import React, { useEffect, useRef, useState } from 'react'
import './ScrollToTopStyles.css'

import UseFetchHook from '../Use Fetch/UseFetchHook'

const ScrollToTop = () => {


  const [showButton, setShowButton] = useState(false)

  const { data, error } = UseFetchHook("https://dummyjson.com/products?limit=100", {})


  const ref = useRef(null)

  const handleShowButton = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setShowButton(true)
    }
    else if (scrolled <= 300) {
      setShowButton(false)
    }
  }

  window.addEventListener("scroll", handleShowButton)


  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton)
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }


  if (error) {
    return <h1>Error occured ! Please try again.</h1>
  }


  return (
    <>
      <div className="scroll-to-top-container">
        <h1>Scroll To Top And Bottom Feature</h1>
        <h1>This is the top section</h1>
        <ul style={{ listStyle: "none" }}>
          {data && data.products && data.products.length ? data.products.map((item) => <li key={item.id}>{item.title}</li>) : null}
        </ul>
        <button className={showButton ? "scroll-to-top-button" : ""} onClick={handleScrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="scroll-to-top-icon"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
        </button>
        <div ref={ref}></div>
      </div>
    </>
  )
}

export default ScrollToTop