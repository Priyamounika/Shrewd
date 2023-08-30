




import { useState } from "react"
import { IoIosArrowDown} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {PiUserPlusDuotone} from 'react-icons/pi';
import {CiSearch} from 'react-icons/ci';
import {MdEmojiPeople} from 'react-icons/md';
import group from './assets/group 2816.png'



export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white-50 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8 ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                           <img src={group} className="w-10 h-10"/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 lg:pl-[28rem] pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="justify-between items-center space-y-8 md:flex md:space-y-0 gap-10">
                            <li className="text-black text-sm hover:text-indigo-200">
                                <a href="javascript:void(0)" className="flex gap-1">Services <span className="p-1"><IoIosArrowDown/></span> </a>
                            </li>
                            <li className="text-black hover:text-indigo-200 text-sm">
                                <a  className="flex gap-1">who we are</a>
                            </li>
                            <li className="text-black hover:text-indigo-200 text-sm">
                                <a href="javascript:void(0)" className="flex gap-1">Contact</a>
                            </li>
                            
                        </ul>

                       
                    </div>
                </div>
                <div className="hidden space-x-8 md:inline-block pr-4" >
                  <div className="flex gap-2">
                    
                  <button type="button" class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's Talk</button>
                    
                    </div>
                </div>
            </div>
        </nav>
    );
}