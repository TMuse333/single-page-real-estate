import Image from "next/image";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

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
    h-[80vh] z-[2] bg-red-200">
     <Image
     className="absolute h-full w-full
     object-cover z-[1] object-[10%-40%]"
     src={src}
     alt={alt}
     width={600}
     height={1300}
     />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-lg font-semibold">{description}</h3>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          {button}
        </button>
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
