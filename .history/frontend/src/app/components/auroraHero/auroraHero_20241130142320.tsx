"use client"

import { useEffect, useRef } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useInView,
} from "framer-motion";

import side from '../../../../public/bonnie.jpg'
import building from '../../../../public/hero-building.jpeg'
import Image from "next/image";
import remax from '../../../../public/remax-balloon.png'
import { useGeneralContext } from "@/context/context";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
 const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  function scrollToElementById(id:string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const {setHeroInView} = useGeneralContext()

  const ref = useRef(null)

  const inView = useInView(ref,{
    once:false,
    amount:0.1
  })

  useEffect(()=>{
    if(!inView){
        setHeroInView(false)
    }
    else{
        setHeroInView(true)
    }
  },[inView])

  return (
    <>
    
    <motion.section
     ref={ref}
      className="relative  grid min-h-screen place-content-center overflow-hidden px-4  text-gray-200 z-[3]
    "
    >

<motion.div
    style={{
      backgroundImage,
    }}
    className="absolute inset-0 z-[2]"
  />

  {/* Building Image Layer */}
  <Image
    src={building}
    alt=""
    width={600}
    height={1300}
    className="absolute w-full h-full object-cover z-[1]"
    style={{
      filter: 'brightness(0.2)',
    }}
  />
       



      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
         Realtor
        </span>
        <Image
        src={remax}
        alt=''
        width={600}
        height={1300}
        className=' w-[20vw] bg-white rounded-2xl my-4 object-contain object-cover
         mx-auto'
        
        />
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
         Bonnie Hutchins
        </h1>
        <Image
            src={side}
            priority
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[40vw] md:w-[25vw] object-contain mx-auto
           rounded-full bg-gray-600 max-w-[240px] max-h-[360px]
            
            "
            />

<p className="my-6 w-[80vw] max-w-[1000px] text-left text-base leading-relaxed md:text-lg md:leading-relaxed sm:text-lg md:text-xl font-medium">
I have been in the real estate industry for over 30 years and hold the designations of Broker and Fellow of the Real Estate Industry (FRI).  I have experience serving both Sellers and Buyers.

  <br/> With my proven track record of success and unique approach to service, I am here to help you realize your goals. My ultimate objective is to make your home your best investment, while providing peace of mind throughout the entire process.
</p>

       

<section className="flex">


        <motion.button
        onClick={()=>scrollToElementById('closer')}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group bg-black relative mr-4 flex w-fit items-center  gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Get in touch
          {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
        </motion.button>
        <motion.button
        onClick={()=>scrollToElementById('closer')}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group bg-black relative flex w-fit items-center  gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
         View listings
          {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
        </motion.button>
        </section>
   
      </div>

      
    </motion.section>
    </>
  );
};

export default AuroraHero