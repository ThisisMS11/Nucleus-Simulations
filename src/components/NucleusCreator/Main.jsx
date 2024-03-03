import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

const Proton = ({ protonId, removeProton }) => {
    /* this is for making this proton a draggable one */
    const [{ isDragging }, drag] = useDrag({
        type: 'Proton',
        item: {
            id: protonId,
            type:'Proton'
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    /* To redrop the proton present inside the nucleus*/
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "Proton",
        drop: (item) => {
            /* Call removeProton and pass the item (proton) being dropped */
            removeProton(item.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`bg-blue-300 h-4 w-4 rounded-full flex items-center justify-center ${isDragging ? 'opacity-50' : ''} ${isOver && canDrop ? 'border-4 border-yellow-400' : ''}`}
        >
            <div ref={drag}>
                P
            </div>
        </div>
    );
};

const Neutron = ({ neutronId, removeNeutron }) => {
    /* this is for making this proton a draggable one */
    const [{ isDragging }, drag] = useDrag({
        type: "Neutron",
        item: {
            id: neutronId,
            type:'Neutron'
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    /* To redrop the proton present inside the nucleus*/
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "Neutron",
        drop: (item) => {
            /* Call removeProton and pass the item (proton) being dropped */
            removeNeutron(item.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`bg-green-300 h-4 w-4  rounded-full flex items-center justify-center ${isDragging ? 'opacity-50' : ''} ${isOver && canDrop ? 'border-4 border-yellow-400' : ''}`}
        >
            <div ref={drag}>
                N
            </div>
        </div>
    );
};


const Nucleus = ({ neutrons, protons, setNeutrons, setProtons, removeProton, removeNeutron }) => {

    const [{ isOver }, drop] = useDrop({
        accept: ['Proton', 'Neutron'], // Accepts both Proton and Neutron
        drop: (item) => {
            const newItemId = uuidv4();
            if (item.type === 'Proton') {
                setProtons(protons => [...protons, newItemId]);
            } else if (item.type === 'Neutron') {
                setNeutrons(neutrons => [...neutrons, newItemId]);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <>
            <div
                ref={drop}
                className={`bg-red-600 h-44 w-44 rounded-full flex items-center justify-center ${isOver ? 'border-4 border-yellow-400' : ''
                    }`}
            >
                {
                    protons.map((proton) => {
                        return <Proton key={proton} protonId={proton} removeProton={removeProton} />
                    })
                }
                {
                    neutrons.map((neutron) => {
                        return <Neutron key={neutron} neutronId={neutron} removeNeutron={removeNeutron} />
                    })
                }
            </div>
        </>
    );
};


const Main = () => {

    /*protons contains ids of all protons present inside the Nucleus */
    const [protons, setProtons] = useState([]);
    const [neutrons, setNeutrons] = useState([]);

    const sourceProtonId = uuidv4();
    const sourceNeutronId = uuidv4();

    const removeProton = (protonId) => {
        const updatedProtons = protons.filter(proton => proton !== protonId);
        setProtons(updatedProtons)
    }

    const removeNeutron = (neutronId) => {
        const updatedNeutrons = neutrons.filter(neutron => neutron !== neutronId);
        setNeutrons(updatedNeutrons)
    }

    const giveAllNeucleons = () => {
        console.log({ protons, neutrons })
    }

    return (
        <div>
            <Nucleus protons={protons} setProtons={setProtons} neutrons={neutrons} setNeutrons={setNeutrons} removeNeutron={removeNeutron} removeProton={removeProton} />

            <div className="flex w-40 h-10 items-end justify-between">

                <Proton protonId={sourceProtonId} removeProton={removeProton} />
                <Neutron neutronId={sourceNeutronId} removeNeutron={removeNeutron} />
            </div>

            <button className='bb mt-10' onClick={giveAllNeucleons}>Give All Protons</button>
        </div>
    );
};

export default Main;