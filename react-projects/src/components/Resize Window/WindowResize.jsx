import React from 'react'
import UseWindowResize from './UseWindowResize'

import './ResizeWindowStyles.css'

const WindowResize = () => {

const windowSize = UseWindowResize()
const {width, height} = windowSize



  return (
    <div className="resize-container">
        <h5>Use Window Resize Hook</h5>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
    </div>
  )
}

export default WindowResize