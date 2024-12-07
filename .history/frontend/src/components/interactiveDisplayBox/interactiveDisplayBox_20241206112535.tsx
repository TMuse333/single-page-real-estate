import Image from "next/image";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import arrow from '../../../public/arrow-up-right.svg'
// Define the type for the InteractiveBox component props
interface InteractiveBoxProps {
  src: string;
  alt: string;
  description: string;
  button: string;
}

// InteractiveBox component
const InteractiveBox: React.FC<InteractiveBoxProps> = ({
  src,
  alt,
  description,
  button,
}) => {
  return (
    <div className="relative w-[90vw] sm:w-[45vw] lg:w-[30vw] mx-auto mb-8
    h-[60vh] rounded-3xl overflow-hidden">
     <Image
     className="absolute h-full w-full
     object-cover  rounded-3xl"
     src={src}
     alt={alt}
     width={600}
     height={1300}
     />
     <button className="mt-2 bg-white text-black px-4 py-2 
        absolute top-0 right-[10%]
        rounded-full w-[50px] h-[45px]
        hover:bg">
         <Image
         src={arrow}
         alt='arrow'
         className="rounded-full"
         width={600}
         height={1300}
         />
        </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-lg font-semibold">{description}</h3>
        
      </div>
    </div>
  );
};

// Define the type for the InteractiveBoxes component props
interface InteractiveBoxesProps {
  boxes: InteractiveBoxProps[];
}

// InteractiveBoxes component
const InteractiveBoxes: React.FC<InteractiveBoxesProps> = ({ boxes }) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {boxes.map((box, index) => (
        <InteractiveBox
          key={index}
          src={box.src}
          alt={box.alt}
          description={box.description}
          button={box.button}
        />
      ))}
    </div>
  );
};

// Example usage in an App component


export default InteractiveBoxes;
