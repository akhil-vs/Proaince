import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element } from 'react-scroll';
import sideImage from "../../images/about-sideimage.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Element name="aboutus">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col md:flex-row items-center justify-between py-16">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 mb-10 md:mb-0"
      >
        <h4 className="text-sm text-gray-600 font-medium mb-2">Innovate</h4>
        <h1 className="text-4xl font-extrabold text-black leading-snug mb-4">
          Driving Innovation and <br /> Sustainability with AI
        </h1>
        <p className="text-gray-700 mb-6 text-justify">
          At PROAINCE, we are passionate about transforming the way businesses operate through the power of artificial intelligence. Our mission is to empower organizations with innovative AI solutions that drive efficiency, foster growth, and enable smarter decision-making.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-black mb-1">Our Mission</h3>
            <p className="text-sm text-gray-600 text-justify">
              To empower organizations with cutting-edge AI solutions that streamline operations, enhance decision-making, and drive sustainable growth. We're committed to making advanced technology accessible and practical for businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-1">Our Vision</h3>
            <p className="text-sm text-gray-600 text-justify">
              To be the global leader in AI-powered business solutions, creating a future where technology and human expertise work seamlessly together to achieve unprecedented levels of efficiency and innovation.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-full max-w-md h-auto bg-gray-300 flex items-center justify-center rounded">
          <img src={sideImage} alt="About Us" className="w-full h-full object-cover rounded" />
        </div>
      </motion.div>
    </div>
    </Element>
  );
}

export default About;