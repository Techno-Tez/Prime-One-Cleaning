import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { RxCalendar } from "react-icons/rx"
import { BsWhatsapp } from "react-icons/bs"
import Panel from './Panel'

const Layout = () => {
  const [panel, setPanel] = useState(false)
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar className="absolute z-10"/>
        <Outlet className="absolute z-1"/>
        {!panel && <div className={"rounded-tr-lg rounded-tl-lg bg-blue-400 text-white right-[-48px] fixed top-[45%] flex gap-2 py-2 px-4 items-center -rotate-90 cursor-pointer hover:shadow-lg duration-200"} onClick={() => { setPanel(true) }}>
          <RxCalendar />
          <h3>Book Now!</h3>
        </div>}

        <Panel panel={panel} setPanel={setPanel} className="relative z-[100]"/>

        <div className='rounded-full fixed bottom-5 left-5 bg-green-600 p-3 text-white shadow-md cursor-pointer'>
          <a href="https://wa.me/61490817351" className="hover:text-white"><BsWhatsapp size={30} /></a>
        </div>

      </div>
    </>
  )
}

export default Layout