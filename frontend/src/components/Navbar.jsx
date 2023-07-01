import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import "../css/navbar.css"
import PanelContext from '../context/PanelContext'

const Navbar = () => {
  const [burger, setBurger] = useState(false)
  const { drop, setDrop } = useContext(PanelContext)

  const link = [
    {
      name: "About Us",
      link: "about-us",
      favIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    },
    {
      name: "Contact Us",
      link: "contact-us",
      favIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    },
    {
      name: "Services",
      favIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    }
  ]


  return (
    <>
      <div className='max-w-[1440px] p-3 lg:px-5 flex justify-between bg-white items-center min-h-[10vh] mx-auto poppins z-[90] border-b border-yellow-300 relative'>
        <Link to="/" className='max-w-[35vw] sm:max-w-[20vw] lg:max-w-[8vw]'>
          <img src="./images/logo.png" alt="hello" />
        </Link>

        <div className='relative z-10'>
          <div className='hidden lg:flex items-center gap-8 poppins font-semibold'>

            <Link to="/about-us" className=' hover:bg-yellow-300 hover:text-black py-2 px-4 rounded-lg duration-300 text-black'>About Us</Link>

            <button className="relative cursor-pointer service hover:bg-yellow-300 py-2 px-4 rounded-lg duration-500 service" onClick={() => { setDrop(!drop) }}>
              <h2 className='flex gap-2 items-center'>Services<span className='drop-icon duration-200'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              </span></h2>
            </button>

            <Link to="/contact" className=' hover:bg-yellow-300 hover:text-black py-2 px-4 rounded-lg duration-300'>Contact Us</Link>
          </div>

          <div className='lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setBurger(true)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        {/* This is the dropdown menu */}
        <div className={drop ? 'hidden dropdown absolute opacity-1 top-[100%] left-[50%] dropdown bg-yellow-200 p-4 duration-200 rounded-br-lg rounded-bl-lg md:grid grid-cols-2 w-max gap-4 gap-x-12 z-8' : 'hidden dropdown absolute opacity-0 top-[-100%] left-[50%] dropdown bg-yellow-200 p-4 duration-200 rounded-br-lg rounded-bl-lg md:grid grid-cols-2 w-max  gap-4 gap-x-12 z-8'}>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Residential Carpet Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Tile Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>End of lease Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Childcare & School Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Hospital and Medical Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Domestic/General Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Bank & Library Cleaning</Link>
          <Link to="/" className='hover:text-white duration-300 z-10 cursor-pointer'>Office & Commercial Cleaning</Link>
        </div>

        {burger &&
          <div className='lg:hidden w-full h-screen bg-black opacity-80 fixed z-10 top-0 left-0 duration-200' onClick={() => { setBurger(false) }}> </div>
        }

        <div className={burger ? 'lg:hidden fixed min-w-[80vw] sm:min-w-[40vw] min-h-screen bg-white right-0 top-0 z-20 pt-6 duration-500' : 'lg:hidden fixed min-w-[80vw] sm:min-w-[40vw] min-h-screen bg-white right-[-100%] top-0 z-20 pt-6 duration-500 overflow-hidden'}>
          <div className='flex justify-between items-center px-6'>
            <Link to="/" onClick={()=>setBurger(false)}><img src="./images/logo.png" alt="logo" className="w-[30vw]"/></Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 right-4" onClick={() => setBurger(false)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='flex flex-col pl-5 gap-3 mt-6 relative'>
            {link.map((tag) => {
              return (
                <div>
                  {tag.link &&
                    <Link className='flex gap-2' to={`/${tag.link}`} onClick={()=>setBurger(false)}>
                      {tag.favIcon}
                      {tag.name}
                    </Link>}
                  {!tag.link &&
                    <div className='flex gap-2' onClick={()=>setBurger(false)}>
                      {tag.favIcon}
                      {tag.name}
                    </div>
                  }
                </div>
              )
            })}
          </div>
          <div className='hidden flex-col gap-2 absolute text-[14px] left-10 top-[40%]'>
            <ul className='list-none flex flex-col gap-2'>
              <li className='text-primary'>- Residential carpet cleaning</li>
              <li className='text-primary'>- Tile cleaning</li>
              <li className='text-primary'>- End of lease cleaning</li>
              <li className='text-primary'>- Childcare and School cleaning</li>
              <li className='text-primary'>- Hospital and Medical cleaning</li>
              <li className='text-primary'>- Domestic/General cleaning</li>
              <li className='text-primary'>- Bank and Library cleaning</li>
              <li className='text-primary'>- Office and Commercial cleaning</li>
            </ul>
          </div>
        </div>


      </div>
    </>
  )
}

export default Navbar