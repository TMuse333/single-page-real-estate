import { useGeneralContext } from "@/context/context";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
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


    return (
        <section className="flex flex-col
        md:flex-row mx-auto max-w-[1200px]">
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
            mx-auto w-[90vw]'
            />

<section
  
  className="flex mx-auto flex-col justify-center items-center mt-4
  md:flex-row font-semibold"
>
   
  {/* Number 1 */}
  <div className="text-2xl mb-6 flex flex-col
  justify-center md:flex-row items-start ">
    <CountUp start={0} 
      end={inView ? parseInt(number1) : 0}
     duration={2} />
     &nbsp; millions sold
     <div className="w-[50vw] h-[5px] bg-black mb-6
  md:h-[50px] md:w-[5px] mx-4 " />
  </div>

  {/* Divider */}
  

  {/* Number 2 */}
  <div className="text-2xl mb-6 flex flex-col
  justify-center md:flex-row items-start ">
    <CountUp start={0} 
      end={inView ? parseInt(number2) : 0}
     duration={2} />
     &nbsp; years of experience
     <div className="w-[50vw] h-[5px] bg-black mb-6
  md:h-[50px] md:w-[5px] mx-4 " />
  </div>

  {/* Number 3 */}
  <div className="text-2xl mb-6 flex flex-col
  justify-center md:flex-row items-start mb-auto">
    <CountUp start={0} 
      end={inView ? parseInt(number3) : 0}
     duration={2} />
     +&nbsp; happy clients
   
  </div>
</section>

        </section>
    )
}

export default CountUpImageText