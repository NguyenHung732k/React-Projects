import React from 'react';
import ThreeDViewer from './ThreeDViewer';

const product = {
    name: '3D Printed Desk',
    description: 'A stylish and ergonomic desk designed for comfort.',
    price: '199.99',
    modelPath: '/models/model.glb',
}

const Viewer = () => {
    return (
        <div>
            <ThreeDViewer modelPath={product.modelPath} productDetails={product} />
        </div>
    )
}

export default Viewer