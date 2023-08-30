import React from 'react'
import android from '../components/assets/a2.png';
import ios from '../components/assets/ios.jpg';
import web from '../components/assets/web.png';

const Wedo = () => {
  return (
    <div className='w-full mx-auto bg-white'>
      <div className='text-center mt-12 font-bold text-2xl text-[#000000]'>What we Do?</div>
    <div className='flex justify-center items-center'>
      <div className='flex w-fit justify-center items-center mt-8 border border-gray-300 rounded-lg'>
        <ul className='flex gap-6 font-normal text-sm pr-4'>
<li className=''>
  <div className='flex gap-1 items-center '>
    {/* IMAGE */}<img src={android} className='w-12 h-12'/>
    <p>Android</p>
  </div>
</li>
<li className=''>
  <div className='flex gap-2 items-center '>
    {/* IMAGE */}<img src={ios} className='w-12 h-12'/>
    <p>IOS</p>
  </div>
</li>
<li className='flex justify-around'>
  <div className='flex gap-2 items-center'>
    {/* IMAGE */}<img src={web} className='w-10 h-10'/>
    <p>Web</p>
  </div>
</li>




        </ul>
      </div>
    </div>
    
    
    
    
    
    </div>
  )
}

export default Wedo


