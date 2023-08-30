import React from 'react'
import fam1 from './assets/fam1.png';


const Hero = () => {
  return (
//     <
<div className='bg-white container mx-auto mt-2 px-10'>

<div className="gap-2 w-full flex flex-col lg:flex-row xl:flex-row md:flex-col justify-center items-center">
    <div className="w-full lg:w-1/2  flex flex-col justify-center mt-16  text-sm">
      <h1 className='text-sm md:text-center lg:text-left text-center '>SHREWD BUSINESS SOLUTIONS</h1>
      <p className=" mt-2 font-bold text-4xl md:text-center lg:text-left text-center">
      Together we can<br/>
      BUILD.
      </p>
      
      <p className="mt-4 text-gray-800 text-lg lg:text-sm md:text-center lg:text-left text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
      </p>
      <div className="flex mt-3  justify-center lg:justify-start">
      <button type="button" class="text-white bg-gray-700 text-sm px-6 py-2 text-center mr-3 md:mr-0 rounded-lg ">Start a Project</button>
      </div>
     
    </div>
    {/* LG screen */}
    <div className=" mt-12 ">
        {/* <img src="/1/fam1.png" alt="" class="object-fit h-68 w-[550px]"> */}
        <img src={fam1} className='w-[460px] h-[310]'/>
      </div>

  </div>
  </div>




  )
}

export default Hero