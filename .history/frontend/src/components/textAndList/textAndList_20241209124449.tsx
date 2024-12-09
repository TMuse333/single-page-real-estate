import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {motion} from 'framer-motion'

interface Props {
    subTitle:string
    title:string,
    src?:string,
    alt?:string,
    description:string,
    listAspects:{
        src:string,
        alt:string,
        title:string,
        description:string
    }[]
}


const TextAndList:React.FC<Props> = ({
    title,src,alt,description,
    listAspects,subTitle
}) => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index:number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };

      const dropDownAnimation = (delay:number)
   
       return (
        <section>
        {/* Top Section */}
        <section
          className="flex flex-col justify-center items-center space-y-4 p-4"
        >
          <h3 className="text-lg font-semibold text-gray-700">{subTitle}</h3>
          <h2 className="text-3xl font-bold text-gray-900
          ">{title}</h2>
          {src && alt && (
            <Image
              src={src}
              alt={alt}
              width={600}
              height={1300}
              className="w-[40vw] h-[60vw] object-contain"
            />
          )}
          <p className="text-gray-600">{description}</p>
        </section>
  
        {/* Accordion Section */}
        <div className="space-y-4 mt-8">
          {listAspects.map((aspect, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
              {/* Button */}
              <button
                className="w-full flex justify-between items-center text-left text-white p-4 font-semibold bg-gray-600 rounded-t-lg focus:outline-none"
                onClick={() => handleClick(index)}
              >
                <span>{aspect.title}</span>
                <span>
                  {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
  
              {/* Expandable Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedIndex === index ? 'h-[30vh] lg:h-[30vh] opacity-100' : 'h-0 opacity-0'
                }`}
              >
                <div className="p-4">
                  <p className="text-gray-300">{aspect.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}


export default TextAndList