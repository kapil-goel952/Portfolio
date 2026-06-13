import React from 'react'
import Navbar from './Components/navbar'
import Hero from './assets/hero.svg'

const App = () => {
  return (
    <div className='pl-30 pr-30 bg-[#282C33]'>
      <Navbar></Navbar>
      <div className="bg-[#7585a3] flex pr-25 pt-30 pl-18  justify-between h-250  w-full" >
        <div className='font-serif'>
          <p  className='text-5xl tracking-wide'>
            Kapil is a <span className='text-purple-400'>web designer</span> and<br/> <span className='text-purple-400'>Front-end Developer</span>
          </p>
          <p className='pt-4 text-xl tracking-widest'>He crafts Responsive websites where technology <br /> meets creativity</p>
          <button className='bg-[#2d3441] border- mt-4 text-white p-1  border-purple-400'>Contact me !!</button>
        </div>
        <div>
          <img src={Hero} alt="hero image" className='h-[550px]' />

        </div>

        {/* <img src={Hero} alt="hero image" /> */}
        {/* <h1>asdofjasd</h1> */}
      </div>
    </div>
  )
}

export default App


