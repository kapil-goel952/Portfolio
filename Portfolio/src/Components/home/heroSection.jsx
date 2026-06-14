import React from 'react'
import Hero from '../../assets/hero.svg'


const HeroSection = () => {
    return (
        <div className="bg-[#2c3036] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 w-full font-sans overflow-hidden">

            {/* Left Section */}
            <div className="text-white max-w-2xl">

                <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-wide">
                    Kapil a <span className="text-purple-400">Creative Developer </span>
                    focused on building <span className="text-purple-400">Immersive </span>
                    and <span className="text-purple-400">Meaningful Experiences</span>

                </p>
                <p className="pt-6 text-base sm:text-lg text-gray-400 leading-8 tracking-wide">

                    Transforming ideas into meaningful and
                    interactive experiences

                </p>
                <button className="bg-[#2c3036] border mt-6 text-white px-5 py-2 hover:bg-purple-400 hover:text-black transition-all duration-500 border-purple-400">

                    Contact me !!

                </button>
            </div>
            {/* Right Section */}
            <div className="mt-16 lg:mt-0 flex flex-col items-center">
                <img
                    src={Hero}
                    alt="hero image"
                    className="w-75 sm:w-100 lg:w-125 h-auto"
                />
                <div className="border flex items-center mt-4 w-fit px-4 py-2 border-purple-400">

                    <div className="w-3 h-3 bg-purple-400 mr-3"></div>

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
