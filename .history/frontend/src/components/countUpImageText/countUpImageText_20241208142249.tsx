import { useGeneralContext } from "@/context/context";
import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import {useInView,motion,useTransform,
} from 'framer-motion'
interface Props {
    src:string,
    alt:string
    title:string,
    description:string,
    stats:{
        number:string,
        name:string
    }[]
}



const CountUpImageText:React.FC<Props> = ({
    src,alt,title,description,stats
}) => {

    const {isMobile} = useGeneralContext()

    const ref = useRef(null)

    const inView = useInView(ref,)

    

    return (
        <section 
        ref={ref}
        className="flex flex-col bg-gray-300 mt-12
        w-[97vw] rounded-2xl
        md:flex-row-reverse mx-auto max-w-[1200px]">
            <h2 className="mx-auto
            text-3xl text-black
            mt-12 mb-4 md:hidden">{title}</h2>
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='rounded-2xl
            h-[80vh] object-cover
            mx-auto w-[90vw]
            md:w-[50vw]'
            />

<section
  
  className="flex mx-auto flex-col justify-center items-center mt-4
  md:flex-row font-semibold
  md:w-[48vw]"
>
    <p className="text-black px-4"> 
        {description}
    </p>
   
  {/* Number 1 */}
  <div className="text-2xl mb-6 flex flex-col
  justify-center md:flex-row items-start ">
    {stats.map((stat,index) => (
        <>
   <div key={index}
   className='flex flex-col
   text-black items-center
   justify-center
   text-center ml-4 mb-6'>

   
            <CountUp start={0} 
      end={inView ? parseInt(stat.number) : 0}
     duration={2}
     className='mr-auto'
      />
<p className="mr-auto text-left
self-start">
{stat.name}
</p>
   
    </div>
     <div className="w-[96vw] h-[3px] bg-black mb-6
  md:h-[50px] md:w-[5px] mx-auto " />

        </>
    ))}
    </div>


</section>

        </section>
    )
}

export default CountUpImageText