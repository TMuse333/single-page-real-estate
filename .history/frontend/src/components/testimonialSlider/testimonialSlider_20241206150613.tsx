import React from "react";
import { motion } from "framer-motion";
import placeholder from '../../../public/placeholder.png';

// TestimonialBox Component
const TestimonialBox: React.FC<{ name: string; imageSrc: string; testimonial: string,
delay?:boolean }> = ({
  name,
  imageSrc,
  testimonial,
  delay
}) => {
  return (
    <motion.div
      className="w-[60vw] relative min-w-[60vw] flex flex-col items-center justify-center text-center py-8 px-4 bg-red-200"
      initial={{ opacity: 1, x: "100%" }} // Start off-screen to the right
      animate={{
        opacity: 1,
        x: ["100%",  "-100%"], // Slide from right to left and then off the screen
      }}
     
      transition={{
        duration:!delay? 10 : 10,
        repeat: Infinity,
        ease: "linear",
      }}
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
    
      {/* <div className="flex space-x-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialBox
            key={index}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div> */}
     

 <div className="flex bg-green-400">


      <TestimonialBox
      name={testimonials[0].name}
      imageSrc={testimonials[0].imageSrc}
      testimonial={testimonials[0].testimonial}
      delay
      />
            <TestimonialBox
      name={testimonials[0].name}
      imageSrc={testimonials[0].imageSrc}
      testimonial={testimonials[0].testimonial}
      />
       </div>
        </>

  );
};

export default TestimonialSlider;
