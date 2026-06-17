import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-gray-600 border rounded-xl w-full  px-4 sm:px-8 lg:px-20 py-10">

            <div className="flex flex-col lg:flex-row gap-8 justify-between">

                {/* Brand Section */}
                <div className="max-w-md">

                    <div className="flex items-center gap-3">

                        <img
                            src="logo.png"
                            alt="logo"
                            className="w-10 h-10 object-contain"
                        />

                        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
                            KAPIL
                        </h1>

                    </div>

                    <p className="text-gray-500 text-base sm:text-lg mt-4">
                        Building futuristic experiences
                        <br />
                        through code & creativity
                    </p>

                </div>

                {/* Navigation */}
                <div className="border-l-4 border-b border-gray-500 rounded-xl p-5 min-w-55">

                    <p className="text-xl sm:text-2xl text-purple-500 font-black">
                        NAVIGATION
                    </p>

                    <div className="flex flex-col gap-2 text-gray-500 text-lg mt-4">

                        <Link to="/" className='hover:text-gray-300 hover:font-black transition-all duration-200'>_Home</Link>
                        <Link to="/Work" className='hover:text-gray-300 hover:font-black transition-all duration-200'>_Work</Link>
                        <Link to="/About" className='hover:text-gray-300 hover:font-black transition-all duration-200'>_About</Link>
                        <Link to="/Contact" className='hover:text-gray-300 hover:font-black transition-all duration-200'>_Contact</Link>

                    </div>

                </div>

                {/* Contact */}
                <div className="border-l-4 border-b border-gray-500 rounded-xl p-5 min-w-55">

                    <p className="text-xl sm:text-2xl text-purple-500 font-black">
                        CONTACT
                    </p>

                    <div className="flex flex-col gap-2 text-gray-500 text-lg mt-4">

                        <Link to="" className='hover:text-gray-300 hover:font-black transition-all duration-200'>Github</Link>
                        <Link to="" className='hover:text-gray-300 hover:font-black transition-all duration-200'>Email</Link>
                        <Link to="" className='hover:text-gray-300 hover:font-black transition-all duration-200'>LinkedIn</Link>
                        <Link to="" className='hover:text-gray-300 hover:font-black transition-all duration-200'>Instagram</Link>

                    </div>

                </div>

                {/* Status */}
                <div className="border-l-4 border-b border-gray-500 rounded-xl p-5 min-w-55">

                    <p className="text-xl sm:text-2xl text-purple-500 font-black">
                        CURRENT STATUS
                    </p>

                    <div className="flex items-center mt-4">

                        <div className="h-2 w-2 bg-green-300 rounded-full"></div>

                        <p className="text-gray-500 text-lg ml-3">
                            Available for Work
                        </p>

                    </div>

                    <p className="text-gray-500 text-lg mt-4">
                        Let's create something
                        <br />
                        extraordinary together
                    </p>

                </div>

                {/* Terminal Card */}
                <div className="flex flex-col justify-between">

                    <div className="border border-gray-500 rounded-xl border-l-4 border-b-2 p-5">

                        <p className="text-blue-400">&gt; stay curious</p>
                        <p className="text-blue-400">&gt; keep building</p>
                        <p className="text-blue-400">&gt; never stop learning</p>
                        <p className="text-blue-400">&gt; think creative</p>

                    </div>

                    <p className="text-gray-500 text-sm sm:text-base mt-4">
                        designed and made with ❤️ using React
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer