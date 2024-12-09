import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

   
       return ()
}


export default TextAndList