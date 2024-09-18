import React, { useRef, useEffect } from 'react';
import { Canvas, Image, Text } from 'fabric';

const CanvasComponent = ({ elements, onUpdate }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new Canvas(canvasRef.current, {
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Function to add elements to the canvas
        const addElements = () => {
            canvas.clear(); // Clear existing elements
            elements.forEach((element) => {
                if (element.type === 'image') {
                    Image.fromURL(element.src, (img) => {
                        img.set({
                            left: element.left,
                            top: element.top,
                            width: element.width,
                            height: element.height,
                            id: element.id,
                        });
                        canvas.add(img);
                    });
                } else if (element.type === 'text') {
                    const text = new Text(element.text, {
                        left: element.left,
                        top: element.top,
                        fontSize: element.fontSize,
                        fill: element.color,
                        id: element.id,
                    });
                    canvas.add(text);
                }
            });
        };

        addElements();

        canvas.on('object:modified', () => {
            const updatedElements = canvas.getObjects().map((obj) => ({
                type: obj.type,
                id: obj.id,
                left: obj.left,
                top: obj.top,
                width: obj.width || 0,
                height: obj.height || 0,
                text: obj.type === 'text' ? obj.text : '',
                color: obj.fill || '',
            }));
            onUpdate(updatedElements);
        });

        return () => {
            canvas.dispose();
        };
    }, [elements, onUpdate]);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default CanvasComponent;