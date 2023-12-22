import React from 'react'
import EmptyNuclues from '../assets/temp/empty-nucleue-intro.png'
const Introduction = () => {
    return (
        <div className='text-center p-4 h-[90vh] overflow-auto'>
            <h2 className='text-5xl mx-auto font-semibold mb-2'>Introduction</h2>

            <div className="text-xl p-2 text-left">
                In the previous chapter, we have learnt that in every atom, the positive charge and mass are densely concentrated at the centre of the atom forming its nucleus. 
                <br/> The overall dimensions of a nucleus are much smaller than those of an atom. Experiments on scattering of α-particles demonstrated that the radius of a nucleus was smaller than the radius of an atom by a factor of about <b>104</b>. This means the volume of a nucleus is about <b>10-12</b> times the volume of the atom. In other words, an atom is almost empty.
            </div>

            <img src={EmptyNuclues} alt="image not found" className='imageCss my-2 ' />

            <div className="text-xl p-2 text-left">
                In the previous chapter, we have learnt that in every atom, the positive charge and mass are densely concentrated at the centre of the atom forming its nucleus. 
                <br/> The overall dimensions of a nucleus are much smaller than those of an atom. Experiments on scattering of α-particles demonstrated that the radius of a nucleus was smaller than the radius of an atom by a factor of about <b>104</b>. This means the volume of a nucleus is about <b>10-12</b> times the volume of the atom. In other words, an atom is almost empty.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis accusantium nam reprehenderit ex fugit autem corrupti error natus expedita, nemo minima enim, praesentium dolore doloribus qui aut provident exercitationem veniam!
            </div>
        </div>
    )
}

export default Introduction