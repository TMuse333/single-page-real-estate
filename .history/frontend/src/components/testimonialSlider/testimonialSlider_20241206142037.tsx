import React from "react";
import { motion } from "framer-motion";
import placeholder from '../../../public/place'
// TestimonialBox Component
const TestimonialBox: React.FC<{ name: string; imageSrc: string; testimonial: string }> = ({
  name,
  imageSrc,
  testimonial,
}) => {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center text-center py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
      imageSrc: "/path/to/image1.jpg",
      testimonial:
        "This company has completely transformed our business. Highly recommend!",
    },
    {
      name: "Jane Smith",
      imageSrc: "/path/to/image2.jpg",
      testimonial:
        "Amazing service and results! I will definitely be coming back for more.",
    },
    {
      name: "Michael Johnson",
      imageSrc: "/path/to/image3.jpg",
      testimonial:
        "An absolute pleasure to work with. They exceeded all my expectations!",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full py-12">
      <motion.div
        className="flex space-x-12"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialBox
            key={index}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;
