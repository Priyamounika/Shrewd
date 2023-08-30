
import React from 'react'
      
      
      import {MdLocationOn} from 'react-icons/md';
      import {BsFillTelephoneFill} from 'react-icons/bs';
      import {GrMail} from 'react-icons/gr';
      import group from '../components/assets/group 2816.png';
      import {BiLogoLinkedinSquare} from 'react-icons/bi';
      import {AiFillFacebook} from 'react-icons/ai';
      import {FaDotCircle} from 'react-icons/fa';
      import {IoLogoYoutube} from 'react-icons/io';

      
      
      const Footers = () => {
        return (
        
          <div className='bg-[#EDFFFC9C] pb-2 mt-6 container mx-auto px-10'>
          <div className='pb-2 w-full container mx-auto shadow-xl px-8 md:px-10 lg:px-14 xl:px-10 flex flex-col gap-10 items-center md:items-start lg:items-start xl:items-start'><div className='flex mt-4'><img src={group} className='w-10 h-12'/>
          <h1 className='font-bold text-[#000000] text-sm lg:text-2xl p-4 lg:p-1'>Shrewd Business Solutions</h1></div>
            <p className='font-bold text-[#000000] text-sm lg:text-lg items-center md:items-start lg:items-start xl:items-start'>Services</p>
          
          <div className='mt-[-16px] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between w-full gap-10'>
            
          <ul className='flex flex-col gap-3'>
                       <li>Web Development </li>
                       <li >Mobile Application Development</li>
                       <li >Digital Marketing</li>
                       <li >UI UX Designing</li>
                     </ul>
            
                     <ul className='flex flex-col gap-3'>
                 <li>Meet our Team</li>
                 <li>Who we are?</li>
                 <li>Our Projects</li>
                 <li>Contact us</li>
             </ul>
            <ul className='flex flex-col gap-3 text-lg'>
            
              <li className='flex gap-2'> <MdLocationOn className='w-6 h-6'/>NO.175,Chandragiri Building 2nd Floor, <br/>
Avaram Palayam Rd,<br/>
New Siddhapudur,Tamil Nadu 641044</li>
                <li className='flex gap-2'><BsFillTelephoneFill className='w-6 h-6'/>099528 44699</li>
        
                <li className='flex gap-2'><GrMail className='w-6 h-6'/>Shrewdbs530@gmail.com</li>
            </ul> </div>
            <div class="w-full flex justify-center">
               <div class="w-[300px] h-[2px] shadow-2xl bg-black/80"></div>
               </div>
<div className='flex flex-row justify-center items-center gap-2 w-full'>
    <h1 class="font-bold text-center text-1xl lg:text-2xl text-[#000000] mt-[-26px]">Follow Us On </h1>
    <div className='flex mt-[-20px] gap-0.5'>
      <p><BiLogoLinkedinSquare className='w-6 h-6'/></p>
      <p><AiFillFacebook className='w-6 h-6'/></p>
      <p><FaDotCircle className='w-6 h-6'/></p>
      <p><IoLogoYoutube className='w-6 h-6'/></p>
    </div>
    
    </div>
          
      </div>
<div className='container mx-auto bg-gray-100 p-2 mt-2 shadow-inner'>
      <div className="flex flex-col items-center gap-5 w-full">
      <h1 className="text-center text-[7px] lg:text-[10px] text-[#000000]">2023, All Rights Reserved</h1>
    </div>
      </div>
      </div>


          )
      }
      
      export default Footers


     
      
      


