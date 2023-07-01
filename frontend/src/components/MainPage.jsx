import React from 'react'
import HeroSec2 from './HeroSec2'
import WhySection from './WhySection'
import Services from './Services'
import Footer from './Footer'



const MainPage = () => {
  return (
    <>
      <div className='max-w-1440px z-1 flex flex-col gap-3 relative'>
        {/* <HeroSection /> */}
        <HeroSec2 className=""/>
        <WhySection className=""/>
        <Services className=""/>
        <Footer className=""/>
               
      </div>
    </>
  )
}

export default MainPage