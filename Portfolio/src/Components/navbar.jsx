import React from 'react'

const navbar = () => {
  return (
    <header className="bg-[#2c3036] sticky top-0 text-white w-full px-20 py-6 flex items-center justify-between">

      {/* Logo Section */}
      <div className="flex items-center gap-x-3">

        <img
          src="logo.png"
          alt="logo"
          className="w-10 h-10 object-contain"
        />

        <h1 className="text-2xl font-semibold tracking-wide">
          Portfolio
        </h1>

      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-x-10 text-[16px]">

        <div className="flex items-center gap-x-1 cursor-pointer hover:text-purple-400 transition">
          <span className="text-purple-500">#</span>
          <button>Home</button>
        </div>

        <div className="flex items-center gap-x-1 cursor-pointer hover:text-purple-400 transition">
          <span className="text-purple-500">#</span>
          <button>Works</button>
        </div>

        <div className="flex items-center gap-x-1 cursor-pointer hover:text-purple-400 transition">
          <span className="text-purple-500">#</span>
          <button>About me</button>
        </div>

        <div className="flex items-center gap-x-1 cursor-pointer hover:text-purple-400 transition">
          <span className="text-purple-500">#</span>
          <button>Contact</button>
        </div>

      </nav>

    </header>
  )
}

export default navbar
