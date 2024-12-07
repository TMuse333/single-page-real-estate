"use client"

import React, { useRef} from "react";
import Link from "next/link";
import {motion, useInView} from 'framer-motion'
import Image from "next/image";


interface Props {
    image:string,
    title:string,
    description:string,
    buttonText:string,
    destination:string

}

const Closer: React.FC<Props> = ({image,title,description,
destination,buttonText}) => {

    const ref = useRef(null)

    const inView = useInView(ref,{
        once:true
    })

      const variants = {
        initial:{
            opacity:0,
            x:-100
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                opacity:{
                    duration:0.5
                }
            }
        }
        
      }

      const textVariants = {
        initial:{
            y:-20,
            opacity:0
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5
            }
        }
      }

    return (
        <motion.section ref={ref}
        
        className={`w-screen text-white h-[600px]
        relative flex flex-col items-center justify-center
        bg-center
        `}
        variants={variants}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
        >
            <Image src={image}
            alt="A background image of cash to signifies how you cash sell your houses fast for cash with ontario cash for houses"
            className='absolute w-full h-full
            object-cover'
                style={{
                    filter:'brightness(0.6)'
                }}
                width={600}
                height={1300}
            />

            <motion.div className="-mt-12 relative z-[4]"
              variants={textVariants}
              initial='initial'
              animate={inView ? 'animate' : 'initial'}>
            <motion.h4
           
            className="pl-4 text-3xl  ">{title}
            </motion.h4>
          
            <p className="mt-4 text-left pl-4 pr-4
            max-w-[800px] sm:text-xl ">{description}</p>

            <Link href={destination}
            passHref>
                <button className="mt-6 text-black
                bg-white ml-4 hover:bg-blue-500
                transition-all hover:text-white
                hover:scale-[1.05] p-3
                rounded-xl">
                {buttonText}
                </button>
            </Link>
            </motion.div>
        </motion.section>
    )
}

export default Closer