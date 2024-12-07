import Image from "next/image";
import React from "react";





interface Props {
    src:string,
    alt:string
}



const ScaleImage:React.FC<Props> = ({
    src,alt
}) => {


    return (
        <section className="relative w-screen">
            <Image
            src={src}
            alt={alt}
            className="absolute w-full h-full"


        </section>
    )
}