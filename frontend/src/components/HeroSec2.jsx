import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const HeroSec2 = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <>
    <div className='w-full h-[80vh] md:h-[80vh] relative playfair'>
        <img src="./images/img1.jpeg" alt="" className='w-full h-full object-cover object-center opacity-80 z-1 absolute'/>
        <h2 className='inline absolute bottom-[15%] left-[3%] text-2xl md:text-3xl lg:text-5xl uppercase bg-white px-3 py-2  shadow-md z-2' data-aos="flip-up">Cleaning services that <span className='text-yellow-500'>sparkle</span></h2>
    </div>
    </>
  )
}
export default HeroSec2