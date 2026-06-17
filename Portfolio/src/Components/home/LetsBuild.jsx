import React from 'react'
import { Link } from 'react-router-dom'

const LetsBuild = () => {
  return (
   <section className="w-full border-gray-600 border rounded  py-10 sm:px-8 lg:px-20">

        {/* Heading */}
        <p className="text-white text-3xl sm:text-4xl font-black mb-8">
          <span className="text-purple-500">#</span>
          Let's Buuild something Amazing
        </p>


        <div className="border border-gray-700 rounded-xl p-6 lg:p-8 bg-[#2c3036]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

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

            <div className="max-w-md">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I'm always open to discussing new ideas,
                collaborations, creative projects and
                exciting opportunities.
              </p>
            </div>

            <div>
              <Link to="/Contact" className="inline-block bg-linear-to-r from-purple-500 to-purple-700 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

  )
}

export default LetsBuild
