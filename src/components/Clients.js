import React from 'react'
import natural1 from '../components/assets/naturals1.png'
import yara from '../components/assets/yara.png'
import college from '../components/assets/college.png'
import kovai from '../components/assets/kovai_virunthu.png'
import big from '../components/assets/big.png'
import krishna from '../components/assets/krishna_college.png'
import phr from '../components/assets/phr.png'
import eng from '../components/assets/eng.png'
import soul from '../components/assets/soul.png'
import steels from '../components/assets/steels.png'

const Clients = () => {
  return (
    <div className='container mx-auto bg-blue-50'>
    <div className='w-full   mb-10 mt-10 flex flex-col justify-start pb-10 px-10'>
        <h1 className='font-bold mt-2 py-2 lg:mt-2 text-center lg:text-left text-lm lg:text-xl text-[#000000] px-4'>Our Clients</h1>
        <p className='text-center lg:text-left px-4 mt-2 text-sm font-normal pb-5'>hendrerit urna. Pellentesque sit amet <span
                className='font-semibold text-[#000000]'>sapien fringilla.</span></p>
 
 <div className='px-20 md:px-10 lg:px-3 xl:px-0'>
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-10'>
    <div className='bg-gray-50 rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={natural1} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='sm:w-full bg-gray-50 rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={yara} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={college} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={kovai} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={big} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={krishna} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={phr} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={eng} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={soul} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
      <div className='bg-gray-50  rounded-tr-3xl border-2 border-gray-800 px-5 py-10 flex justify-center items-center shadow-lg'>
      <img src={steels} className='w-[100px] h-[40px] md:w-[100px] md:h-[70px] lg:w-[100px] lg:h-[70px] xl:w-[100px] xl:h-[70px]'/>
      </div>
  </div>
 </div>
 {/* <div className='justify-center p-6 grid-cols-1 grid md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-5 pb-1 lg:pb-2  lg:p-6 mt-0 lg:mt-6 gap-8'>
<div className='bg-gray-50 flex justify-center items-center p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={natural1} className='w-[7rem] h-[4rem]'/>
</div>
<div className='bg-gray-50 flex justify-center items-center p-6 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={yara} className='w-[7rem] h-[5rem]'/>
</div>
<div className='bg-gray-50 flex justify-center items-center p-6 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={college} className='w-[6rem] h-[5rem]'/>
</div>
<div className='bg-gray-50 flex justify-center items-center p-6 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={kovai} className='w-[5rem] h-[4rem]'/>
</div>
<div className='bg-gray-50 flex justify-center items-center p-6 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={big} className='w-[5rem] h-[5rem]'/>
</div>
</div>


<div className='justify-center flex flex-wrap lg:grid grid-cols-5 pb-1 lg:pb-2 p-2 lg:p-6 mt-0 lg:mt-6 gap-8 '>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={krishna} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={phr} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={eng} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={soul} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>

<img src={steels} className='w-36 h-24'/>
</div>


</div> */}

 </div>
 </div>
// Cards







  )
}

export default Clients


