import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Introduction from './components/Introduction'
import NuclearChainReaction from './components/NuclearReact'

function App() {

  return (
    <>
      {/* Side bar  */}
      {/* <div className="header border-2 text-4xl border-black text-center">
        Navbar.
      </div>

      <section id="content" className='grid grid-cols-9'>
        
          <div id="sideBar" className='col-span-2 utilWireframe'>
             Pages Navigation
          </div>

          <div className='col-span-5 border-2  border-black'>
            <Introduction />
          </div>

          <div id="Pages" className='col-span-2 utilWireframe'>
            Inside this page content.
          </div>
      </section> */}



      <NuclearChainReaction />


    </>
  )
}

export default App
