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
            <section className="flex
            flex-col justify-center
            items-center">

            
            <h3>{subTitle}</h3>
            <h2>{title}</h2>
            {src && alt && (
                <Image
                src={src}
                alt={alt}
                width={600}
                height={1300}
                className='w-[40vw]
                h-[60vw] object-contain'
                />
            )}
            <p>{description}</p>
            </section>
            <section className="">
                
            </section>
        </section>
    )
}


export default TextAndList