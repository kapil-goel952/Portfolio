import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Coverage from './Pages/CoverageArea'
import About from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'



function App() {
  return (
  
    <div className=''>
      <div className='flex flex-col min-h-screen'>
        <Navbar />

        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Services />} />
            <Route path='/Coverage' element={<Coverage />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
