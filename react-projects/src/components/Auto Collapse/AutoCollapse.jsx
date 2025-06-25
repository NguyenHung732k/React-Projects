import React, { useRef, useState } from 'react';
import { useOutsideClick } from './hooks/useOutsideClick'
import classNames from 'classnames'

const AutoCollapse = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animateOut, setAnimateOut] = useState(false)
  const menuRef = useRef(null)

  const closeMenu = () => {
    setAnimateOut(true)
    setTimeout(() => {
      setIsOpen(false)
      setAnimateOut(false)
    }, 150)
  }

  useOutsideClick(menuRef, () => {
    if (isOpen) closeMenu()
  })

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center inline-block text-left">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      >
        Open Menu
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={classNames(
            'z-50 mt-2 w-52 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 transform transition-all',
            {
              'opacity-100 scale-100 duration-150 ease-out': !animateOut,
              'opacity-0 scale-95 duration-150 ease-in': animateOut,
            }
          )}
        >
          <ul className="py-2">
            {['Profile', 'Settings', 'Logout'].map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  console.log(`${item} clicked`)
                  closeMenu()
                }}
                className="group relative flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-all"
              >
                <span className="absolute inset-0 group-active:bg-gray-200 rounded-md transition duration-75 pointer-events-none" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AutoCollapse