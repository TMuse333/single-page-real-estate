"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/link'

import trophy from '../../../public/trophy.png'
import { useGeneralContext } from "@/context/context";


interface NavbarProps {
    excludedLink:string
}


interface DesktopSubMenuProps {
    src:string,
    alt:string,
    destination?:string
    secondaryLinks?:{
        name:string
        destination:string
    }[],
    isClicked:boolean
    description:string,
    setIsClicked:React.Dispatch<React.SetStateAction<number | null>>
    index:number
   
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
    links: {
        name: string,
        destination?: string
        secondaryLinks:{
            name:string
            destination:string
        }[]
    }[]
  }

  const bigLinks = [
    {
      name: 'Home',
      destination:'/',
     
      //  
      
      listSubMenu: false,
    },
 
    {
      name: 'View listings',
      secondaryLinks: [
        {
          name: 'View Listings',
          destination: 'https://www.remaxnova.com/team/realtors/bonnie-hutchins-7616',
        },
        // {
        //     name:'Professional Achievements',
        //     destination:''
        // },
        // {
        //     name:'Personal marketing program',
        //     destination:''
        // }
      
      ],
      listSubMenu: false,
      subMenuSrc:trophy.src,
      subMenuAlt:'Two hands',
      desktopDescription:'Get to know me on a personal level and learn about my career and other programs'
    },
   
    // {
    //   name: 'Guided Success',
    //   secondaryLinks: [
    //     {
    //         name:'Buying a home',
    //         destination:'/best-web-design-halifax'
    //     },
    //     {
    //       name: 'Selling a home',
    //       destination: '/long-term-success',
    //     },
    //     {
    //       name: 'Our Process',
    //       destination: '/process',
    //     },
    //   ],
    //   listSubMenu: true,
    //   subMenuSrc:trophy.src,
    //   subMenuAlt:'Two hands',
    //   desktopDescription:'Learn the process of buying or selling a home with a realtor and how I ensure you get the best deal.'
    // },
    {
      name: 'Contact',
     
      destination:'/lets-work',
      listSubMenu: false,
    },

   
    // {
    //   name: 'Studio',
     
    //   destination:'/studio/image-text-box',
    //   listSubMenu: false,
    // },
    // {
    //   name: 'Extras',
    //   secondaryLinks: [
    //     {
    //         name:'Artwork',
    //         destination:'/artist'
    //     },
        // {
        //   name: 'Your long term success',
        //   destination: '/long-term-success',
        // },
        // {
        //   name: 'Our Process',
        //   destination: '/process',
        // },
    //   ],
    //   listSubMenu: true,   
    //   subMenuSrc:trophy.src,
    //   subMenuAlt:'Two hands',
    //   desktopDescription:'Some extra content that you will find interesting'
    // },

    
    // {
    //   name: 'Canvas',
    //   secondaryLinks: [
    //     {
    //         name:'Canvas',
    //         destination:'/canvas'
    //     }
    //   ],
    //   listSubMenu: false,
    // },
  ];

  

  const DesktopSubMenu:React.FC<DesktopSubMenuProps> = ({
    secondaryLinks,isClicked,description,
    index,
    setIsClicked
  }) => {

    // const [isHovered, setIsHovered] = useState(false)

    function handleMouseEnter(index:number){
      setIsClicked(index)
    }

    function handleMouseLeave(){
       setIsClicked(null)
    }

    return (
        <div className={` fixed top-[50px] w-screen
         left-0  transition-[height] overflow-hidden
         pt-4 
        flex justify-evenly ${isClicked  ? 'h-[200px] bg-gray-800 z-[10]' : 'h-[0px] z-[-1] bg-[transparent]'}`
        }
        onMouseEnter={()=>handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        >
            {/* <Image
            height={630}
            width={1200}
            className='w-[30vw] h-full
            object-contain
            mt-auto  mr-auto'
            src={src}
            alt={alt}
            /> */}

            <div className="flex flex-col mx-auto">
            <p className="w-[70vw]">{description}</p>

<ul className="flex mt-6">
    {secondaryLinks?.map((link, index) => (
      
            <li  key={index}
            className="mb-2 mr-4
            text-lg hover:text-gray-300
            bg-transparent p-3 rounded-xl">
                <Link href={link.destination}
       
        >
                {link.name}
                </Link>
            </li>
        
    ))}
</ul>
            </div>
            
        
       
        </div>
    )
  }

  const MobileSubMenu: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked,links}) => {

    function handleSubMenuLeave(){
        setSubMenuClicked(false)
     
    }

    const [secondaryLinksIndex, setSecondaryLinksIndex] =
    useState<number>(0)

    const [secondarySubMenuClicked, setSecondarySubMenuClicked] 
    = useState<boolean>(false)

    function handleSecondarySubClick(index:number){
        setSecondarySubMenuClicked(true)
        setSecondaryLinksIndex(index)
    }

    function handleSecondarySubLeave(){
        setSecondarySubMenuClicked(false)
        // setSecondaryLinksIndex(null)
    }

    function exitFullMobileNav(){
        setSubMenuClicked(false)
        setSecondarySubMenuClicked(false)

    }

    return (
        <nav className={`fixed top-0 right-0 bg-transparent
        h-screen w-[75vw] max-w-[470px] z-10 transition-transform
        text-black
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-40 ">
            {!secondarySubMenuClicked && (
                <>
         <button onClick={handleSubMenuLeave}
         className="absolute top-[5%] right-[10%] z-[90] text-3xl
         hover:text-q-blue transition-colors bg-transparent"
         >X
         </button>
      
         <ul
  className={`text-left absolute mt-8
  top-[25%]
  overflow-hidden transition-[height]
  flex flex-col items-start justify-center`}>
  {links.map((link, index) => (
    <li
      key={index}
      className="text-md sm:text-xl mb-4 mr-auto text-black pl-2 pr-2 hover:text-[#00bfff]">
      {link.destination ? (
        <Link href={link.destination}>
          {link.name}
        </Link>
      ) : (
        <span onClick={() => handleSecondarySubClick(index)}>
          {link.name}
        </span>
      )}
    </li>
  ))}
</ul>

                    </>
                        )}

                    <div className={`fixed top-0 h-full w-full transition-transform 
                    ${!secondarySubMenuClicked ? 'translate-x-full': ''}`}>

                            <button className="bg-transparent
                            top-[5%] absolute right-[10%] !text-2xl
                            hover:text-[#00bfff]"
                            onClick={exitFullMobileNav}>
                                X
                            </button>

                            <button onClick={handleSecondarySubLeave}
                             className="absolute top-[5%]
                             bg-transparent !text-lg hover:text-q-blue
                             transition-colors">Back</button>

                            
                                <ul className="absolute top-[25%] text-left left-[10%]
                                ">
                                  
                                {links[secondaryLinksIndex].secondaryLinks.map((link,index)=> (
                                  
                                        <li className="mb-2 text-black transition-colors
                                         hover:text-[#00bfff] md:xl"
                                         key={index}>
                                            <Link
                                  
                                  href={link.destination}
                                  passHref
                                  >
                                    {link.name}

                                          </Link>  
                                        </li>
                                   
                                ))}
                                                             </ul>
                               
                            
                        
                    </div>
        </div>
        </nav>
    )
  }

 



const BigNav: React.FC<NavbarProps> = ({ excludedLink }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false)
    const [hoveredSubMenuIndex, setHoveredSubMenuIndex] =
    useState<number | null>(null)

   
    
  
  
    const filteredLinks = bigLinks
    .filter(link => link.name !== excludedLink) // Filter out links where link.name matches excludedLink
    .map(link => {
      // Check if secondaryLinks exist before filtering
      const filteredSecondaryLinks = link.secondaryLinks
        ? link.secondaryLinks.filter(secondary => secondary.name !== excludedLink)
        : []; // If no secondaryLinks, return an empty array
  
      // Return the link with the filtered secondaryLinks
      return {
        ...link,
        secondaryLinks: filteredSecondaryLinks
      };
    });
  
    
    
    
    
    

      useEffect(() => {
        const handleResize = () => {
          if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth >= 900);
          }
        };
    
        if (typeof window !== 'undefined') {
          handleResize(); // Initial check
          window.addEventListener('resize', handleResize);
        }
    
        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
          }
        };
      }, []);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }


    function handleSubMenuHover(index:number){
        setHoveredSubMenuIndex(index)
    }

    function handleSubMenuLeave(){
        setHoveredSubMenuIndex(null)
    }

// useEffect(()=>{
//   console.log('filtered links,',filteredLinks)
//   console.log(filteredLinks[0].secondaryLinks[0].destination)
// },[])

const {heroInView} = useGeneralContext()


    return (
        <nav className={`fixed top-[0%] z-[301] w-screen left-0  h-[30px] flex justify-between items-center
         text-black ${heroInView ? 'bg-gray-600' : 'bg-gray'}`}>
            <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            links={filteredLinks }
            />
               <div className="relative w-full h-full flex items-center justify-end 
               lg:justify-around max-w-[1200px] ml-auto mr-auto 
             ">

{!isDesktop ? (

<>
          
              
            <div onClick={handleSubmenuClick}
            className={`lg:hidden  lg:w-auto flex flex-col justify-center items-center
            z-20 relative
            p-0 pr-7 ${subMenuClicked ? 'hidden' : ''}`}>
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px]" />
        </div>
       
        </>

        ) : (
            <>
            {/* <Link href='/'
            passHref>
             
     
           <Image src={trophy}
           className='w-[50px] relative z-[2]'
           width={600}
           height={1300}
           alt='Focusflow brain'
           />
           </Link> */}
            <section className="flex
            w-[80%] h-full
            justify-around items-center
          mx-auto 
            max-w-[1000px]

            ">
  
          
            {filteredLinks.map((link,index) => (
              
                <div key={index}
               
                 className={` relative font-semibold
                 my-auto ${!heroInView ? 'text-black' : 'text-black'}`}
                
                 >
                   
                    {link.listSubMenu ? (
                     <>
                      <p
                       onMouseEnter={()=>handleSubMenuHover(index)}
                       onMouseLeave={handleSubMenuLeave}
                      className="mt-auto relative z-[4]   text-sm sm:text-md">{link.name}</p>
                                 {link.subMenuSrc && link.subMenuAlt &&
                                 link.desktopDescription && (

              
<DesktopSubMenu
secondaryLinks={link.secondaryLinks}
src={link.subMenuSrc}
  alt={link.subMenuAlt}
  isClicked={hoveredSubMenuIndex === index}
  setIsClicked={setHoveredSubMenuIndex}
description={link.desktopDescription}
index={index}
/>

)}
                     </>
                    ) : (
                        <>
                    
  <Link href={link.destination? link.destination : ''}>
    <p className="my-auto text-sm relative z-[4] hover:text-[#00bfff]
    sm:text-md">
      {link.name}
    </p>
  </Link>


           
                        </>
                    )}
                    
                </div>
            ))}
              </section>
            </>
        )}

       

</div>      
               
        
          
            
        </nav>
    );
};

export default BigNav;