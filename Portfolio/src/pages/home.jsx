import React from 'react'
import Herosection from '../Components/home/heroSection'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/home/ProjectCard'



const Home = () => {
  return (
    <div>
      <Herosection />
      <div className="projects h-120 bg-amber-950 flow-root w-full mt-5 font-mono  px-20 mb-10">
        <p className='text-white text-4xl mt-6 mb-10 font-black'><span className='text-purple-500 text-4xl'>#</span>Projects</p>
        <div className='flex gap-7  flex-nowrap overflow-x-scroll'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

      </div>
      <div className="skills h-150 bg-amber-950 w-full   mt-5 font-mono px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-500 text-4xl'>#</span>Skills</p>
      </div>
      <div className="about me h-150 bg-amber-950 w-full mt-5 font-mono   px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-500 text-4xl'>#</span>About me</p>
      </div>
      <div className="contact h-150 bg-amber-950 w-full mt-5 font-mono   px-20 mb-10">
        <p className='text-white text-4xl font-black'><span className='text-purple-500 text-4xl'>#</span>Contact</p>
      </div>
    </div>
  )
}

export default Home
