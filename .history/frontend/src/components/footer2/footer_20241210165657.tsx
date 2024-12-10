import Link from "next/link";
import React from "react";


const Footer = () => {

    return (
        <footer className="bg-gray-600 py-12
        text-center">
            <h5 className="font-semb">FocusFlow software real estate demo</h5>
            <p>This is a sample of some designs
                your website can have
            </p>
           
            <Link href='https://www.focusflowsoftware.com/real-estate-agent-websites'>
            <p className="text-white text-center">Developed by FocusFlow Software</p>
            </Link>
        </footer>
    )
}


export default Footer