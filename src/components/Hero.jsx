import React from 'react'
import image from '../assets/image-64.png'
import search from '../assets/search.svg'
import play from '../assets/play_circle_outline.svg'
import right from '../assets/chevron_right.svg'

const Hero = (style) => {
  return (
    <div className='flex flex-row'>
      <section className='px-4 py-8 lg:ml-[142px]'>
        <h2 className='text-[32px] font-bold text-center lg:text-left lg:font-extrabold lg:text-8xl lg:px-5 lg:py-16 text-[#2F241F]'>The kind of <br/><span className="text-[#817253]">furniture</span> you have <br/>been looking for</h2>
        <div className='px-4 flex flex-row gap-4'>
          <button className='bg-[#E5F0B6] rounded-lg py-5 px-7'>
            <span className='flex flex-row gap-2'><img src={search} alt='search icon'/> SEARCH CATALOG</span>
          </button>
          <button className='bg-transparent border border-slate-900 rounded-lg py-5 px-10'>
            <span className='flex flex-row gap-2'><img src={play} alt='play icon'/> WATCH VIDEOS</span>
          </button>
        </div>
      </section>
      <section className='absolute right-0 top-15'>
        <img src={image} alt='hero image' className=' w-[522px] h-[680px]'/>
        <div className='py-3 px-2 bg-white opacity-50 absolute top-[413px] left-[48px] rounded-lg'>
          <p>$329</p>
        </div>
        <h2 className='text-white font-medium text-6xl absolute left-[48px] top-[473px]'>Pösht Sofa</h2>
        <button className='bg-[#2F241F] text-white rounded-lg py-4 px-6 absolute left-[48px] top-[546px]'>
          <span className='flex flex-row gap-2'>VIEW DETAILS <img src={right} alt='right arrow icon'/></span>
        </button>
      </section>
    </div>
  )
}

export default Hero