import React from 'react';
import banner from '../../images/banner3-bg.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Banner2 = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
    }
  }, [inView, controls]);
  return (
    <div
      ref={ref}
      className="relative w-full h-auto min-h-[28rem] bg-cover bg-center px-4 md:px-32 lg:mt-20 py-16 z-0"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

        {/* First Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="flex flex-col justify-center"
        >
          <p className="text-tertiary font-medium mb-4 text-base sm:text-lg">
            Your growth accelerator
          </p>
          <p className="text-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
            Comprehensive solutions for a Smarter, More Efficient Future
          </p>
        </motion.div>

        {/* Second Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 place-items-start lg:content-end"
        >
          <div></div>
          <div className="col-span-1 md:col-span-2 flex flex-col w-full">
            <p className="text-secondary font-normal text-base sm:text-lg md:text-[22px] leading-relaxed mb-6">
              We deliver cutting-edge digital solutions and precision engineering to drive innovation and efficiency. From websites to AI-powered apps, marketing, branding, and advanced engineering, we help your business stay ahead.
            </p>
            <button className="bg-black text-white rounded-full px-6 py-3 shadow-lg transition transform hover:scale-105 w-fit">
              Book a consultation
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Banner2;