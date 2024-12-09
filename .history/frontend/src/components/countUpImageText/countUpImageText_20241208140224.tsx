import Image from "next/image";
import React from "react";

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


    return (
        <section className="flex flex-col
        md:flex-row mx-auto max-w-[1200px]">
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}

        </section>
    )
}

export default CountUpImageText