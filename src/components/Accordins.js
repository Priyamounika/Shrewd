import React, { useState } from "react";
import "./app.css";

const Accordins = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionItems = [
    { image: "", title: "Web Development" },
    { image: "", title: "Application Development" },
    { image: "", title: "Digital Marketing" },
    { image: "", title: "Software Development" },
    { image: "", title: "UI Design" },
 
  ];

  return (
    <div className="accordion ">
      <ul>
        {accordionItems.map((item, index) => (
          <li key={index}>
            <img
              src="https://previews.123rf.com/images/cobol1964/cobol19641704/cobol1964170400093/76423491-landscape-with-sun-and-tree.jpg"
              alt={item.title}
            />
            <a
              href="#"
              onClick={() => toggleAccordion(index)}
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.title}
            </a>
            {activeIndex === index && (
              <div className="accordion-content">{/* Content goes here */}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordins;
