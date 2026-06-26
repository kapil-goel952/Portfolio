import React from 'react'
import HeroSection from '../Components/HeroSection'
import OurServices from '../Components/Home/ServicesCard'
import HowItWorks from '../Components/Home/HowItWirks'
import OurCoverage from '../Components/Home/Ouw coverage'
import ReadyToUpgrade from '../Components/Home/UpgradeFarming'


const Home = ({hero}) => {
  
  return (
    <div>
         <HeroSection hero={hero}/>
        <OurServices/>
        <HowItWorks/> 
        <OurCoverage/>
        <ReadyToUpgrade/>
    </div>
  )
}

export default Home
