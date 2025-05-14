import React from 'react'
import './Skeleton.css'

const Skeleton = ({ className }) => (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
    </div>
)

export default Skeleton