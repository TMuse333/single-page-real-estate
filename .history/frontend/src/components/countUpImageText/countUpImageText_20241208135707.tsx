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
        <section className="flex flex-col
        md:flex-row mx-auto max-w-[1200px]">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, autem deserunt. Ab molestias et excepturi, at dignissimos repellat, dolorum amet velit ipsam id voluptate! Voluptatibus!
        </section>
    )
}