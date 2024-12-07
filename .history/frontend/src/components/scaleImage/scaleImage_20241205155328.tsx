import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";

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

  // Scale from 20vw by 20vw to full width/height
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section
      ref={ref}
      className="relative w-screen h-screen overflow-hidden"
    >
      <motion.div
        style={{
          scale, // Bind the scale transform to the scroll progress
        }}
        className="absolute w-[20vw] h-[20vw] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          width={600}
          height={1300}
        />
      </motion.div>
    </section>
  );
};

export default ScaleImage;
