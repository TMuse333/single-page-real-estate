import React from "react";


interface InteractiveBoxProps {
    src:string,
    alt:string,
    description:string,
    button:string
}

const InteractiveBox:React.FC<InteractiveBoxProps