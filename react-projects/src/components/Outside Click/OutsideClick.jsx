import React, { useEffect, useRef, useState } from 'react'

import './OutsideClickStyles.css'

const OutsideClick = () => {

    const [showContent, setShowContent] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            setShowContent(false)
        } 

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, setShowContent])



  return (
    <div className="content-container">
      {showContent ? (
        <div ref={ref} className="content-wrapper">
          <h1>This is a random content</h1>
          <p style = {{ fontSize: "20px" }}>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button className="outside-button" onClick={() => setShowContent(true)}>Show</button>
      )}
    </div>
  )
}

export default OutsideClick