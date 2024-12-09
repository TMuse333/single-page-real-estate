import Image from "next/image";
import React from "react";

interface Props {
    subTitle:string
    title:string,
    src?:string,
    alt?:string,
    description:string,
    listAspects:{
        src:string,
        alt:string,
        title:string,
        description:string
    }[]
}


const TextAndList:React.FC<Props> = ({
    title,src,alt,description,
    listAspects,subTitle
}) => {

    return (
        <section>
            <h3>{subTitle}</h3>
            <h2>{title}</h2>
            {src && alt && (
                <Image
                src={src}
                alt={alt}
                width={600}
                hight={1300}
                className='w-[40vw]
                h-['
            )}
            <p>{description}</p>
        </section>
    )
}


export default TextAndList