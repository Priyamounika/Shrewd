import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import image_1 from "../components/assets/empty web browser window.png";
import mic from "../components/assets/";

const Accordins = () => {
  const [expandedCard, setExpandedCard] = useState(1);

  const toggleWidth = (cardNumber) => {
    setExpandedCard(cardNumber === expandedCard ? 0 : cardNumber);
  };

  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      {/* Card 1 */}
      <div
        className={`card_1 bg-[#FFE6B5] ${
          expandedCard === 1 ? "w-[90vh]" : "w-[12vh]"
        } h-[47vh] relative transition-width duration-500`}
      >
        {expandedCard === 1 ? null : (
          <p className="rotate-90 absolute top-[6.5rem] left-1.5 w-full">Web Development</p>
        )}
        {expandedCard === 1 ? (
          <AiOutlineClose className="absolute right-2 top-2" onClick={() => toggleWidth(1)} />
        ) : (
          <AiOutlineArrowRight onClick={() => toggleWidth(1)} />
        )}
        {expandedCard === 1 && (
          <div className="flex items-center justify-center p-5 bg-[#f3cb7b]">
            <div className="flex items-start justify-center flex-col gap-5 p-5">
              <h1>Web Development</h1>
              <p>
                We cater all types of web design and application development
                services for clients to discover the business opportunities.
              </p>
              <button className="bg-gray-600 text-white font-semibold px-3 py-1 rounded">Explore</button>
            </div>
            <div>
              <img src={image_1} alt="Web Development" />
            </div>
          </div>
        )}
      </div>

      {/* Card 2 */}
      <div
        className={`card_2  bg-[#D4E9FF] ${
          expandedCard === 2 ? "w-[90vh]" : "w-[12vh]"
        } h-[47vh] relative transition-width duration-500`}
      >
        {expandedCard === 2 ? null : (
          <p className="rotate-90 absolute top-[6.5rem] left-3">Application Development</p>
        )}
        {expandedCard === 2 ? (
          <AiOutlineClose className="absolute right-2 top-2" onClick={() => toggleWidth(2)} />
        ) : (
          <AiOutlineArrowRight onClick={() => toggleWidth(2)} />
        )}
        {expandedCard === 2 && (
          <div className="flex items-center justify-center p-5 bg-[#8bbff7]">
            <div className="flex items-start justify-center flex-col gap-5 p-5">
              <h1>Application Development</h1>
              <p>
                Our Mobile Development Services will offer later technologies to create mobile software solution for various platforms such as iPhone / iPad, Android, Blackberry, Symbian and Windows Phone. 
              </p>
              <button className="bg-gray-600 text-white font-semibold px-3 py-1 rounded">Explore</button>
            </div>
            <div>
              <img src={image_1} alt="Web Development"/>
            </div>
          </div>
        )}
      </div>

      {/* Card 3 */}
      <div
        className={`card_3  bg-[#CDFFD2] ${
          expandedCard === 3 ? "w-[90vh]" : "w-[12vh]"
        } h-[47vh] relative transition-width duration-500`}
      >
        {expandedCard === 3 ? null : (
          <p className="rotate-90 absolute top-[6.5rem] left-3">Digital Marketing</p>
        )}
        {expandedCard === 3 ? (
          <AiOutlineClose className="absolute right-2 top-2" onClick={() => toggleWidth(3)} />
        ) : (
          <AiOutlineArrowRight onClick={() => toggleWidth(3)}/>
        )}
        {expandedCard === 3 && (
          <div className="flex items-center justify-center p-5 bg-[#6efa7c]">
            <div className="flex items-start justify-center flex-col gap-5 p-5">
              <h1>Digital Marketing</h1>
              <p>
                We cater all types of web design and application development
                services for clients to discover the business opportunities.
              </p>
              <button className="bg-gray-600 text-white font-semibold px-3 py-1 rounded">Explore</button>
            </div>
            <div>
              <img src={image_1} alt="Web Development"/>
            </div>
          </div>
        )}
      </div>

      {/* Card 4 */}
      <div
        className={`card_4 bg-[#FFBDA6] ${
          expandedCard === 4 ? "w-[90vh]" : "w-[12vh]"
        } h-[47vh] relative transition-width duration-500`}
      >
        {expandedCard === 4 ? null : (
          <p className="rotate-90 absolute top-[6.5rem] left-3">Software Development</p>
        )}
        {expandedCard === 4 ? (
          <AiOutlineClose className="absolute right-2 top-2" onClick={() => toggleWidth(4)} />
        ) : (
          <AiOutlineArrowRight onClick={() => toggleWidth(4)} />
        )}
        {expandedCard === 4 && (
          <div className="flex items-center justify-center p-5 bg-[#eb6f42]">
            <div className="flex items-start justify-center flex-col gap-5 p-5">
              <h1>Software Development</h1>
              <p>
                We cater all types of web design and application development
                services for clients to discover the business opportunities.
              </p>
              <button className="bg-gray-600 text-white font-semibold px-3 py-1 rounded">Explore</button>
            </div>
            <div>
              <img src={image_1} alt="Web Development" />
            </div>
          </div>
        )}
      </div>

      {/* Card 5 */}
      <div
        className={`card_5 bg-[#B4B2FF] ${
          expandedCard === 5 ? "w-[90vh]" : "w-[12vh]"
        } h-[47vh] relative transition-width duration-500`}
      >
        {expandedCard === 5 ? null : (
          <p className="rotate-90 absolute top-[6.5rem] left-3">UI Design</p>
        )}
        {expandedCard === 5 ? (
          <AiOutlineClose className="absolute right-2 top-2" onClick={() => toggleWidth(5)} />
        ) : (
          <AiOutlineArrowRight onClick={() => toggleWidth(5)} />
        )}
        {expandedCard === 5 && (
          <div className="flex items-center justify-center p-5 bg-[#453fe7]">
            <div className="flex items-start justify-center flex-col gap-5 p-5">
              <h1>UI Design</h1>
              <p>
                We cater all types of web design and application development
                services for clients to discover the business opportunities.
              </p>
              <button className="bg-white text-black font-semibold px-3 py-1 rounded">Explore</button>
            </div>
            <div>
              <img src={image_1} alt="Web Development" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordins
