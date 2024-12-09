import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {motion, useInView} from 'framer-motion'

interface ListAspects {
    src:string,
    alt:string,
    title:string,
    description:string
    
}


const ListElement:React.FC<ListAspects> = ({

}) => {

    return (

        <div key={index} className="bg-gray-700 rounded-3xl overflow-hidden">
        <button
          className="w-full flex justify-between items-center text-left text-white p-4 font-semibold bg-gray-600 rounded-t-lg focus:outline-none"
          onClick={() => handleClick(index)}
        >
          <span>{aspect.title}</span>
          <span>
            {expandedIndex === index ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expandedIndex === index ? "h-[30vh] lg:h-[30vh]" : "h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-gray-300">{aspect.description}</p>
          </div>
        </div>
      </div>
    )
}


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



    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    const handleClick = (index:number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };

      const ref = useRef(null)

      const dropDownAnimation = (delay:number) => {
        return {
            initial:{
                opacity:0,
                y:30
            },
            animate:{
                opacity:1,
                y:0,
                transition:{
                    delay:delay
                }
            }
        }
      }
   
      return (
        <section className="flex flex-col md:flex-row">
          {/* Top Section */}
          <section className="flex flex-col justify-center items-center space-y-4 p-4">
            <h3 className="text-lg font-semibold text-gray-700">{subTitle}</h3>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {src && alt && (
              <img
                src={src}
                alt={alt}
                className="w-[40vw] h-[60vw] max-w-[250px] max-h-[300px] object-contain"
              />
            )}
            <p className="text-gray-600">{description}</p>
          </section>
    
          {/* Accordion Section */}
          <section
            className={` rounded-xl mx-auto w-[90vw] p-5 mb-7 max-w-[800px]`}
          >
            <div className="space-y-4">
              {listAspects.map((aspect, index) => (
                <div key={index} className="bg-gray-700 rounded-3xl overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center text-left text-white p-4 font-semibold bg-gray-600 rounded-t-lg focus:outline-none"
                    onClick={() => handleClick(index)}
                  >
                    <span>{aspect.title}</span>
                    <span>
                      {expandedIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedIndex === index ? "h-[30vh] lg:h-[30vh]" : "h-0"
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
        </section>
      );
}


export default TextAndList