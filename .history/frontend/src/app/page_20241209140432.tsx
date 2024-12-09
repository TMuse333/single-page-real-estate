"use client"


import AuroraHero from "../components/auroraHero/auroraHero";
import CountUpStats from "../components/countUpStats/countUpStats";
import ExperienceCard from "../components/experienceCard/experienceCard";
import { experienceCard1, experienceCard2 ,experienceCard3,
 displayBox1, displayBox2,blogData, closingStatement, contactCard,
interactiveBoxes,countUpImageText, textListData} from "@/data/data";
// import ImageTextBox from "./components/imageTextBox/imageTextBox";
import DisplayBoxes from "../components/displayBox/displayBox";
import Testimonials from "../components/testimonials/testimonials";
import ScrollCarousel from "../components/scrollCarousel/scrollCarousel";
import Closer from "../components/closer/closer";
import BigNav from "../components/navbar/bigNav";
import Footer2 from "../components/footer/footer";
import ContactCard from "../components/contactCard/contactCard";
import Herobanner from "@/components/herobanner/herobanner";
import home from '../../public/home.webp'
import ScaleImage from "@/components/scaleImage/scaleImage";
import InteractiveBoxes from "@/components/interactiveDisplayBox/interactiveDisplayBox";
import TestimonialSlider from "@/components/testimonialSlider/testimonialSlider";
import CountUpImageText from "@/components/countUpImageText/countUpImageText";
import TextAndList from "@/components/textAndList/textAndList";
export default function Home() {
  return (
    <>
   
   <main className="relative w-screen overflow-x-hidden
   bg-gray-200 ">
   <BigNav
    excludedLink=""
    />
    {/* <AuroraHero/> */}
    <Herobanner/>
    {/* <CountUpStats
    number1="45"
    number2="15.5"
    number3="20"/> */}

    <ScaleImage
    src={home.src}
    alt={'slat'}
    />

    <InteractiveBoxes
    boxes={interactiveBoxes}
    />

    <CountUpImageText
    {...countUpImageText}
    />

    <TextAndList
    {...textListData}
    />

    {/* <TestimonialSlider
    /> */}

{/* <ExperienceCard
    {...experienceCard2}
    />

    <DisplayBoxes
    data={displayBox1}
    /> */}



{/* <ExperienceCard
    {...experienceCard3}
    />

  

    <DisplayBoxes
    data={displayBox2}
    />

  <ExperienceCard
    {...experienceCard1}
    /> */}

    <Testimonials/>

    <ScrollCarousel
    images={blogData}
    bgImage
    />

  

    <Closer
    {...closingStatement}
    />

<ContactCard
    {...contactCard}
    />

    <Footer2
    excludedLink=""
    />


   </main>
   </>
  );
}
