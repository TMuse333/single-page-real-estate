import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView, useTransform, useScroll, useMotionValueEvent } from "framer-motion";

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
  const scale = useTransform(scrollYProgress, [0.3, 0.45], [0.4, 1]);

  useMotionValueEvent(scale,"change",(value)=>{
    if(value === 1){
      setScaleComplete
    }
  })


  return (
    <section
      ref={ref}
      className="relative w-[95vw] mx-auto h-screen overflow-hidden
      md:h-[80vh]"
    >
      <motion.div
        style={{
          scale, // Bind the scale transform to the scroll progress
        }}
        className="absolute w-full h-full "
      >
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full
          rounded-2xl"
          width={600}
          height={1300}
        />
      </motion.div>
    </section>
  );
};

export default ScaleImage;