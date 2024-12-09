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
    <section
      ref={ref}
      className="relative w-[95vw] mx-auto h-screen overflow-hidden md:h-[80vh]"
    >
      <motion.div
        
        className="absolute w-full h-full
        z-[2]"
      >
        {/* Image */}
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-2xl
          relative z-[2]"
          width={600}
          height={1300}
        />
        
        {/* h2 Tag */}
        return (
  <section
    ref={ref}
    className="relative w-[95vw] mx-auto h-screen overflow-hidden md:h-[80vh]"
  >
    <motion.div
      style={{
        scale, // Bind the scale transform to the scroll progress
      }}
      className="absolute w-full h-full"
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-2xl"
        width={600}
        height={1300}
      />
      
     
      <h2
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center 
        text-2xl md:text-4xl font-bold bg-black/50 p-4 rounded-lg"
      >
        Lorem Ipsum Dolor Sit Amet
      </h2>
    </motion.div>
  </section>
);

      </motion.div>
    </section>
  );
  
};

export default ScaleImage;
