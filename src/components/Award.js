import React from 'react'
import logo from '../components/assets/logo.png';
import cup from '../components/assets/cups.png';



const Award = () => {
  return (
    <div className='w-full container mx-auto bg-pink-50'>
      <div className='gap-4 px-20 py-10  flex flex-col xl:flex-row lg:flex-row md:flex-row items-center justify-between'>
      {/* 1 st */}
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-center items-center '>
        <img src={logo} className='w-15 h-15'/>
        <h1 className='font-bold text-xl'>Our Awards</h1>
        </div>
        <p className='text-black text-center'>hendrerit urna. Pellentesque sit amet <span className='font-semibold'>sapien fringilla </span> 
 rerit urna. Pellentesque sit amet sit sapien dust rigerens vid
hendrerit urna</p>
      </div>
      {/* 2nd */}
      <div className='flex'>
      
      <img src={cup} className='w-227 h-201'/>
      
      </div>
      </div>
    </div>

  )
}

export default Award




