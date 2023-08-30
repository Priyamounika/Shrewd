import React from 'react'
import arrow from '../components/assets/arrow.png';
import ellipse from '../components/assets/ellipse.png';

const What = () => {
  return (
    <div className='w-full container mx-auto bg-white mt-4 pb-4'>
    <div className='flex justify-end px-12'>
        <img src={arrow} className='hidden xl:block lg:block  py-2'/>
    </div>
    <div className='gap-8 flex flex-col xl:flex-row lg:flex-row md:flex-col justify-center items-center px-10'>
        <div className='lg:hidden xl:hidden'><h1 className='font-bold text-lg mt-6'>What Our Clients Say About Us</h1></div>
        <div className=''>
        <h1 className='font-bold text-xl hidden lg:block xl:block md:hidden sm:hidden'>What Our Clients<br/> Say About Us</h1></div>
        
        <div className=' flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around gap-2'>
            <div className='w-full sm:w-[350px] h-[220px] bg-gray-800 p-5 rounded-[10px] flex flex-col justify-between'>
<div className='flex items-center gap-4'>
    {/* image */}<img src={ellipse} className='w-14 h-14'/>
    <div>
                  <p class="text-white">Josephine Langford</p>
                  <p class="text-white/30 text-[10px] uppercase">POPPY MATTRESS</p>
                </div>
</div>
<p class="text-white/60 text-sm mt-2 mb-4 line-clamp-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima perferendis dolore tempora saepe fuga vel quidem iure, blanditiis atque laboriosam quibusdam, voluptatem assumenda. Veritatis voluptatibus ipsam iure commodi in.</p>
            </div>
        </div>
        <div className='flex flex-col'>
        <div className='w-full sm:w-[350px] h-[220px] bg-gray-800 p-5 rounded-[10px] flex flex-col justify-between'>
        <div className='flex items-center gap-4'>
    {/* image */}<img src={ellipse} className='w-14 h-14'/>
    <div>
                  <p class="text-white">Josephine Langford</p>
                  <p class="text-white/30 text-[10px] uppercase">POPPY MATTRESS</p>
                </div>
</div>
<p class="text-white/60 text-sm mt-2 mb-4 line-clamp-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima perferendis dolore tempora saepe fuga vel quidem iure, blanditiis atque laboriosam quibusdam, voluptatem assumenda. Veritatis voluptatibus ipsam iure commodi in.</p>
        </div>
        </div>
    </div>
            
    </div>
    
  )
}

export default What


