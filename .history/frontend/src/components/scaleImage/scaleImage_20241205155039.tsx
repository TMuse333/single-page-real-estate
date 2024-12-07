import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'




interface Props {
    src:string,
    alt:string
}



const ScaleImage:React.FC<Props> = ({
    src,alt
}) => {

    const MotionImage = motion.create

    return (
        <section className="relative w-screen">
            <Image
            src={src}
            alt={alt}
            className="absolute w-full h-full
            object-cover"
            width={600}
            height={1300}
            />



        </section>
    )
}