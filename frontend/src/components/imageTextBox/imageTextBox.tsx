
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SlidingText from "../slidingText/slidingText";
import { useGeneralContext } from "@/context/context";

interface Props {
  src?: string;
  alt?: string;
  title: string;
  description: string;
  buttonText?: string;
  destination?: string;
  reverse?: boolean;
  iframe?: React.ReactNode;
}

const ImageTextBox: React.FC<Props> = ({
  src,
  alt,
  title,
  description,
  buttonText,
  destination,
  reverse,
  iframe,
}) => {
  const [slideComplete, setSlideComplete] = useState(false);
  const { isMobile } = useGeneralContext();

  // Framer Motion Variants
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section
      className={`flex flex-col mb-[6rem]
        max-w-[1200px] mx-auto text-black
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Sliding Text */}
      {!isMobile && (
        <SlidingText
          text={title}
          setSlideComplete={setSlideComplete}
          reverse={reverse}
        />
      )}

      {/* Image or Iframe */}
      {src && alt ? (
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={slideComplete ? "visible" : "hidden"}
          className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[467px] max-w-[568px] md:w-[45vw]"
        >
          <Image src={src} alt={alt} width={600} height={1300} />
        </motion.div>
      ) : iframe ? (
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={slideComplete ? "visible" : "hidden"}
          className="relative rounded-xl w-[90vw] h-[55vw] md:w-[45vw] max-h-[367px] max-w-[568px] mr-auto object-contain ml-auto my-auto"
        >
          {iframe}
        </motion.div>
      ) : null}

      {/* Text Section */}
      <section className="w-full md:w-[50vw]">
        {isMobile && (
          <SlidingText
            text={title}
            setSlideComplete={setSlideComplete}
            reverse={reverse}
          />
        )}

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate={slideComplete ? "visible" : "hidden"}
          className="px-4 mt-4 font-semibold sm:text-md md:text-lg"
        >
          {description}
        </motion.p>

        {destination && buttonText && (
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={slideComplete ? "visible" : "hidden"}
          >
            <Link href={destination}>
              <button
                className={`mt-4 p-3 rounded-2xl bg-[#00bfff] text-white hover:text-[#00bfff] hover:bg-white hover:scale-[1.05] transition-transform transition-colors ml-4`}
              >
                {buttonText}
              </button>
            </Link>
          </motion.div>
        )}
      </section>
    </section>
  );
};

export default ImageTextBox;
