import React, { useEffect, useState } from 'react'

import Dice from './Dice'

import './RollDiceStyles.css'


const RollDice = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const face = 6
  const rollTimes = 10

  const [rollingInterval, setRollingInterval] = useState()
  const [side, setSide] = useState(Math.floor(Math.random() * face) + 1)
  const [disableButton, setDisableButton] = useState(false)
  const [rolling, setRolling] = useState()


  useEffect(() => {
    if (rolling === 0) {
      clearInterval(rollingInterval);
      setDisableButton(false)
    }
  })

  const rollDice = () => {
    setDisableButton(true)
    clearInterval(rollingInterval)
    let time = Math.floor((Math.random() * rollTimes) + 1)
    setRolling(time)
    const rollInterval = setInterval(() => {
      setSide(Math.floor(Math.random() * face + 1))
      time--
      setRolling(time)
    }, 200)
    setRollingInterval(rollInterval)
  }

  console.log(side)

  return (
    <div className='roll-container'>
      <div className="main-dice-container">
        <Dice diceFace={side} />
      </div>

      <button className="roll-button" disabled={disableButton} onClick={() => rollDice()}> Roll </button>
    </div>
  )
}

export default RollDice