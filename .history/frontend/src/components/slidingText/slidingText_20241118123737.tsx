import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useGeneralContext } from "@/context/context";

interface TextProps {
    text: string;
    setSlideComplete?: React.Dispatch<React.SetStateAction<boolean>>;
    reverse?:boolean,
    subText?:string
}

const SlidingText: React.FC<TextProps> = ({ text, setSlideComplete,
reverse,subText }) => {
    // Reference to the target element to track scroll position
    const targetRef = useRef(null);

    const {isMobile} = useGeneralContext()
    
    // State to track when slide is complete
    const [slideComplete, setLocalSlideComplete] = useState(false);

    // Get scroll progress relative to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjust these offsets as needed
    });

    // Transform scroll progress to x position, scale, and opacity
    const x = useTransform(scrollYProgress, [0, isMobile ? 0.4 : 0.6], [!reverse ? 350 : -350, 0]); // Adjust as needed
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.55], [0, 0.0, 1]);

    // Monitor changes in the `x` value and set `slideComplete` to true when x reaches 0


    useMotionValueEvent(x,"change",(latest) => {
        if(latest === 0 && !slideComplete){
            setLocalSlideComplete(true)
            if (setSlideComplete) {
                console.log('skdie complete true')
                setSlideComplete(true);
            }
        }
        
    })

    return (
        <div ref={targetRef}>
            <motion.h2
                className=" bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center relative transition-colors
                mb-8"
                // style={!slideComplete ? { x, opacity } : {}} // Apply the animated styles
                style={{ x, opacity }}
                // Apply the gradient flow when slideComplete is true
                whileInView={
                    slideComplete
                        ? {
                              backgroundImage: [
                                  "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
                                  "linear-gradient(to right, #33e8ff, #33b5d6, #33e8ff)", // Brighter colors
                                  "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",  // Back to default
                              ],
                              transition: {
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                  duration: 3, // Control how fast the gradient oscillates
                              },
                          }
                        : {}
                }
            >
                {text}
            </motion.h2>
            {subText && (
                <motion.h3 className={`w-[80vw] mx-auto text-xl
                transition-opacity
                sm:text-2xl ${slideComplete ? 'opacity-1' : 'opacity-0'}`}>
                    {subText}
                </motion.h3>
            )}
        </div>
    );
};

export default SlidingText;