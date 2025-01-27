import React, { useState } from 'react'

const CollaborativeStoryPage = () => {
  const [newPart, setNewPart] = useState('')
  const [story, setStory] = useState([
    { user: 'Alice', part: 'Once upon a time, in a faraway land...' },
    { user: 'Bob', part: 'The skies were always blue, and the grass grew tall.' },
  ])

  const addToStory = () => {
    setStory([...story, { user: 'You', part: newPart }])
    setNewPart('')
  }

  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-white">Collaborative Story</h2>

      <div className="w-full h-72 bg-black overflow-y-scroll p-4">
        {story.map((entry, index) => (
          <p key={index} className="text-yellow-300">
            <strong>{entry.user}:</strong> {entry.part}
          </p>
        ))}
      </div>

      <div className="w-full mt-4 flex items-center space-x-4">
        <textarea
          className="w-full p-4 rounded-lg text-black"
          placeholder="Add your part to the story..."
          value={newPart}
          onChange={(event) => setNewPart(event.target.value)}
        />
        <button
          className="bg-yellow-500 p-3 rounded-full text-white hover:bg-yellow-400"
          onClick={addToStory}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default CollaborativeStoryPage;