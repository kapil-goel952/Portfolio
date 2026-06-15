import React from 'react'
import Herosection from '../Components/home/heroSection'

import ProjectCard from '../Components/home/ProjectCard'
import { Link } from 'react-router-dom'
import Projects from '../Components/home/Projects'

const Home = () => {
  return (
    <div>

      <Herosection />

      <section className="w-full mt-10 px-4 sm:px-8 lg:px-20">

        <p className="text-white text-3xl sm:text-4xl font-black mb-8">
          <span className="text-purple-500">#</span>Projects
        </p>
        <Projects />
      </section>

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
      <section className="w-full mt-16 px-4 sm:px-8 lg:px-20 mb-20">

        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl  mb-10">
          <span className="text-purple-500">#</span>
          LET'S BUILD SOMETHING AMAZING
        </h2>

        {/* Content Card */}
        <div className="border border-gray-700 rounded-xl p-6 lg:p-8 bg-[#2c3036]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left */}
            <div className="flex items-center gap-5">
              <img
                src="https://img.icons8.com/?size=100&id=7OTzx1U7zZJE&format=png&color=7950F2"
                alt="mail"
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
                Have a project in mind
                <br />
                or just want to say hi?
              </p>
            </div>
            {/* Middle */}
            <div className="max-w-md">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I'm always open to discussing new ideas,
                collaborations, creative projects and
                exciting opportunities.
              </p>
            </div>
            {/* Right */}
            <div>
              <Link to="/Contact" className="inline-block bg-linear-to-r from-purple-500 to-purple-700 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home