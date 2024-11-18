import React from 'react';
import ThreeDViewer from './ThreeDViewer';

const product = {
    name: '3D Printed Chair',
    description: 'A stylish and ergonomic chair designed for comfort.',
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