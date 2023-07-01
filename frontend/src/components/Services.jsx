import React from 'react'


const Services = () => {
    return (
        <div className='w-full h-full mx-auto poppins pb-8 overflow-hidden relative z-[-1]'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl mx-auto w-full text-center bg-yellow-400 py-3 shadow-lg' data-aos="fade-in">Our Services</h1>
            <div className='flex flex-col w-[90vw] md:w-[70vw] mt-10 mx-auto gap-y-16'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-center justify-center' data-aos="fade-left">
                    <div className='h-full w-[80vw] object-cover overflow-hidden rounded-lg shadow-lg shadow-orange-300'>
                        <img src="./images/serv1.jpg" alt="" className='h-full w-full rounded-lg hover:scale-105 duration-300' />
                    </div>
                    <div className='flex flex-col gap-2 playfair  items-center md:items-start' >
                        <h1 className='text-xl  text-yellow-500 font-semibold md:text-3xl'>Commercial Cleaning</h1>
                        <p className='text-[14px] text-center md:text-left md:text-[18px]'>Contact us for regular or one-time deep cleaning of your business. All types of cleaning for your place of work, factory, etc. are covered. Deep cleaning plus disinfection.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse gap-5 md:gap-8 items-center justify-center' data-aos="fade-right">
                    <div className='h-full w-[80vw] object-cover overflow-hidden rounded-lg shadow-lg shadow-orange-300'>
                        <img src="./images/medical.jpg" alt="" className='h-full w-full rounded-lg hover:scale-105 duration-300  shadow-lg shadow-orange-300' />
                    </div>
                    <div className='flex flex-col gap-2 playfair items-center md:items-start'>
                        <h1 className='text-xl text-yellow-500 font-semibold md:text-3xl'>Medical Centre Cleaning</h1>
                        <p className=' md:text-[18px]'>For all-inclusive medical centre cleaning services at inexpensive rates, call Prime One Cleaning. We provide services to hospitals, clinics, pharmacies, hospital labs and all other types of medical facilities in Melbourne.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-center justify-center' data-aos="fade-left">
                    <div className='h-full w-[80vw] object-cover overflow-hidden rounded-lg shadow-lg shadow-orange-300'>
                        <img src="./images/office.jpg" alt="" className='h-full w-full rounded-lg hover:scale-105 duration-300  shadow-lg shadow-orange-300' />
                    </div>
                    <div className='flex flex-col gap-2 playfair items-center md:items-start'>
                        <h1 className='text-xl text-yellow-500 font-semibold md:text-3xl'>Office Cleaning</h1>
                        <p className=' md:text-[18px]'>Wherever type of office in any industry or size, we can get it cleaned in the least possible time with guaranteed best quality standards. Sweep, vacuum, mop, toilets, kitchens, all covered.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse gap-5 md:gap-8 items-center justify-center' data-aos="fade-right">
                    <div className='h-full w-[80vw] object-cover overflow-hidden rounded-lg shadow-lg shadow-orange-300'>
                        <img src="./images/strata.jpg" alt="" className='h-full w-full rounded-lg hover:scale-105 duration-300  shadow-lg shadow-orange-300' />
                    </div>
                    <div className='flex flex-col gap-2 playfair items-center md:items-start'>
                        <h1 className='text-xl text-yellow-500 font-semibold md:text-3xl'>Strata Cleaning</h1>
                        <p className=' md:text-[18px]'>Hire us for deep cleaning of your strata property. Our service covers the cleaning of all common areas, toilets, corridors, gardens, lifts, staircases, etc. on your residential complex or large buildings.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-max py-8 mx-auto playfair' data-aos="fade-up" data-aos-delay="500">
                <h1 className='text-xl sm:text-2xl lg:text-3xl mx-auto w-full text-center py-3 text-yellow-500 font-semibold'>And Other Services like</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 w-full md:w-[80vw] mx-auto gap-3 mt-5 px-[7px] justify-center'>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-lg text-[14px]'>Carpet Cleaning</h2>
                    </div>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-lg text-[14px]'>Tile Cleaning</h2>
                    </div>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-lg text-[14px]'>Bank/Library Cleaning</h2>
                    </div>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-lg text-[14px]'>End of Lease Cleaning</h2>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full md:w-[50vw] lg:w-[40vw] mx-auto gap-3 mt-5 px-[7px] justify-center'>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-[15px] text-[14px]'>Domestic/General Cleaning</h2>
                    </div>
                    <div className='border-2 border-yellow-400 rounded-xl flex items-center justify-center h-[20vh] px-2 hover:bg-yellow-400 duration-200 hover:text-white hover:shadow-lg'>
                        <h2 className='text-center uppercase md:text-[15px] text-[13px] '>Childcare/School Cleaning</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services