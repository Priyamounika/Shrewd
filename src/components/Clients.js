import React from 'react'
import natural from '../components/assets/naturals.png'
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
    <div className='w-full container mx-auto bg-blue-50 mb-10 mt-10 flex flex-col justify-start pb-10'>
        <h1 className='font-bold mt-2 py-2 lg:mt-2 text-center lg:text-left text-lm lg:text-xl text-[#000000] px-4'>Our Clients</h1>
        <p className='text-center lg:text-left px-4 mt-2 text-sm font-normal'>hendrerit urna. Pellentesque sit amet <span
                className='font-semibold text-[#000000]'>sapien fringilla.</span></p>
 
 
 <div className='justify-center flex flex-wrap lg:grid grid-cols-5 pb-1 lg:pb-2 p-2 lg:p-6 mt-0 lg:mt-6 gap-8'>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={natural} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={yara} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={college} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={kovai} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={big} className='w-32 h-24'/>
</div>
</div>


<div className='justify-center flex flex-wrap lg:grid grid-cols-5 pb-1 lg:pb-2 p-2 lg:p-6 mt-0 lg:mt-6 gap-8 '>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={krishna} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={phr} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={eng} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={soul} className='w-32 h-24'/>
</div>
<div className='bg-gray-50 p-10 rounded-tr-3xl border border-[#000000] hover:border-gray-800 shadow-lg'>
{/* img */}
<img src={steels} className='w-36 h-24'/>
</div>


</div>

 </div>
// Cards







  )
}

export default Clients


