import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky border border-gray-600 rounded-xl top-0 z-50 bg-[#282c33]/90 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-6 flex flex-col md:flex-row justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            Portfolio
          </h1>

        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base">

          <Link
            to="/"
            className="flex items-center gap-1 hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>
            Home
          </Link>

          <Link
            to="/Work"
            className="flex items-center gap-1 hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>
            Work
          </Link>

          <Link
            to="/About"
            className="flex items-center gap-1 hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>
            About Me
          </Link>

          <Link
            to="/Contact"
            className="flex items-center gap-1 hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>
            Contact
          </Link>

        </nav>

      </div>

    </header>
  )
}

export default Navbar