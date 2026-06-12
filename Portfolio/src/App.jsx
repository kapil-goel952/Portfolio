import React from 'react'
import "tailwindcss";
const App = () => {
  return (
    <div className='bg-[#2d3441] h-50 flex justify-between text-white w-full pl-20 pr-20    ' >
      <div className='flex mt-20 '>
        <img src="logo.png" alt="logo" />
        <h1>Portfolio</h1>
      </div>

      <div className=' flex mt-15 pt-3 gap-x-10 '>
         <div className=' bg-black flex'>
          <p className='text-[purple]'>#</p>
          <button >Home</button>
        </div>
         <div className=' bg-black flex'>
          <p className='text-[purple]'>#</p>
          <button >Works</button>
        </div>
         <div className=' bg-black flex'>
          <p className='text-[purple]'>#</p>
          <button >About me</button>
        </div>
         <div className=' bg-black flex'>
          <p className='text-[purple]'>#</p>
          <button >Contact</button>
        </div>
       


      </div>

    </div>
  )
}

export default App
