import React, { useState, useCallback } from 'react';
import CanvasComponent from './CanvasComponent';
import Toolbar from './Toolbar';
import { useDropzone } from 'react-dropzone';

const CollageEditor = () => {
    const [elements, setElements] = useState([]);

    // Handle file drop for images
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const imgElement = event.target.result;
            const newElement = {
                type: 'image',
                src: imgElement,
                left: 100,
                top: 100,
                width: 200,
                height: 200,
                id: Date.now().toString(),
            };
            setElements((prevElements) => [...prevElements, newElement]);
        };

        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png'],
            'text/html': ['.html', '.htm'],
        }

    });

    // Handle adding text
    const handleAddText = () => {
        const text = prompt("Enter text:");
        if (text) {
            const newElement = {
                type: 'text',
                text: text,
                left: 100,
                top: 100,
                fontSize: 20,
                color: '#000',
                id: Date.now().toString(),
            };
            setElements((prevElements) => [...prevElements, newElement]);
        }
    };

    // Handle adding sticker
    const handleAddSticker = () => {
        const stickerURL = prompt("Enter sticker image URL:");
        if (stickerURL) {
            const newElement = {
                type: 'image',
                src: stickerURL,
                left: 100,
                top: 100,
                width: 100,
                height: 100,
                id: Date.now().toString(),
            };
            setElements((prevElements) => [...prevElements, newElement]);
        }
    };

    // Handle adding border
    const handleAddBorder = () => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.border = '5px solid black'; // Example border styling
        }
    };

    // Handle saving the collage
    const handleSave = () => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'collage.png';
            link.click();
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Toolbar
                onAddImage={() => document.querySelector('input[type="file"]').click()}
                onAddText={handleAddText}
                onAddSticker={handleAddSticker}
                onAddBorder={handleAddBorder}
                onSave={handleSave}
            />
            <div className="flex-1 relative">
                <div {...getRootProps()} className="absolute inset-0 z-10 bg-gray-500 opacity-50 flex items-center justify-center">
                    <input {...getInputProps()} />
                    <p className="text-center text-white">Drop your image here</p>
                </div>
                <CanvasComponent elements={elements} onUpdate={setElements} />
            </div>
        </div>
    );
};

export default CollageEditor;