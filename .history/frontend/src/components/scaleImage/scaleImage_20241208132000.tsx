import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useTransform, useScroll, useMotionValueEvent,
animate, easeIn } from "framer-motion";

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
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [!scaleComplete ?0.7 : 1, 1, 1, 0.7],  { ease:easeIn });

  useMotionValueEvent(scale,"change",(value)=>{
    if(value === 1){
      setScaleComplete(true)
    }
  })

  const handleAnimation = async() =>{
    const title = document.getElementById('scale-title')
    const description = document.getElementById('scale-paragraph')

    await animate(title,{opacity:1, y:0,scale:1.3},
      {ease:'easeInOut'})
  }

  useEffect(()=>{
    if(scaleComplete){
      handleAnimation()
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
    
        <motion.div className=" relative z-[4]
        h-full
        flex flex-col items-center justify-center"
        >
      
        <h2
        id='scale-title'
        className="pl-4 text-4xl text-center 
        sm:text-5xl md:text-6xl opacity-0 translate-y-[-2rem]">Lorem ipsum dolor sit amet consectetur.
        </h2>
      
        <p
        id='scale-description'
         className="mt-4 text-left pl-4 pr-4
        max-w-[800px] sm:text-xl opacity-0 translate-y-[2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro exercitationem dolores alias, voluptate ducimus cupiditate nisi dignissimos minima ad, nulla ex quisquam expedita molestias sunt. Dolores blanditiis eum in rem laboriosam neque ullam ratione ea non voluptate, obcaecati iure minima aspernatur fugit dolor suscipit laborum odio ducimus optio. Reprehenderit.
        </p>
    
      
        </motion.div>
    </motion.section>
  );
  
};



export default ScaleImage;
