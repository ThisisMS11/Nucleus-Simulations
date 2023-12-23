import React, { useEffect, useState } from 'react';
import NeutronImage from '../assets/temp/Neutron.png';

const Neutron = ({ x, y, angle, isMoving, atomsCoordinates, onCollision }) => {
    // State to manage neutron coordinates
    const [coordinates, setCoordinates] = useState({ x, y });
    // State to track whether the component is unmounted
    const [isUnmounted, setIsUnmounted] = useState(false);

    // Function to get a random angle between -180 and 180
    function getRandomAngle() {
        const randomValue = Math.random();
        const angle = randomValue * 360 - 180;
        return angle;
    }

    // Function to check for collisions with atoms
    const checkForCollision = (currentX, currentY, angle) => {
        atomsCoordinates.forEach((atom, index) => {
            const atomX = 180 + (atom.position.x % 650);
            const atomY = atom.position.y % 290;
            const distance = Math.sqrt((atomX - currentX) ** 2 + (atomY - currentY) ** 2);

            // Collision threshold to determine if a collision occurred
            const collisionThreshold = 5;
            if (distance <= collisionThreshold) {
                onCollision(index, getRandomAngle());
            }
        });
    };

    useEffect(() => {
        // Check for upper bounds to stop moveNeutron
        const { x: currentX, y: currentY } = coordinates;

        if (currentX < 0 || currentX > 750 || currentY < -35 || currentY > 350) {
            // Destroy the neutron if it goes out of bounds
            setIsUnmounted(true);
            return;
        }

        // Function to move the neutron
        const moveNeutron = () => {
            const newX = currentX + Math.cos((angle * Math.PI) / 180);
            const newY = currentY + Math.sin((angle * Math.PI) / 180);
            checkForCollision(newX, newY, angle);
            setCoordinates({ x: newX, y: newY });
        };

        // Call moveNeutron after the state is updated
        const intervalId = setInterval(() => {
            if (isMoving) moveNeutron();
            else setCoordinates({ x, y });
        }, 5);

        // Cleanup function to stop interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [coordinates, angle, isMoving, atomsCoordinates]);

    // Check if the component is unmounted and return null
    if (isUnmounted) {
        return null;
    }

    // Render the neutron component
    return (
        <img
            src={NeutronImage}
            alt="Neutron"
            className="neutron"
            style={{ left: `${coordinates.x}px`, top: `${coordinates.y}px` }}
        />
    );
};

export default Neutron;
