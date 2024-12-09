import Image from "next/image";
import React from "react";

interface Testimonial {
    src:string,
    alt:string,
    name:string,
    quote:string
}

const Testimonial:React.FC<Testimonial> = ({
    src,alt,name,quote
}) => {

    return (
        <div className="w-[90vw]
        mx-auto flex flex-col
        justify-center items-center">
            <Image
            src={src}
            alt={alt}
            className='mr-auto
            ml-6 object-contain
            w-[100px] h-[150px]
            self-start'
            />
            <p>"{quote}</p>

        </div>
    )
}