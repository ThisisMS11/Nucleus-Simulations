import React, { useEffect, useState } from 'react';
import NeutronImage from '../assets/temp/Neutron.png';

const Neutron = ({ x, y, angle, isMoving, atomsCoordinates, onCollision }) => {

    const [coordinates, setCoordinates] = useState({ x, y });
    const [isUnmounted, setIsUnmounted] = useState(false);

    function getRandomAngle() {
        // Generate a random number between 0 and 1
        const randomValue = Math.random();
        // Scale and shift the random number to fit the range -180 to 180
        const angle = randomValue * 360 - 180;
        return angle;
    }

    const checkForCollision = (currentX, currentY, angle) => {
        // console.log('**********Starts*************')
        // console.log({currentX,currentY});

        atomsCoordinates.forEach((atom, index) => {

            const atomX = 180 + (atom.position.x % 650);
            const atomY = (atom.position.y % 300)

            const distance = Math.sqrt((atomX - currentX) ** 2 + (atomY - currentY) ** 2);

            // console.log({atomX,atomY,distance});

            const collisionThreshold = 5;
            if (distance <= collisionThreshold) {
                // console.log('collision occured');
                onCollision(index, getRandomAngle());
                // Pass the index of the collided atom
            }
        })

        // console.log('**********Ends*************')
    }

    useEffect(() => {
        /* Check for upper bounds to stop moveNeutron */
        const { x: currentX, y: currentY } = coordinates;

        if (currentX < 0 || currentX > 750 || currentY < -35 || currentY > 350) {
            /* destroy the neutron here. */
            setIsUnmounted(true);
            return;
        }

        /* Move the neutron */
        const moveNeutron = () => {
            const newX = currentX + Math.cos((angle * Math.PI) / 180);
            const newY = currentY + Math.sin((angle * Math.PI) / 180);
            checkForCollision(newX, newY, angle);
            setCoordinates({ x: newX, y: newY });
        };

        /* Call moveNeutron after the state is updated */
        const intervalId = setInterval(() => {
            if (isMoving)
                moveNeutron();
            else
                setCoordinates({ x, y });
        }, 5)

        /* Cleanup function to stop interval on component unmount. */
        return () => {
            clearInterval(intervalId);
        };
    }, [coordinates, angle, isMoving, atomsCoordinates]);

    // Check if the component is unmounted and return null
    if (isUnmounted) {
        return null;
    }


    return (
        <img
            src={NeutronImage}
            alt="image not found"
            className='neutron'
            style={{ left: `${coordinates.x}px`, top: `${coordinates.y}px` }}
        />
    );
};

export default Neutron;
