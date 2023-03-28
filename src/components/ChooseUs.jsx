import React from 'react'
import searchIcon from '../assets/search_icon.svg'
import expertiseIcon from '../assets/expertise.svg'
import yearIcon from '../assets/5Years.svg'

const ChooseUs = () => {
  return (
    <div className='flex flex-col py-[4.5rem] px-[8.5rem] bg-[#2F241F] w-full h-[486px] gap-12'>
      <p className='text-[#E5F0B6] font-medium text-base lg:text-lg'>WHY CHOOSE US?</p>
      <h1 className='text-[#E5F0B6] font-bold text-7xl'>We care about details and the quality of our products</h1>
      <div className='flex flex-row gap-40 items-center'>
        <div className='w-[333px]'>
          <span className='flex flex-row items-center gap-3 text-[24px] font-bold text-[#E5F0B6]'>
            <img src={searchIcon} alt='search icon'/>
            MANUFACTURED WITH QUALITY MATERIALS
          </span>
        </div>
        <div className='w-[346px]'>
          <span className='flex flex-row items-center gap-3 text-[24px] font-bold text-[#E5F0B6]'>
            <img src={yearIcon} alt='year icon'/>
            5 YEARS OF WARRANTY FOR EACH PROFUCT
          </span>
        </div>
        <div className='w-[350px]'>
          <span className='flex flex-row items-center gap-3 text-[24px] font-bold text-[#E5F0B6]'>
            <img src={expertiseIcon} alt='expertise icon'/>
            20 YEARS OF EXPERTISE
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs