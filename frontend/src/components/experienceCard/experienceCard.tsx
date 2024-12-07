"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, animate, useInView } from 'framer-motion';
import { useGeneralContext } from "@/context/context";

import { easeIn} from 'framer-motion/dom'
import Link from "next/link";


interface Props {
    title: string,
    src: string,
    alt: string,
    description: string,
    aspects: string[],
    link: string,
    reverse?: boolean
    aspectHeader:string
}

const ExperienceCard: React.FC<Props> = ({
    title, src, alt, description, aspects,
    link, reverse, aspectHeader
}) => {
    const ref = useRef(null);
    const { isMobile } = useGeneralContext();
    // const MotionImage = motion.create(Image);
    const skillsRef = useRef(null)
    const [startAnimation, setStartAnimation] = useState(false)

    const skillsInView = useInView(skillsRef,{
        amount:0.6
    })

    const [startLiAnimation, setStartLiAnimation] = useState(false)

    useEffect(()=>{
        if(skillsInView){
            setStartLiAnimation(true)
        }
    },[skillsInView])


    // Framer Motion's useScroll and useTransform
    const { scrollYProgress } = useScroll({
        target: ref, // Watch this section
        offset: ["start end", "end start"], // Trigger based on when it enters and leaves the viewport
    });

    // Map scrollYProgress to scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7],  { ease:easeIn });


    useMotionValueEvent(scale, "change", (latestScale) => {
        if (latestScale === 1) {
            console.warn("Scale reached 1");
            setStartAnimation(true)
        }
    });


    const handleAnimation = async () => {

        const header = document.getElementById(`${title}-header`)
        const image = document.getElementById(`${title}-image`)
        const description = document.getElementById(`${title}-description`)
        if(header){
            await animate(header,{opacity:1, y:0,scale:1.3},
                {ease:'easeInOut'})
                await animate(header,{scale:1},
            
                )
        }

        if(image){
            await animate(image,{opacity:1},
                {ease:'easeInOut'}
                )
        }
     
        if(description){
            await animate(description,{opacity:1},
                {ease:'easeInOut'})
        }

        if(!isMobile){
            setStartLiAnimation(true)
        }
        
        
    }

    useEffect(() => {
        if(startAnimation){
            handleAnimation()
        }
    },[startAnimation])


    const liVariants =(delay:number,index:number) => {

        return {
            initial:{
                opacity:0,
                x:isMobile && index % 2 === 0 ? -20 : 20,
                y: !isMobile ? 20 : 0
            },
            animate:{
                opacity:1,
                x:0,
                y:0,
                transition:{
                    delay:0.3 + delay
                }
            }
        }
    }
    

    return (
        <>
            <motion.section
                ref={ref}
                style={{ scale,  }}
                className="relative mx-auto w-[98vw] rounded-2xl bg-gradient-to-b from-blue-600 to-blue-300
              opacity-1 my-8"
            >
                <h2 id={`${title}-header`}
                    className="text-center w-full text-3xl sm:text-4xl  mb-6 font-bold pt-4
                    translate-y-[-2rem] opacity-0 px-3"
                >
                    {title}
                </h2>
                <section className={`flex flex-col md:px-4 mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <Image
                        id={`${title}-image`}
                        src={src}
                        alt={alt}
                        width={600}
                        height={1300}
                        className='w-[80vw] mx-auto mb-4 md:w-[40vw] max-w-[500px] rounded-2xl
                         opacity-0 object-contain'
                    />
                    <motion.p
                        id={`${title}-description`}
                        className="px-4 font-semibold my-auto
                        opacity-0 md:text-lg"
                    >
                        {description}
                        <br/>
                        <button className="bg-blue-500
                        p-2 rounded-2xl mt-3 hover:text-blue-500
                        hover:bg-white transition-all">
                            <Link href={link}
                            >
                                Check it out
                            </Link>
                        </button>
                    </motion.p>
                </section>

                <section className="w-full"
                ref={skillsRef}>

                
                <h3
                    className="text-center my-6 text-3xl font-semibold"
                >
                   {aspectHeader}
                </h3>
                <ul className="mx-auto font-semibold mt-4 md:flex flex-row md:px-4
                pb-8">
                    {aspects.map((aspect, index) => (
                        <motion.li className="mb-4 w-[90%] mx-auto p-3 bg-blue-600 rounded-2xl flex justify-center items-center text-center md:w-full md:mr-4"
                            key={index}
                            variants={liVariants(isMobile ? index * 0.2 : index * 0.1,index)}
                            initial='initial'
                            animate={startLiAnimation ? 'animate' : 'initial'}
                            >
                            {aspect}
                        </motion.li>
                    ))}
                </ul>
                </section>
            </motion.section>
        </>
    );
}

export default ExperienceCard;