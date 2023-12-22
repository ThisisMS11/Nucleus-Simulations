import React, { useEffect, useState } from 'react'
import EnergyWaveImage from '../assets/temp/wave.png'

const EnergyWave = ({ position }) => {

    const [coordinates, setCoordinates] = useState({ x: position.x, y: position.y });
    const [isUnmounted, setIsUnmounted] = useState(false);


    useEffect(() => {
        /* Check for upper bounds to stop moveNeutron */
        const { x: currentX, y: currentY } = coordinates;

        if (currentX < 0 || currentX > 750 || currentY < -35 || currentY > 350) {
            /* destroy the Energy Wave here. */
            setIsUnmounted(true);
            return;
        }

        /* Move the neutron */
        const moveEnergyWave = () => {
            const newX = currentX + Math.cos((position.angle * Math.PI) / 180);
            const newY = currentY + Math.sin((position.angle * Math.PI) / 180);
            setCoordinates({ x: newX, y: newY });
        };

        /* Call moveNeutron after the state is updated */
        const intervalId = setInterval(() => {
            moveEnergyWave();
        }, 1)

        /* Cleanup function to stop interval on component unmount. */
        return () => {
            clearInterval(intervalId);
        };
    }, [position,coordinates]);

    // Check if the component is unmounted and return null
    if (isUnmounted) {
        return null;
    }


    return (
        <img
            className="EnergyWave"
            style={{ left: `${coordinates.x}px`, top: `${coordinates.y}px` }}
            src={EnergyWaveImage}
            alt="Atom"
        />
    );
}

export default EnergyWave