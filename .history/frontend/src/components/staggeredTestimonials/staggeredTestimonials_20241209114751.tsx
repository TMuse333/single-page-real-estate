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
        mx-auto">
            <Image

        </div>
    )
}