import Link from "next/link";
import React from "react";


const Footer = () => {

    return (
        <footer className="bg-gray-600 py-12
        text-center">
            <h5 className="font-semibold text-xl
            sm:text-2xl">FocusFlow software real estate demo</h5>
            <p className="py-6 px-3 sm:text-lg">This is a sample of some designs
                your website can have. To View
                more designs like this and learn
                how you can elevate your digital presence
                visit focusflow software.com
            </p>
           
            <Link href='https://www.focusflowsoftware.com/real-estate-agent-websites'>
            <p className="text-white text-center">Developed by FocusFlow Software</p>
            </Link>
        </footer>
    )
}


export default Footer