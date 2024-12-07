import Image from "next/image";
import Link from "next/link";
import React from "react";



interface Props {
    src:string,
    alt:string,
    name:string,
    title:string
    description:string,
    quote:string
    phone:string,
    email:string,
    socials:{
        src:string,
        destination:string,
        alt:string
    }[]
}


const ContactCard:React.FC<Props> = ({
    src,alt,name,
    phone,email,socials,title,quote
}) => {


    return (
        <section className="mx-auto flex flex-col
        md:flex-row max-w-[1200px] my-12">
            <section className="text-center
            md:w-[33vw] max-w-[400px]">
                <h3 className="mb-2 font-bold
                text-3xl">{name}</h3>
                <h4 className="mb-2 font-semibold
                whitespace-pre-line">{title}</h4>
                <p className="mb-2 px-4">{quote}</p>
            </section>
            <section className="md:w-[33vw] max-w-[400px]">
                <Image
                src={src}
                alt={alt}
                className='w-[70vw]
                object-contain mx-auto
                max-w-[200px] hax-h-[250px]'
                width={600}
                height={1300}
                />
            </section>
            <section className="text-center  md:w-[33vw] max-w-[400px]">
                <h3 className="mb-2 text-2xl font-semibold">Contact Information</h3>
                <p className="mb-2 font-semibold">{phone}</p>
                <p className="mb-2 font-semibold whitespace-pre-line
                leading-8">{email}</p>
                <ul className="flex items-center w-full 
                ">
                    {socials.map((social,index)=>(
                        <li className="mx-auto"
                        key={index}
                        >
                            <Image
                            src={social.src}
                            alt={social.alt}
                            className='w-[100px]
                            object-contain'
                            width={600}
                            height={1300}
                            />
                            <Link
                            href={social.destination}
                            />
                        </li>
                    ))}
                </ul>
            </section>

        </section>
    )
}

export default ContactCard