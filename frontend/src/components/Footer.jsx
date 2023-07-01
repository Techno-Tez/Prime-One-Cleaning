import React from 'react'
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-gray-700 w-full h-full poppins text-white mx-auto text-[14px] md:text-[18px] relative z-[-1]'>
                <div className='px-6 md:px-10 py-5 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-4'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl text-yellow-400'>About Us</p>
                        <p className='text-[14px] pr-5'>Your search for reliable cleaning services ends here. At Prime One, we offer a complete range of cleaning solutions for big and small businesses to help keep their workplace spotless always. Call us for professional cleaning services at affordable prices. We service across all suburbs in Melbourne.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl text-yellow-400'>Contact Us</p>
                        <div className='flex flex-col gap-2'>
                            <p className="flex gap-2 items-center"><IoMdCall /><a href="tel:+610490817351"> 0490817351</a></p>
                            <p className="flex gap-2 items-center"><IoMdCall /><a href="tel:+610490817351"> 0490817351</a></p>
                            <p className="flex gap-2 items-center"><CiMail /><a href="mailto:primeonetrading.vic@gmail.com">primeonetrading.vic@gmail.com</a></p>
                            <p className="flex gap-2 items-center"><BsInstagram /><a href="https://instagram.com/primeonecleaning?igshid=MzRlODBiNWFlZA==">Instagram</a></p>
                            
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl text-yellow-400'>Our Services</p>
                        <div className='flex flex-col gap-2'>
                            <Link to="/" >Residential Carpet Cleaning</Link>
                            <Link to="/" >Tile Cleaning</Link>
                            <Link to="/" >End of lease Cleaning</Link>
                            <Link to="/" >Childcare & School Cleaning</Link>
                            <Link to="/" >Hospital and Medical Cleaning</Link>
                            <Link to="/" >Domestic/General Cleaning</Link>
                            <Link to="/" >Bank & Library Cleaning</Link>
                            <Link to="/" >Office & Commercial Cleaning</Link>
                        </div>
                    </div>
                </div>

                <hr className='w-[80vw] mx-auto my-3' />
                <div className='bg-gray-700 w-full h-[10vh] m-auto px-4'>
                    <div className='w-fullh-full flex flex-col items-center justify-center gap-1'>
                        <h2 className='text-center w-full m-auto text-[12px] md:text-[16px]'>Copyright &#169;. All rights reserved. </h2>
                        <h2 className='text-center w-full m-auto text-[12px] md:text-[16px] text-yellow-500'>Prime One Cleaning.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer