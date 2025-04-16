import React from 'react'
import FoldableCard from './FoldableCard'

const FoldableCardApp = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <FoldableCard direction="vertical">
                <p>This is the content inside the fold. You can put any JSX content here!</p>
            </FoldableCard>
            <FoldableCard direction="horizontal" className="ml-6">
                <p>Another card with horizontal folding. Feel free to customize it!</p>
            </FoldableCard>
        </div>
    )
}

export default FoldableCardApp