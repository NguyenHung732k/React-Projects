import React, { useState } from 'react'
import ModalCard from './ModalCard'
import './Modal.css'

const Modal = () => {

  const [showModal, setShowModal] = useState(false)


  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  const onClose = () => {
    setShowModal(false)
  }


  return (
    <div className="container">
      <div onClick={() => handleToggleModal()}
        className={`${showModal === true ? 'close-modal' : 'modal-button'} `}>Open Modal</div>

      {showModal && (
        <ModalCard
          id={"custom-id"}
          onClose={() => onClose()}
        />
      )}
    </div>
  )
}

export default Modal
