import React from 'react';

const Toolbar = ({ onAddImage, onAddText, onAddSticker, onAddBorder, onSave }) => {
    return (
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 p-4 bg-gray-800 text-white">
            <button onClick={onAddImage} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Add Image</button>
            <button onClick={onAddText} className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">Add Text</button>
            <button onClick={onAddSticker} className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition">Add Sticker</button>
            <button onClick={onAddBorder} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">Add Border</button>
            <button onClick={onSave} className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600 transition">Save</button>
            <input type="file" className="hidden" />
        </div>
    );
};

export default Toolbar;