import React from 'react';
import TagList from './TagList'
import './DismissTagChip.css'

const DismissTagChip = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Tag Manager</h1>
            <TagList />
        </div>
    )
}

export default DismissTagChip