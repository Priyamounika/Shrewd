
import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import { IoIosArrowDown} from 'react-icons/io';
import group from "../components/assets/group 2816.png";


const Navbar1 = () => {
    let Links =[
        
        {name:"Services",link:"/"},
        {name:"who we are",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                
                <img src={group} className='w-12 h-12'/>
            </div>
            {/* Menu icon */}
            <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <GrClose /> : <SlMenu />}
          </div>
            {/* linke items */}
            <ul
        className={`gap-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? 'top-12' : 'top-[-490px]'
        }`}
      >
        {Links.map((link) => (
          <li className="md:ml-8 md:my-0 my-7 " key={link.name}>
            <a
              href={link.link}
              className=" relative"
            >
              {link.name}
              {link.name === 'Services' && (
                <div className="absolute -top-[9px] right-[-30px] transform translate-y-1/2 w-6 h-6">
                  {/* Add your arrow icon here */}
                  {/* Example using an SVG arrow */}
                  <IoIosArrowDown size={20} className='hover:rotate-[180deg] transition-all duration-300'/>
                </div>
              )}
              
            </a>
          </li>
        ))}
        <button className='btn bg-gray-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Let's Talk</button>
      </ul>
            {/* button */}
            
           </div>
        </div>
    );
};

export default Navbar1;



// import { useState } from "react"
// import { IoIosArrowDown} from 'react-icons/io';
// import {AiOutlinePlus} from 'react-icons/ai';
// import {PiUserPlusDuotone} from 'react-icons/pi';
// import {CiSearch} from 'react-icons/ci';
// import {MdEmojiPeople} from 'react-icons/md';
// import group from './assets/group 2816.png'



// export default function NavBar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="w-full bg-white-50 shadow">
//             <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8 ">
//                 <div>
//                     <div className="flex items-center justify-between py-3 md:py-5 md:block">
//                         <a href="javascript:void(0)">
//                            <img src={group} className="w-10 h-10"/>
//                         </a>
//                         <div className="md:hidden">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-black"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-black"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 lg:pl-[28rem] pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                             navbar ? "block" : "hidden"
//                         }`}
//                     >
//                         <ul className="justify-between items-center space-y-8 md:flex md:space-y-0 gap-10">
//                             <li className="text-black text-sm hover:text-indigo-200">
//                                 <a href="javascript:void(0)" className="flex gap-1">Services <span className="p-1"><IoIosArrowDown/></span> </a>
//                             </li>
//                             <li className="text-black hover:text-indigo-200 text-sm">
//                                 <a  className="flex gap-1">who we are</a>
//                             </li>
//                             <li className="text-black hover:text-indigo-200 text-sm">
//                                 <a href="javascript:void(0)" className="flex gap-1">Contact</a>
//                             </li>
                            
//                         </ul>

                       
//                     </div>
//                 </div>
//                 <div className="hidden space-x-8 md:inline-block pr-4" >
//                   <div className="flex gap-2">
                    
//                   <button type="button" class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's Talk</button>
                    
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }