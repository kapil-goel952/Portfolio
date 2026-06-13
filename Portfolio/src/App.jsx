import React from 'react'
import Navbar from './Components/navbar'
import HeroSection from './Components/heroSection'
import Hero from './assets/hero.svg'


const App = () => {
  return (
    <div className='pl-30 pr-30 font-serif h-full w-s bg-[#282c33]'>
      <Navbar />
      <HeroSection/>
    </div>
  )
}
// Creative developer focused on building immersive and meaningful experiences
export default App


