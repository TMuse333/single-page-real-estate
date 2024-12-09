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
      className="relative w-[95vw] mx-auto h-screen overflow-hidden md:h-[80vh]
  
      "
    >
  
       <h2
        className="text-white   z-[5]
       relative text-2xl md:text-4xl font-bold  p-4 rounded-lg"
      >
        Lorem Ipsum Dolor Sit Amet
      </h2>
        {/* Image */}

        <Image
          src={src}
          alt={alt}
          className="object-cover h-screen rounded-2xl
           absolute md:h-[80vh] w-[95vw]"
          width={600}
          height={1300}
          style={{
            filter:'brightness(0.4)'
          }}
        />
        
        {/* h2 Tag */}
      
      {/* </motion.div> */}
    </section>
  );
  
};

export default ScaleImage;
