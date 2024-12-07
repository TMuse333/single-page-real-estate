"use client"
import React, {useRef} from "react";
import CountUp from "react-countup";
import { useInView} from 'framer-motion'

interface Props {
  number1: string;
  number2: string;
  number3: string;
}

const CountUpStats: React.FC<Props> = ({ number1, number2, number3 }) => {

    const ref = useRef(null)
    const inView = useInView(ref,{
        once:true
    })
  return (
    <>
    <section   ref={ref}
    className="mx-auto w-screen max-w-[1200px]
    text-white">
         <h2 className="text-center px-4 font-bold text-2xl sm:text-3xl
         my-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, iusto?</h2>
         <p className="font-semibold px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime enim dolore autem vitae, neque deserunt itaque minus officia modi repudiandae culpa hic explicabo mollitia rerum dolorem impedit, delectus, voluptatem facilis deleniti perferendis consectetur. Distinctio possimus, asperiores eius quos natus blanditiis. Dolore officiis voluptates architecto at temporibus. Omnis eaque rerum praesentium!
         </p>
       
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

    <div className="w-[80vw] max-w-[1200px]
    mx-auto h-[5px] bg-black"
    />

    </>
  );
};

export default CountUpStats;
