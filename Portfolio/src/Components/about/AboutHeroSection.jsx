import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../assets/hero.svg'

const AboutHeroSection = () => {
    return (
        <div className="bg-gray-950 border border-gray-600 rounded-xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 w-full font-sans">

            {/* Left Section */}
            <div className="text-white w-full lg:max-w-2xl">

                <p className="text-4xl sm:text-4xl lg:text-5xl leading-tight font-bold tracking-wide">
                    Who <span className="bg-linear-to-r from-purple-500 via-blue-500 to-blue-300  bg-clip-text text-transparent">am I?</span>
                 </p>
                <p className='text-xl' > <span className="bg-linear-to-r from-purple-500 via-blue-500 to-blue-300  bg-clip-text text-transparent">I build, experiment and explore</span> <br /><span className="bg-linear-to-r from-purple-500 via-blue-500 to-blue-300  bg-clip-text text-transparent">technogolies that inspire</span>.</p>

                <p className="pt-6 text-base sm:text-lg text-gray-400 leading-8 tracking-wide">
               I'm a creative developer who loves turning complex ideas into immersive digital expenences. I enjoy warning with modern technologies, hacking systems, building games, apps and futuristic interfaces
                </p>

                <button
                    className="bg-[#2c3036]  border   mt-6    text-white    px-5    py-2   border-purple-500   hover:bg-purple-500   hover:text-black   transition-all  duration-300     "
                >
                    View My Work !!
                </button>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mt-8">

                    <div className="border border-gray-600 rounded-lg flex items-center p-4 flex-1 min-w-55 hover:border-purple-500 transition-all duration-300">
                        <img
                            src="https://img.icons8.com/?size=100&id=tktxu35Z3Qh1&format=png&color=a855f7"
                            alt="projects"
                            className="h-10 w-10"
                        />
                        <div className="ml-4">
                            <p className="text-2xl text-purple-500 font-bold">15+</p>
                            <p className="text-gray-500">Projects</p>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-lg flex items-center p-4 flex-1 min-w-55 hover:border-purple-500 transition-all duration-300">
                        <img
                            src="https://img.icons8.com/?size=100&id=999&format=png&color=a855f7"
                            alt="experience"
                            className="h-10 w-10"
                        />
                        <div className="ml-4">
                            <p className="text-2xl text-purple-500 font-bold">2+</p>
                            <p className="text-gray-500">Years Learning</p>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-lg flex items-center p-4 flex-1 min-w-55 hover:border-purple-500 transition-all duration-300">
                        <img
                            src="https://img.icons8.com/?size=100&id=122581&format=png&color=a855f7"
                            alt="code"
                            className="h-8 w-8"
                        />
                        <div className="ml-4">
                            <p className="text-2xl text-purple-500 font-bold">10k+</p>
                            <p className="text-gray-500">Lines of Code</p>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-lg flex items-center p-4 flex-1 min-w-55 hover:border-purple-500 transition-all duration-300">
                        <img
                            src="https://img.icons8.com/?size=100&id=8RdWP7lJ6Rir&format=png&color=a855f7"
                            alt="ideas"
                            className="h-10 w-10"
                        />
                        <div className="ml-4">
                            <p className="text-2xl text-purple-500 font-bold">∞</p>
                            <p className="text-gray-500">Ideas Exploring</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Right Section */}
            <div className="mt-10 lg:mt-0 flex flex-col items-center shrink-0 w-full lg:w-auto">

                <img
                    src={Hero}
                    alt="hero image"
                    className="w-full max-w-70 sm:max-w-100 lg:max-w-125 h-auto"
                />

                <div className="border border-purple-500 flex items-center mt-4 px-4 py-2">

                    <div className="w-3 h-3 bg-purple-500 mr-3"></div>

                    <p className="text-gray-400 text-sm sm:text-base">
                        currently working on{" "}
                        <span className="font-bold text-white">
                            Portfolio
                        </span>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default AboutHeroSection
