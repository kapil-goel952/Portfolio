import React from 'react'
import Navbar from './Components/navbar'
import HeroSection from './Components/home/heroSection'
import Footer from './Components/footer'


const App = () => {
  return (
    <div className='pl-30 pr-30 font-serif w-screen bg-[#282c33]'>
      <Navbar />
      <HeroSection />
      <div className="projects h-150 bg-amber-950 w-full  font-mono  px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-400 text-4xl'>#</span>Projects</p>
      </div>
      <div className="skills h-150 bg-amber-950 w-full     font-mono px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-400 text-4xl'>#</span>Skills</p>
      </div>
      <div className="about me h-150 bg-amber-950 w-full font-mono   px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-400 text-4xl'>#</span>About me</p>
      </div>
      <div className="contact h-150 bg-amber-950 w-full font-mono   px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-400 text-4xl'>#</span>Contact</p>
      </div>
      <Footer/>
    </div>
  )
}
// Creative developer focused on building immersive and meaningful experiences
export default App


