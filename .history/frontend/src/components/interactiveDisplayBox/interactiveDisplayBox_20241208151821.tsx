import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll,
useInView, AnimatePresence } from "framer-motion";
import arrow from '../../../public/arrow-up-right.svg'
// Define the type for the InteractiveBox component props
interface InteractiveBoxProps {
  src: string;
  alt: string;
  description: string;
  button: string;

  
}

const realEstateStats = [
    { label: 'Price', value: '$500k' },
    { label: 'Date Built', value: '1995' },
    { label: 'Bathrooms', value: '3' },
    { label: 'Bedrooms', value: '4' }
  ];
  

// InteractiveBox component
const InteractiveBox: React.FC<InteractiveBoxProps> = ({
    src,
    alt,
    description,
    button,
  }) => {
    const ref = useRef(null);
  
    const inView = useInView(ref, {
      once: true,
      amount: 0.6,
    });
  
    const MotionImage = motion.create(Image);
  
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`relative w-[95vw] sm:w-[45vw] mx-auto mb-8 h-[60vh] rounded-3xl overflow-hidden transition-opacity ${
          inView ? 'opacity-1' : 'opacity-0'
        }`}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className={`absolute w-full object-cover rounded-3xl transition-[height,transform] duration-500 ease-in-out [transition-duration:800ms_for_height] ${
            inView ? 'h-[60vh]' : 'h-[0vh]'
          } ${isHovered ? 'scale-[1.2]' : 'scale-[1]'}`}
          src={src}
          alt={alt}
          width={600}
          height={1300}
        />
        <button
          className="mt-2 bg-white text-black px-4 py-2 absolute top-0 right-[10%] rounded-full w-[50px] h-[45px] hover:bg-gray-300 transition-all"
        >
          <Image src={arrow} alt="arrow" className="rounded-full" width={600} height={1300} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-lg font-semibold">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.span
                  key="description" // Unique key to help AnimatePresence
                  initial={{ opacity: 0, y: 10 }} // Animation when entering
                  animate={{ opacity: 1, y: 0 }} // Animation when in view
                  exit={{ opacity: 0, y: -10 }} // Animation when exiting
                  transition={{ duration: 0.3 }} // Controls smoothness
                >
                  {description}
                </motion.span>
              ) : (
                <div className="flex flex-row w-full
                justify-around">

               
                {realEstateStats.map((stat, index) => (
                  <motion.div
                    className="flex flex-row bg-gray-200 text-black
                    p-3 rounded-2xl m-1 text-xs sm:text-md
                    lg:text-lg"
                    key={stat.label} // Use the index for the unique key
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                  {stat.label}
                  </motion.div>
                ))}
                </div>
              )}
            </AnimatePresence>
          </h3>
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
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0
    bg-gray-400 w-[95vw] mx-auto rounded-2xl">
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
