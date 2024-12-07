import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import placeholder from '../../../public/placeholder.png';

// TestimonialBox Component
const TestimonialBox: React.FC<{ name: string; imageSrc: string; testimonial: string,


delay?:boolean }> = ({
  name,
  imageSrc,
  testimonial,
  delay
}) => {

const [translateValue, setTranslateValue]
= useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setTranslateValue((prevValue) => prevValue - 50); // Increase the value by 1
  }, 100); // Update the value every 10 milliseconds (you can adjust this for speed)

  // Clean up the interval when the component is unmounted
  return () => clearInterval(interval);
}, []);

  return (
    <motion.div
      className={`w-[60vw] relative min-w-[60vw] flex flex-col items-center justify-center text-center py-8 px-4 bg-blue-400
      rounded-2xl `}
      style={{ transform: `translateX(${translateValue}px)` }}
    >
      <img
        src={imageSrc}
        alt={name}
        className="rounded-full w-24 h-24 object-cover mb-4"
      />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-md text-gray-600 italic">{testimonial}</p>
    </motion.div>
  );
};

// TestimonialSlider Component
const TestimonialSlider: React.FC = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "John Doe",
      imageSrc: placeholder.src,
      testimonial:
        "This company has completely transformed our business. Highly recommend!",
    },
    {
      name: "Jane Smith",
      imageSrc: placeholder.src,
      testimonial:
        "Amazing service and results! I will definitely be coming back for more.",
    },
    // {
    //   name: "Michael Johnson",
    //   imageSrc: placeholder.src,
    //   testimonial:
    //     "An absolute pleasure to work with. They exceeded all my expectations!",
    // },
    // {
    //   name: "Jane Smith",
    //   imageSrc: placeholder.src,
    //   testimonial:
    //     "Amazing service and results! I will definitely be coming back for more.",
    // },
    // {
    //   name: "Michael Johnson",
    //   imageSrc: placeholder.src,
    //   testimonial:
    //     "An absolute pleasure to work with. They exceeded all my expectations!",
    // },
  ];

  return (
    <>
    
      <div className="flex space-x-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialBox
            key={index}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
     


        </>

  );
};

export default TestimonialSlider;