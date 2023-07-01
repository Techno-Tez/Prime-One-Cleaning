import React from 'react'
import HeroSec2 from './HeroSec2'
import WhySection from './WhySection'
import Services from './Services'
import Footer from './Footer'



const MainPage = () => {
  return (
    <>
      <div className='max-w-1440px z-1 flex flex-col gap-3 absolute'>
        {/* <HeroSection /> */}
        <HeroSec2 className="absolute z-[-1]"/>
        <WhySection className="absolute z-[-1]"/>
        <Services className="absolute z-[-1]"/>
        <Footer className="absolute z-[-1]"/>
               
      </div>
    </>
  )
}

export default MainPage