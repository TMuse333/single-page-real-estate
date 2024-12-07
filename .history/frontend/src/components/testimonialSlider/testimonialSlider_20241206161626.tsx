import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import placeholder from '../../../public/placeholder.png';

// TestimonialBox Component
const TestimonialBox: React.FC<{
  name: string;
  imageSrc: string;
  testimonial: string;
  index: number;
  parentInView?: boolean;
}> = ({ name, imageSrc, testimonial, parentInView, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
  });

  // Helper function to calculate numeric transform value in pixels
  const calculateInitialTransform = (index: number): number => {
    const vwInPx = window.innerWidth * 0.6; // 60vw in pixels
    const pxOffset = 10; // 10px offset
    return index === 0 ? 0 : index * (vwInPx + pxOffset);
  };

  // Compute initial transform as a number
  const initialTransformValue = calculateInitialTransform(index);

  const [translateValue, setTranslateValue] = useState(initialTransformValue);

  useEffect(()=>{
    console.log('translate value',translateValue)
  },[translateValue])

  // Reset translateValue when the parent comes back into view and the box goes out of view
  useEffect(() => {
    if (parentInView && translateValue <= -1050) {
      setTranslateValue(700);
      console.log('we have gone off the wall')
    }
  }, [inView, parentInView, initialTransformValue,
  translateValue]);

  // Update translateValue over time when the parent is in view
  useEffect(() => {
    if (!parentInView) {
      return; // Stop the interval if parent is not in view
    }

    const interval = setInterval(() => {
      setTranslateValue((prevValue) => prevValue - 30); // Decrease the value
    }, 100); // Update the value every 100ms

    // Clean up interval when unmounted or parentInView changes
    return () => clearInterval(interval);
  }, [parentInView]);

  useEffect(()=>{
    if(parentInView && !inView){
      console.warn('offsides, translate value',translateValue)
    }
  },[inView])

  return (
    <motion.div
      ref={ref}
      className={`w-[60vw] min-w-[60vw] flex flex-col items-center justify-center text-center py-8 px-4 bg-blue-400 rounded-2xl transition-transform absolute
      right-0`}
      style={{
        transform: `translateX(${translateValue}px)`, // Use numeric value directly
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


  const ref = useRef(null)

  const inView = useInView(ref,{
    amount:0.1
  }
    )

  // Testimonial data
  const testimonials = [
    {
      name: "John Doe",
      imageSrc: placeholder.src,
      testimonial:
        "This company has completely transformed our business. Highly recommend!",
    },
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
    
      <div className="flex  relative 
      w-screen h-[40vh]
      "
      ref={ref}>
        {testimonials.map((testimonial, index) => (
          <TestimonialBox
            key={index}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
            parentInView={inView}
            index={index}
          />
        ))}
      </div>
     


        </>

  );
};

export default TestimonialSlider;
