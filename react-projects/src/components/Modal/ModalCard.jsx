import React from 'react'
import './Modal.css'

const ModalCard = ({ id, onClose }) => {
  return (
    <div id={id}>
      <div className="card">
        <div onClick={onClose} className="close">
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default ModalCard