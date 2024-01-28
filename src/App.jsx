import React from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Image from './components/Image'
import Details from './components/Details'

const App = () => {
  return (
    <div className='w-full h-screen bg-white'>

      <Navbar />
      <Marquee />
      <Image />
      <Details />
    </div>
  )
}

export default App