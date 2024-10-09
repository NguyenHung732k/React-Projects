import React, { useState } from 'react'
import Exhibit from './Exhibit'
import ExhibitDetail from './ExhibitDetail'

const exhibits = [
    {
        id: 1,
        title: 'Ancient Artifacts',
        description: 'A collection of ancient artifacts from various cultures.',
        image: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/canopic-jars,-ancient-egyptian-artifacts.jpg',
    },
    {
        id: 2,
        title: 'Renaissance Paintings',
        description: 'Explore beautiful paintings from the Renaissance period.',
        image: 'https://cdn.britannica.com/41/3341-050-825E2B57/The-Creation-of-Adam-ceiling-fresco-Sistine.jpg',
    },
]



const Tour = () => {

    const [selectedExhibit, setSelectedExhibit] = useState(null)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {exhibits.map(exhibit => (
                <Exhibit
                    key={exhibit.id}
                    exhibit={exhibit}
                    onClick={id => setSelectedExhibit(exhibits.find(exhibit => exhibit.id === id))}
                />
            ))}
            <ExhibitDetail exhibit={selectedExhibit} onClose={() => setSelectedExhibit(null)} />
        </div>
    )
}

export default Tour