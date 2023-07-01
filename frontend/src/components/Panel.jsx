import React from 'react'

const Panel = ({ panel, setPanel }) => {
  return (
    <div className={panel ? 'z-[111] fixed rounded-tl-lg rounded-bl-lg h-max poppins top-0 left-[0%] sm:left-[50%] md:left-[70%] bg-white px-5 py-6 border border-gray-400 duration-200 w-full sm:w-[50%] md:w-[30%] md:top-[10%]' : 'z-[111] fixed rounded-lg h-max poppins top-0 left-[100%] bg-white px-5 py-10 border border-gray-400 duration-200 w-full sm:w-[50%] md:w-[30%] md:top-[10%]'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 absolute top-3 right-3 cursor-pointer" onClick={() => setPanel(false)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

      <form action="https://nocodeform.io/f/649ffdee43b91c149eae6790" method='POST' className='flex flex-col gap-3 items-center justify-center w-full'>
        <h1 className='text-yellow-500 text-center text-xl'>Booking Form</h1>
        <h3 className='text-[10px] text-green-600'>*Once you submit the form we will get back to you as soon as possible.</h3>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id="name" placeholder='John Doe' required />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id="email" placeholder='Your email' required />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder='+61 049051XXXX' required />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="service">Service for</label>
          <select name="service" id="service" className="">
            <option value="Residential Carpet Cleaning">Residential Carpet Cleaning</option>
            <option value="Tile Cleaning">Tile Cleaning</option>
            <option value="End of lease Cleaning">End of lease Cleaning</option>
            <option value="Childcare & School Cleaning">Childcare & School Cleaning</option>
            <option value="Hospital and Medical Cleaning">Hospital and Medical Cleaning</option>
            <option value="Domestic/General Cleaning">Domestic/General Cleaning</option>
            <option value="Bank & Library Cleaning">Bank & Library Cleaning</option>
            <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" id="comments" cols="10" rows="5" placeholder='Any comments....'></textarea>
        </div>
        <button type="submit" className='px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg text-[13px] md:text-[16px]'>Submit</button>
      </form>
    </div>
  )
}

export default Panel