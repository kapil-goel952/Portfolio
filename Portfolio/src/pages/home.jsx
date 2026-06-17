import React from 'react'
import Herosection from '../Components/home/heroSection'


import { Link } from 'react-router-dom'
import Projects from '../Components/home/HomeProjects'
import LetsBuild from '../Components/home/LetsBuild'

const Home = () => {
  return (
    <div className='flex flex-col gap-2'>

      <Herosection />

    
        <Projects />

      {/* Skills Section */}
      <section className="w-full mt-16 px-4 sm:px-8 lg:px-20">

        <p className="text-white text-3xl sm:text-4xl font-black mb-8">
          <span className="text-purple-500">#</span>Skills
        </p>

        <div className="min-h-100">
          {/* Skills Content */}
        </div>

      </section>

      {/* About Section */}
      <section className="w-full mt-16 px-4 sm:px-8 lg:px-20">

        <p className="text-white text-3xl sm:text-4xl font-black mb-8">
          <span className="text-purple-500">#</span>About Me
        </p>

        <div className="min-h-100">
          {/* About Content */}
        </div>

      </section>

      {/* Contact Section */}
      <LetsBuild/>
    </div>
  )
}
// s;lfj;dlkfasd
export default Home