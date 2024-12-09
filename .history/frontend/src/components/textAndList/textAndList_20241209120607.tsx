import React from "react";

interface Props {
    subTit
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
    listAspects
}) => {

    return (
        <section>

        </section>
    )
}


export default TextAndList