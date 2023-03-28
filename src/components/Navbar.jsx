import React from 'react'
import logo from '../assets/logo.svg'
import arrow from '../assets/keyboard_arrow_down.svg'
import bag from '../assets/shopping_bag.svg'

const Navbar = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 shadow-lg shadow-slate-50">
        <div>
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </div>

        <div className='flex flex-row gap-7'>
          <h2 className="font-inter font-medium text-black">About Us</h2>
          <h2 className="font-inter font-medium text-black flex flex-row items-center gap-1">Furniture <span><img src={arrow} alt="arrow" className='w-[16px]'/></span></h2>
          <h2 className="font-inter font-medium text-black">Partnerships</h2>
          <h2 className="font-inter font-medium text-black">Contact</h2>
        </div>

        <div className='flex flex-row gap-2'>
          <div className="font-inter font-medium bg-[#E5F0B6] text-black px-4 py-2 rounded-md">Sign Up</div> 
          <div className="font-inter font-medium bg-[#553B33] text-white py-2 px-2 rounded-md"><img src={bag} alt='bag'/></div> 
        </div>
        
      </header>
    </>
  )
}

export default Navbar