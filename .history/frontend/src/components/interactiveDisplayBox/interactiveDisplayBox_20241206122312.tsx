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

// InteractiveBox component
const InteractiveBox: React.FC<InteractiveBoxProps> = ({
  src,
  alt,
  description,
  button,
}) => {

const ref = useRef(null)

const inView = useInView(ref,{
    once:true,
    amount:0.6
})

const MotionImage = motion.create(Image)

const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative w-[90vw] sm:w-[45vw]  mx-auto mb-8
    h-[60vh] rounded-3xl overflow-hidden transition-opacity
  ${inView ? 'opacity-1' : 'opacity-0'}`}
    ref={ref}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    
    >
     <MotionImage
     className={`absolute w-full
     object-cover  rounded-3xl
     
     transition-all
     ${inView ? 'h-[60vh]' : 'h-[0vh]'}`}
     src={src}
     alt={alt}
     width={600}
     height={1300}
     whileHover={{
        scale:1.3,
        transition:{
            ease:'easeIn'
        }
     }}
     />
     <button className="mt-2 bg-white text-black px-4 py-2 
        absolute top-0 right-[10%]
        rounded-full w-[50px] h-[45px]
        hover:bg-gray-300 transition-all">
         <Image
         src={arrow}
         alt='arrow'
         className="rounded-full "
         width={600}
         height={1300}
         />
        </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-white text-lg font-semibold">
  <AnimatePresence mode="wait">
    {isHovered ? (
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
      <motion.span
        key="nothing" // Unique key for the alternate text
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
       beds: 4 baths: 3 price: 100k 
      </motion.span>
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
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0">
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
