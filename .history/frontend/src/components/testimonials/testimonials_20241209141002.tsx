import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import dynamic from 'next/dynamic';
import { HTMLMotionProps } from 'framer-motion';

import SlidingText from '../slidingText/slidingText';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'p'>>;


interface TestimonialProps {
  testimonials?: {
    title?: string;
    quote: string;
    author: string;
    effect: string;
  }[];
}

const testimonialsData = [
  {
    title: 'First-Time Homebuyer',
    quote: 'The process of buying my first home was incredibly easy and stress-free.',
    author: 'Jessica Lee',
    effect: `As a first-time homebuyer, I had so many questions, but the patience and expertise of the agent I worked with put me at ease. They explained every step clearly and helped me find a home that exceeded my expectations. Their dedication and personalized approach truly made me feel supported throughout the journey.`,
  },
  {
    title: 'Seasoned Investor',
    quote: 'The market knowledge and negotiation skills I experienced were unmatched.',
    author: 'Michael Carter',
    effect: `The agent I worked with had an exceptional ability to spot value in any market. As an experienced investor, I’ve worked with many agents, but their attention to detail and strategic approach stood out. They went above and beyond to ensure my investments yielded the best returns. Highly recommend them for anyone looking to maximize their portfolio!`,
  },
  {
    title: 'Happy Seller',
    quote: 'My home was sold quickly and for a great price!',
    author: 'Sandra Mitchell',
    effect: `I couldn’t be happier with the service provided during the sale of my home. From staging tips to marketing strategies, nothing was left to chance. Their expertise in pricing and negotiating brought multiple offers, and we closed above the asking price in record time. If you’re looking to sell your property, this is the agent you can trust!`,
  },
];

  

const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* <AppearingGradient
        text='Client Success, Delivered'
        subText="Explore feedback from clients who've experienced the power of custom web design"
      /> */}

      <SlidingText
      text='Client Success, Delivered'
      />

      <section className='bg-gray-300
      text-black
        ml-auto mr-auto max-w-[1200px] w-screen 
        relative mb-8 rounded-lg text-black
        h-[85vh] max-h-[600px] sm:w-[90vw]'
      >
        <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
          hover:scale-[1.15] z-[12] transition-all" onClick={nextTestimonial} />
        <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200 z-[12]
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
            text-lg md:text-xl lg:text-2xl sm:pl-12 sm:pr-12 pt-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].quote}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl
            whitespace-pre-line text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].effect}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
            sm:text-lg text-left md:text-xl font-semibold" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            exit={{ opacity: 0 }}
          >
            -{testimonials[currentTestimonial].author}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
            text-left md:text-xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].title}
          </MotionP>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Testimonials;