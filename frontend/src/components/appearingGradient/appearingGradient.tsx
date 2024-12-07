import React, { useState, useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

import { useGeneralContext } from "@/context/context";

const AppearingGradient = ({ text, subText, description }: { text: string; subText: string,
description?:boolean }) => {
    const [scope, animate] = useAnimate();
const {isMobile} = useGeneralContext()


    const [lineComplete, setLineComplete] = useState(false)
    const [startSpring, setStartSpring] = useState(false)

    const isInView = useInView(scope,{
        amount: isMobile ? 0.4 : 0.75
    })

   
  

    const handleAnimation = async () => {
        if (lineComplete) return;
        // Ensure the line element exists before animating
        const lineElement = document.getElementById(`${text}-line`);
        const coverElement = document.getElementById(`${text}-cover`);
        const subHeaderElement = document.getElementById(`${text}-subHeader`);
        if (lineElement && coverElement && subHeaderElement) {

            await animate(lineElement, {
                width: '100vw',
                height: '50px',
     
            
               
            });

            setStartSpring(true)
            await animate(coverElement,{opacity:0},{duration:1.5}, )

            setLineComplete(true)

            await animate(lineElement, {
                height:'0px'
            })

            await animate(subHeaderElement, {opacity:1,
            }
                )

        }
    };

    useEffect(() => {
        if (isInView) {
            handleAnimation();
        }
    }, [isInView,]); // Add text to dependencies to avoid stale closures

    return (
       
            <section ref={scope} className='
            pt-12 relative mb-10 mx-auto' >
                <div
                    id={`${text}-line`}
                    className={`w-[0vw] mx-auto absolute z-[3]
                    top-0
                    h-[0px] transition-all bg-gradient-to-b from-[#a6e9ff] to-[#00bfff]
                    shadow-lg shadow-[#00bfff] max-w-[1200px]
                    rounded-b-full `}
                    style={{
                        transition: `width 0.2s, height ${lineComplete ? '1s 1s' : '0.2s'}, border-bottom 1.1s ease-in`,
                       
                    }}
                    
                />
                <div className="relative">
                    <div id={`${text}-cover`}
                    className="absolute z-[2]
                    bg-black rounded-b-full
                    h-[120px]
                    w-[60vw]
                    -translate-y-[0.75rem]
                    left-1/2 -translate-x-1/2
                    top-0
       
                   
                    "
                    
                    />
                   
              
                   <motion.h2
    id={`${text}-header`}
    className="mt-6 text-center font-semibold text-3xl sm:text-4xl md:text-5xl
    bg-clip-text text-transparent relative z-[2] pb-4
    px-4"
    style={{
        backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
    }}
    initial={{ translateY: "-2rem", opacity: 0 }} // Initial position and opacity
    animate={startSpring ? { translateY: "0rem", opacity: 1 } : {}}
    transition={{
        type: "spring", // Use spring transition for text
        stiffness: 500, 
        damping: 7,
    }}
    whileInView={{
        backgroundImage: [
            "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
            "linear-gradient(to right, #33e8ff, #33b5d6, #33e8ff)", // Brighter colors
            "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)"  // Back to default
        ],
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3, // Control how fast the gradient oscillates
        },
    }}
>
    {text}
</motion.h2>

                <h3 id={`${text}-subHeader`} 
                className={`text-center mt-4 px-6
                ${!description ? 'text-xl sm:text-2xl md:text-3xl' : 'text-md sm:text-lg md:text-xl'}
                opacity-0`}
               
                >
                    {subText}
                </h3>
                </div>
            </section>

    );
};

export default AppearingGradient;