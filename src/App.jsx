import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Introduction from './components/Introduction'
// import NuclearChainReaction from './components/NuclearReact'
import SideBar from './components/sideBar'
import Mcq from './components/Questions/Mcq'
import QuestionCreator from './components/Questions/QuestionCreator'
import Main from './components/NucleusCreator/Main'

function App() {

  return (
    <>
      {/* Side bar  */}
      <div className="header border-2 text-4xl border-black text-center">
        Navbar is working completely fine.
      </div>
      {/* <QuestionCreator />
      <Mcq /> */}

      {/* <section id="content" className='grid grid-cols-9'> */}
      {/* 
        <div id="sideBar" className='col-span-2 utilWireframe bb'>
          <SideBar/>
        </div> */}

      {/* <div className='col-span-9'>

        </div> */}

      {/* <div id="Pages" className='col-span-2 utilWireframe'>
          Inside this page content.
        </div> */}
      {/* </section> */}





      {/* <NuclearChainReaction /> */}

      <div className="bb h-96 flex items-center justify-center">
        <Main />
      </div>

    </>
  )
}

export default App
