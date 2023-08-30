import React from 'react'
import book from '../components/assets/MacBook Pro 16.png';
import book1 from '../components/assets/MacBook Pro 16 (1).png';
import iPhone from '../components/assets/iPhone 12 Pro.png';


const Success = () => {
  return (
    <div className='w-full container mx-auto bg-white-100'>
        <h1 className=' font-bold py-2 lg:mt-10 text-center text-lm lg:text-2xl text-[#000000]'>Our Successfull Projects!</h1>
        <div className="p-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* CARD 1 */}
        <div className='w-full p-2 mt-4 relative bg-gradient-to-b from-green-50 via-pink-20 to-yellow-50 hover:shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-400'>
        <div className=' p-1 rounded-1xl pb-10'>
{/* Image */}
<img src={book}/>

{/* Line */}
<hr className="w-52 h-px mx-auto my-2 bg-[#000000] border-0 dark:bg-black-700"></hr>
<h3 className="text-2xl font-semibold text-[#000000] mt-2 lg:text-left text-center">Homeprenur</h3>
            <p className="mt-1 text-[#000000] text-sm lg:text-left text-center">
              hendrerit urna. Pellentesque sit amet sapien sit
              ifant curse ke meld karosandun.</p>
            <button
              className="mt-2 absolute bottom-0 right-0 rounded-tl-3xl ml-20 lg:ml-48 gap-2 flex bg-gray-700 hover:bg-gray-500 text-white py-1 px-2 rounded-1xl">
              Check<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg></button>
</div>
</div>
{/* CARD 2 */}
<div className="w-full p-2 mt-4 relative bg-gradient-to-b from-green-50 via-pink-20 to-yellow-50  hover:shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-400 ">
        <div class='p-1 rounded-1xl pb-10'>
{/* Image */}
<img src={book1}/>


{/* Line */}
<hr className="w-52 h-px mx-auto my-2 bg-[#000000] border-0 dark:bg-black-700"></hr>
<h3 className="text-2xl font-semibold text-[#000000] mt-2 lg:text-left text-center">Trump Holidays</h3>
            <p className="mt-1 text-[#000000] text-sm lg:text-left text-center">
              hendrerit urna. Pellentesque sit amet sapien sit
              ifant curse ke meld karosandun.</p>
            <button
              className="mt-2 absolute bottom-0 right-0 rounded-tl-3xl ml-20 lg:ml-48 gap-2 flex bg-gray-700 hover:bg-gray-500 text-white py-1 px-2 rounded-1xl">
              Check<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg></button>
</div>
</div>
{/* CARD 3 */}
<div className="w-full  p-2 mt-4 relative bg-gradient-to-b from-green-50 via-pink-20 to-yellow-50 hover:shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-400 ">
        <div className=" p-1 rounded-1xl pb-10 ">
{/* Image */}
<img src={iPhone}/>

{/* Line */}
<hr className="w-52 h-px mx-auto my-2 bg-[#000000] border-0 dark:bg-black-700"></hr>
<h3 className="text-2xl font-semibold text-[#000000] mt-2 lg:text-left text-center">Veg Route</h3>
            <p className="mt-1 text-[#000000] text-sm lg:text-left text-center">
              hendrerit urna. Pellentesque sit amet sapien sit
              ifant curse ke meld karosandun.</p>
              
            <button
              className="mt-2 absolute bottom-0 right-0 rounded-tl-3xl ml-20 lg:ml-48 gap-2 flex bg-gray-700 hover:bg-gray-500 text-white py-1 px-2 rounded-1xl">
              Check<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg></button>
</div>
</div>




</div> 
<div className="p-2 pr-8">
          <h1 className="flex justify-end">See All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          </h1>
          
        </div> 
    </div>
  )
}

export default Success




