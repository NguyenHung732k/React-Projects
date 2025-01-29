import React from 'react'

const AddResourceButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 mt-4 py-2 px-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
    >
      Add Resource
    </button>
  )
}

export default AddResourceButton