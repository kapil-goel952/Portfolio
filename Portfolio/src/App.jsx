import React from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'



const App = () => {
  return (
    <div className='pl-30 pr-30 font-serif w-screen min-h-screen bg-[#282c33]'>
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
// Creative developer focused on building immersive and meaningful experiences
export default App


