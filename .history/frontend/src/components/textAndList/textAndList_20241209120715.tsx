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
            <h3>{subtitle}</h3>
        </section>
    )
}


export default TextAndList