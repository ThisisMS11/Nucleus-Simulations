import React, { useState, useEffect } from 'react'
import AtomImage from '../assets/temp/atom.png'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import Neutron from './Neutron';
import EnergyWave from './EnergyWave';


const Atom = ({ position }) => {
    return (
        <img
            className="random-image"
            style={{ left: `${180 + position.x % 650}px`, top: `${position.y % 300}px` }}
            src={AtomImage}
            alt="Atom"
        />
    );
};


const NuclearChainReaction = () => {
    const [atomsCoordinates, setAtomsCoordinates] = useState([]);
    const [value, setValue] = useState(10);
    const [isMoving, setIsMoving] = useState(false);

    const [neutrons, setNeutrons] = useState([]);
    const [energyWaves, setEnergyWaves] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        createRandomPositions(newValue);
    };


    const getRandomPosition = () => {
        const x = Math.random() * 600; // Random x-coordinate within the cylinder
        const y = Math.random() * 600; // Random y-coordinate within the cylinder
        return { x, y };
    };

    const createRandomPositions = (n) => {
        const newAtomsCoordinates = Array.from({ length: n }, () => ({ position: getRandomPosition() }));
        // Sort the atom coordinates in increasing order of x and y

        setAtomsCoordinates(newAtomsCoordinates);
    };


    const handleCollision = (index, angle) => {
        // Remove the collided atom from atomsCoordinates

        // add more neutrons.
        // x={45} y={200} angle={0} isMoving={isMoving}
        const collidedAt = atomsCoordinates[index].position;

        const atomX = 180 + (collidedAt.x % 650);
        const atomY = (collidedAt.y % 300)

        // create the new neutrons.
        setNeutrons([...neutrons, { x: atomX, y: atomY, angle: angle + 45, isMoving: true }]);
        setNeutrons([...neutrons, { x: atomX, y: atomY, angle: angle - 45, isMoving: true }]);

        // create the energy waves.
        setEnergyWaves([...energyWaves, { x: atomX, y: atomY, angle: angle + 45 }])
        setEnergyWaves([...energyWaves, { x: atomX, y: atomY, angle: angle - 45 }])

        setAtomsCoordinates((prevAtoms) => {
            const newAtoms = [...prevAtoms];
            newAtoms.splice(index, 1);
            return newAtoms;
        });
    };


    const RefreshEverything = () => {
        setNeutrons([]);
        setIsMoving(false);
        setAtomsCoordinates([]);
    }

    return (
        <div className="w-full h-[45rem] utilWireframe flex-col">
            <div className="w-3/4 h-2/3 flex">
                <div id="cylinder" className="w-3/4 flex justify-end items-center h-full">
                    <div id="mainCylinder" className="flex justify-center items-center w-full h-4/5 rounded-full bg-gray-400 overflow-hidden">
                        <div className="w-[90%] h-[80%] relative ">

                            <Neutron x={45} y={200} angle={0} isMoving={isMoving} atomsCoordinates={atomsCoordinates} onCollision={handleCollision} />


                            {neutrons.length > 0 && neutrons.map((neutron, index) => {
                                return <Neutron key={index} x={neutron.x} y={neutron.y} angle={neutron.angle} isMoving={neutron.isMoving} atomsCoordinates={atomsCoordinates} onCollision={handleCollision} />
                            })}

                            {
                                energyWaves.map((wave, index) => {
                                    return <EnergyWave key={index} position={wave} />
                                })
                            }

                            {atomsCoordinates.map((atom, index) => (
                                <Atom key={index} position={atom.position} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-3 w-1/4">
                    <div className="bg-gray-400 w-4/5 -skew-x-[12deg]" id="flap1"></div>
                    <div className="bg-gray-400 w-4/5 -translate-x-4" id="flap2"></div>
                    <div className="bg-gray-400 w-4/5 skew-x-[12deg]" id="flap3"></div>
                </div>
            </div>

            <div>
                <Slider aria-label="Volume" value={value} onChange={handleChange} sx={{ width: 400, marginTop: 10 }} valueLabelDisplay="auto" min={10} max={650} defaultValue={10} />
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => setIsMoving(!isMoving)} sx={{ marginX: 4 }}>
                    Blast
                </Button>
                <Button variant="contained" endIcon={<RefreshIcon />} onClick={RefreshEverything} sx={{ marginX: 4 }}>
                    Recover
                </Button>
            </div>
        </div>
    );
};

export default NuclearChainReaction;