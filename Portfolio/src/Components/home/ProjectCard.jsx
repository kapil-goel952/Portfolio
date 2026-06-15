import React from 'react'
import { Link } from 'react-router-dom'


const ProjectCard = () => {
    return (
        <div className="card h-75 flex shrink-0 flex-col w-120 border-2 rounded-xl justify-end px-4 py-3">
            <p className='text-[18px] text-purple-600 my-3 font-black'>Web app</p>
            <p className='text-2xl text-white font-black'>Cyber Dashboard</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa sequi eos natus pariatur quidem </p>
            <div className='my-3'>
                <span className='text-blue-400 text-[18px]'>react</span>
                <span className='text-blue-400 text-[18px]'> Tailwind</span>
                <span className='text-blue-400 text-[18px]'> charts.js</span>
            </div>

            <Link to={''} className='text-purple-500  text-[18px] font-black hover:text-white transition-all duration-500'>View Project →</Link>
        </div>
    )
}

export default ProjectCard
