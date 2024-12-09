import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView, useTransform, useScroll, useMotionValueEvent,
animate } from "framer-motion";

interface Props {
  src: string;
  alt: string;
}

const ScaleImage: React.FC<Props> = ({ src, alt }) => {
  const ref = useRef(null); // Ref for detecting the viewport visibility
  const isInView = useInView(ref, { margin: "-50%" }); // Trigger when at least 50% of the element is in view

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start animating when it enters and ends when it leaves
  });


  const [scaleComplete, setScaleComplete] = useState(false)

  // Scale from 20vw by 20vw to full width/height
  const scale = useTransform(scrollYProgress, [0.3, 0.45], [!scaleComplete ? 0.4 : 1, 1]);

  useMotionValueEvent(scale,"change",(value)=>{
    if(value === 1){
      setScaleComplete(true)
    }
  })


  return (
    <motion.section ref={ref}
        
    className={`relative w-[95vw] mx-auto h-screen overflow-hidden md:h-[80vh]
    `}
    style={{
      scale
    }}
    >
        <Image src={src}
        alt={alt}
        className='absolute w-full h-full
        object-cover rounded-2xl'
            style={{
                filter:scaleComplete ? 'brightness(0.6)' :'brightness(1)'
            }}
            width={600}
            height={1300}
        />
    
        <motion.div className=" relative z-[4]"
        >
      
        <motion.h2
       
        className="pl-4 text-3xl  ">hiu
        </motion.h2>
      
        <p className="mt-4 text-left pl-4 pr-4
        max-w-[800px] sm:text-xl ">i hate this</p>
    
      
        </motion.div>
    </motion.section>
  );
  
};



export default ScaleImage;
