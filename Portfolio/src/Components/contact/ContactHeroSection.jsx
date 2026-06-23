import React from 'react'
import Hero from '../../assets/hero.svg'


const HeroSection = () => {
    return (
        <div className="bg-gray-950 border-gray-600 border rounded flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 w-full font-sans overflow-hidden">

            {/* Left Section */}
            <div className="text-white max-w-2xl">

                <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-wide">
                    Let's build something <span className="text-purple-500">amazing </span>
                    <span className="text-blue-500">together</span>

                </p>
                <p className="pt-6 text-base sm:text-lg text-gray-400 leading-8 tracking-wide">

                    i'm always open to discussing new ideas collaborations or opportunities to be part of your vision and bring it to life.
                </p>
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
                    </div>
            </div>
            {/* Right Section */}
            <div className="mt-16 lg:mt-0 flex flex-col items-center">
                <img
                    src={Hero}
                    alt="hero image"
                    className="w-75 sm:w-100 lg:w-125 h-auto"
                />
                <div className="border flex items-center mt-4 w-fit px-4 py-2 border-purple-500">

                    <div className="w-3 h-3 bg-purple-500 mr-3"></div>

                    <p className="text-gray-400">
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
export default HeroSection
