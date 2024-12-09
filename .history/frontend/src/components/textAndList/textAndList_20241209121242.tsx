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
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center text-left text-white p-4 font-semibold bg-gray-600 rounded-t-lg focus:outline-none"
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.title}</span>
                            <span>
                                {expandedIndex === index ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-x-hidden
                            overflow-y-scroll
                            ${expandedIndex === index ? 'h-[30vh] lg:h-[30vh] ' : 'h-[0px]'}`}
                            // style={{
                            //     height: expandedIndex === index ? "600px lg:300px" : "0px",
                            //     opacity: expandedIndex === index ? 1 : 0,
                            // }}
                        >
                            <div className="p-4 overflow-y-scroll">
                                <p className="text-gray-300 mb-3">{item.description}</p>
            </section>
        </section>
    )
}


export default TextAndList