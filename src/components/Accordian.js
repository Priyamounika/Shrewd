// import React, { useState } from 'react';

// const AccordionItem = ({ id, title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className=''>
//       <h2
//         id={`accordion-collapse-heading-${id}`}
//         className="cursor-pointer flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//         onClick={toggleAccordion}
//       >
//         <span>{title}</span>
//         <svg
//           data-accordion-icon
//           className={`w-3 h-3 rotate-${isOpen ? '0' : '180'} shrink-0`}
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
//         </svg>
//       </h2>
//       {isOpen && (
//         <div
//           id={`accordion-collapse-body-${id}`}
//           className="w-full border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
//         >
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };

// const Accordian = () => {
//   return (
//     <div className='container mx-auto px-10  my-10 flex  justify-center items-center w-full h-[100vh] rotate-[270deg]'>
//     <div className="space-y-2">
//       <AccordionItem
//         id="1"
//         title="What is Flowbite?"
//         content={
//           <div className='rotate-[90deg] w-full'>
//             <div className='border'><p className="mb-2 text-gray-500 dark:text-gray-400">
                
//             We cater all types of web design and application development services for clients to discover the business opportunities.</p></div>
//           </div>
//         }
//       />
//       <AccordionItem
//         id="2"
//         title="Is there a Figma file available?"
//         content={
//           <div>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out the{' '}
//               <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
//                 Figma design system
//               </a>{' '}
//               based on the utility classes from Tailwind CSS and components from Flowbite.
//             </p>
//           </div>
//         }
//       />
      
//     </div>
//     </div>
//   );
// };

// export default Accordian;