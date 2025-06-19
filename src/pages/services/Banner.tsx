import React from 'react';
import banner from '../../images/banner-bg.png';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
    className="relative w-full h-auto min-h-[28rem] bg-cover bg-center px-4 md:px-32 py-16 z-0"
    style={{ backgroundImage: `url(${banner})` }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

      {/* First Column */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center"
      >
        <p className="text-tertiary font-medium mb-4 text-base sm:text-lg">
          Your growth accelerator
        </p>
        <p className="text-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
          Digital & engineering solutions to drive your business forward
        </p>
      </motion.div>

      {/* Second Column */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 place-items-start lg:content-end"
      >
        <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col justify-center w-full">
          <p className="text-secondary font-normal text-base sm:text-lg md:text-[22px] leading-relaxed mb-6">
            Driving innovation, efficiency, and growth in an ever-evolving world.
          </p>
          <button className="bg-proaince text-white rounded-full px-6 py-3 shadow-lg transition transform hover:scale-105 w-fit">
            Book a consultation
          </button>
        </div>
      </motion.div>

    </div>
  </div>

  );
}

export default Banner;