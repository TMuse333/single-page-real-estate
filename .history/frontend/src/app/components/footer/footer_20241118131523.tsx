import React from "react";


import Link from "next/link";


interface props  {
    excludedLink:string,
    id?:string
}



const Footer2:React.FC<props> = ({
    excludedLink,
    id
}) => {

  const bigLinks = [
    {
      name: 'Home',
      destination:'/',
      secondaryLinks: [
        {
          name: 'Homepage',
          destination: '/',
        },
      ],
     
      //  
      
      listSubMenu: false,
    },
 
    {
        name: 'Meet Bonnie',
        secondaryLinks: [
          {
            name: 'About Bonnie',
            destination: '/online-food-ordering-system',
          },
          {
              name:'Professional Achievements',
              destination:''
          },
          {
              name:'Personal marketing program',
              destination:''
          }
        
        ],
        listSubMenu: true,
     
        subMenuAlt:'Two hands',
        desktopDescription:'Get to know me on a personal level and learn about my career and other programs'
      },
     
      {
        name: 'Guided Success',
        secondaryLinks: [
          {
              name:'Buying a home',
              destination:'/best-web-design-halifax'
          },
          {
            name: 'Selling a home',
            destination: '/long-term-success',
          },
         
        ],
        listSubMenu: true,
   
        desktopDescription:'Learn the process of buying or selling a home with a realtor and how I ensure you get the best deal.'
      },
    {
      name: 'Contact',
     
      destination:'/lets-work',
      listSubMenu: false,
      secondaryLinks: [
        {
          name: 'Contact me',
          destination: '/lets-work',
        },
      ],
    },
    // {
    //   name:"Get creative & learn",
    //   listSubMenu:false,
    //   secondaryLinks: [
    //     {
    //       name:'The Image-Text Box',
    //       destination:'/studio/image-text-box'
    //     }
    //   ]
    // },
   
  ];

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


    return (
        <footer
        id={id}
         className="w-screen relative flex flex-col
        items-center justify-center mx-auto  my-12
        text-white md:w-[90vw]" >
            <h6 className="text-3xl sm:text-4xl font-semibold
            mb-8">Site map</h6>
            
<ul className="flex flex-col mx-auto
sm:grid sm:grid-cols-2 
md:grid-cols-3 lg:grid-cols-4
            md:flex-row w-full mt-6
              w-full text-center
            justify-center items-center
            md:justify-center md:items-start " >


{filteredLinks.map((link, index) => (
  <React.Fragment key={index}>
    <ul className="flex flex-col mx-auto 
    items-center justify-center text-center">
   
    <p className="text-xl sm:text-2xl md:text-3xl
     mb-4 font-bold
     mx-auto text-center">
      {link.name}</p>
    {link.secondaryLinks && link.secondaryLinks.map((link2, innerIndex) => (
      <Link key={innerIndex}
      href={link2.destination}>


      <li className="mb-2 text-center hover:text-[#00bfff]
      mx-auto"
      key={innerIndex}>{link2.name}</li>
            </Link>
    ))}
     </ul>
  </React.Fragment>
))}
</ul>





        </footer>
    )
}

export default Footer2