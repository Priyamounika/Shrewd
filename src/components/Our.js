import React from 'react'
import girl from '../components/assets/pinkgirl.png';

const Our = () => {
  return (
    <div className='w-full container mx-auto bg-white mt-4 pb-4 px-10'>
      <h1 className='font-bold text-2xl ml-[1.5rem] md:ml-[15rem] lg:ml-[18rem] xl:ml-[18rem] flex justify-center  mb-2'> Our Hilights, Since 2018</h1>
<div className='flex justify-center items-center flex-col md:flex-row lg:flex-row xl:flex-row'>
  <img src={girl} className='md:w-[16rem] md:h-[18.5rem] lg:w-[19.5rem] lg:h-[18.5rem] xl:w-[19.5rem] xl:h-[18.5rem]'/>
  <div className=''>
    <div className='gap-5 md:gap-12 lg:gap-5 xl:gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-1 lg:mt-2 pb-4'>
      <div className='bg-gray-50 p-6 w-[150px] h-[150px] rounded-tr-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className="p-3 font-bold text-2xl text-center text-[#000000]">50+</h1>
              <p className="text-center text-[#000000]">Projects</p>
      </div>
      <div className='bg-gray-50 p-6 w-[150px] h-[150px]  rounded-tl-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className="p-3 font-bold text-2xl text-center text-[#000000]">125+</h1>
              <p className="text-center text-[#000000]">Million users</p>
      </div>
      <div className='bg-gray-50 p-6 w-[150px] h-[150px] rounded-tr-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className='p-3 font-bold text-2xl text-center text-[#000000]'>50+</h1>
              <p className="text-center text-[#000000]">Projects</p>
      </div>
    </div>
    <div className='gap-5 md:gap-12 lg:gap-5 xl:gap-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-1 lg:mt-2 pb-4'>
    <div className='bg-gray-50 p-6 w-[150px] h-[150px] rounded-tl-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className='p-3 font-bold text-2xl text-center text-[#000000]'>125+</h1>
              <p className='text-center text-[#000000]'>Million users</p>
      </div>
      <div className='bg-gray-50 p-6 w-[150px] h-[150px] rounded-tr-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className='p-3 font-bold text-2xl text-center text-[#000000]'>50+</h1>
              <p className='text-center text-[#000000]'>Projects</p>
      </div>
      <div className='bg-gray-50 p-6 w-[150px] h-[150px] rounded-tl-3xl border border-gray-400 hover:border-gray-800 shadow-lg'>
      <h1 className='p-3 font-bold text-2xl text-center text-[#000000]'>125+</h1>
              <p className='text-center text-[#000000]'>Million users</p>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Our

