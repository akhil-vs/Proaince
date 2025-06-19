import React from "react";
import { motion } from "framer-motion";
import { FaTrain, FaUniversity, FaDesktop, FaChartLine, FaHeartbeat, FaCar, FaPlane, FaIndustry } from "react-icons/fa";
import { Element } from 'react-scroll';

const industries = [
  { icon: <FaHeartbeat size={40} />, label: "HEALTHCARE", description:"Transforming care with intelligent diagnostics, sustainable tech, and innovative health solutions.", color: "bg-red-700" },
  { icon: <FaPlane size={40} />, label: "AEROSPACE", description:"Elevating aerospace with predictive AI, advanced engineering, and green propulsion solutions.", color: "bg-sky-500" },
  { icon: <FaUniversity size={40} />, label: "EDUCATION", description:"Redefining learning through personalized AI tools, digital innovation, and inclusive sustainability.", color: "bg-orange-500" },
  { icon: <FaIndustry size={40} />, label: "MANUFACTURING", description:"Revolutionizing production with intelligent automation, lean innovation, and sustainable practices.", color: "bg-lime-500" },
  { icon: <FaDesktop size={40} />, label: "IT", description:"Empowering digital ecosystems through AI automation, secure innovation, and energy-efficient infrastructure.", color: "bg-purple-500" },
  { icon: <FaCar size={40} />, label: "AUTOMOTIVE", description:"Driving the future with AI-powered mobility, smart engineering, and eco-conscious innovation.", color: "bg-blue-700" },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Industries: React.FC = () => {
  return (
  <Element name="industries">
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Empowering Industries Through Technology and Insight</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Business isn't one size fits all. Every industry requires a custom solution.<br />
        We harness cutting-edge technology and deep industry insight to drive growth, efficiency, and innovation across every sector we serve.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={itemVariants}
            className={`${industry.color} relative group text-white rounded-md h-40 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105`}
          >
            {industry.icon}
            <span className="mt-2 text-sm font-semibold group-hover:hidden">
              {industry.label}
            </span>
            <span className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {industry.description}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  </Element>
  );
};

export default Industries;
