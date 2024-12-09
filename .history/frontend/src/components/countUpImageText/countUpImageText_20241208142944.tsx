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
            text-3xl text-black font-bold
            text-center sm:text-4xl
            md:text-5xl
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

<section className="flex
flex-col px-4 md:w-[48vw] ">
      <h2 className="mx-auto
            text-3xl text-black font-bold
            text-center sm:text-4xl
            md:text-5xl
            mt-12 mb-4 hidden md:block">{title}</h2>
<p className="text-black px-4
    mb-6 "> 
        {description}
    </p>

<section
  
  className="flex mx-auto flex-col justify-center items-center mt-4
  md:flex-row font-semibold
   md:mr-auto ml-4"
>
  
   
  {/* Number 1 */}
  <div className="text-2xl mb-6 flex flex-col
  justify-start items-start 
  ">
    {stats.map((stat,index) => (
        <>
   <div key={index}
   className='flex flex-col
   text-black items-center
   justify-center
   text-center ml-4 mb-6
   md:ml-0 mr-auto '>

   
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
  md:h-[50px] md:w-[5px] mx-auto md:hidden" />

        </>
    ))}
    </div>


</section>
</section>

        </section>
    )
}

export default CountUpImageText