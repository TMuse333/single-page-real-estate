import React from "react";

interface Props {
    src:string,
    alt:string
    title:string,
    description:string,
    stats:{
        number:string,
        name:string
    }
}



const CountUpImageText:React.FC<Props> = ({
    src,alt,title,description,stats
}) => {


    return (
        <section>
            
        </section>
    )
}