import React, { useEffect, useState } from 'react';
import EnergyWaveImage from '../assets/temp/wave.png';

const EnergyWave = ({ position }) => {
    // State to manage energy wave coordinates
    const [coordinates, setCoordinates] = useState({ x: position.x, y: position.y });
    // State to track whether the component is unmounted
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        // Check for upper bounds to stop moveEnergyWave
        const { x: currentX, y: currentY } = coordinates;

        if (currentX < 0 || currentX > 750 || currentY < -35 || currentY > 350) {
            // Destroy the energy wave if it goes out of bounds
            setIsUnmounted(true);
            return;
        }

        // Function to move the energy wave
        const moveEnergyWave = () => {
            const newX = currentX + Math.cos((position.angle * Math.PI) / 180);
            const newY = currentY + Math.sin((position.angle * Math.PI) / 180);
            setCoordinates({ x: newX, y: newY });
        };

        // Call moveEnergyWave after the state is updated
        const intervalId = setInterval(() => {
            moveEnergyWave();
        }, 1);

        // Cleanup function to stop interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [position, coordinates]);

    // Check if the component is unmounted and return null
    if (isUnmounted) {
        return null;
    }

    // Render the energy wave component
    return (
        <img
            className="EnergyWave"
            style={{ left: `${coordinates.x}px`, top: `${coordinates.y}px` }}
            src={EnergyWaveImage}
            alt="Energy Wave"
        />
    );
};

export default EnergyWave;
