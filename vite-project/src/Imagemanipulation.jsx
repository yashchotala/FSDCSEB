import React, { useState } from 'react';
import cat from './ip.png';

function Imagemanipulation() {
    const [imageStyles, setImageStyles] = useState({
        height: 200,
        width: 200,
        transform: 'rotate(0deg)',
    });
    const [backgroundColor, setBackgroundColor] = useState('#ff9999');

    const enhanceHeight = () => {
        setImageStyles((prev) => ({
            ...prev,
            height: prev.height + 20,
        }));
    };

    const enhanceWidth = () => {
        setImageStyles((prev) => ({
            ...prev,
            width: prev.width + 20,
        }));
    };

    const rotateImage = () => {
        setImageStyles((prev) => {
            const currentRotation = parseInt(prev.transform.match(/\d+/)[0], 10);
            return {
                ...prev,
                transform: `rotate(${currentRotation + 45}deg)`,
            };
        });
    };

    const changeBackground = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor);
    };

    return (
        <div
            style={{
                border: '2px solid red',
                height: '300px',
                width: '400px',
                marginLeft: '250px',
                backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <div
                style={{
                    border: '1px solid black',
                    height: '100px',
                    width: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={cat} style={imageStyles} alt="cat image" />
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <button id="btn" onClick={enhanceHeight}>
                    Enhance Height
                </button>
                <button id="btn" onClick={enhanceWidth}>
                    Enhance Width
                </button>
                <button id="btn" onClick={rotateImage}>
                    Rotate
                </button>
                <button id="btn" onClick={changeBackground}>
                    Change Background
                </button>
            </div>
        </div>
    );
}
export default Imagemanipulation;