import React from 'react'
import three from '../components/assets/three.png'

const Quote = () => {
  return (
    <div className='w-full container mx-auto px-2 '>
        <div className='lg:flex '>
            <img src={three} className='p-16'/>
            <div className='lg:mt-40 '>
                <div className='flex flex-col lg:flex-col xl:flex-col items-center lg:items-start mt-1 gap-5 '>
                    <h1 className='font-bold text-xl  mt-1'>Our Vision</h1>
<p className='lg:text-lm text-[#000000] px-10 md:px-[8rem] lg:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
 Aliquam in hendrerit urna. Pellentesque sit Lorem ipsum dolor sit amet.</p>
 <p className='text-lm text-[#000000] px-10 md:px-[8rem] lg:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
<div className=''>
 <button
          className='mt-4 rounded-[4px] bg-gray-800 hover:bg-gray-500 text-white w-[10rem] h-[3rem]'>Get
          in Quate</button></div>


                </div>
                
                
                
                
                </div>     
        </div>
        
        </div>
  )
}

export default Quote


