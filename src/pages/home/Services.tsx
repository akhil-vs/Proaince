import React from "react";
import { motion } from "framer-motion";
import { Element } from 'react-scroll';
import Ai from "../../images/ai.png";
import Industry from "../../images/industry.png";
import Results from "../../images/results.png";

const cardData = [
  {
  image: Ai,
  title: "AI First Approach",
  text: "Advanced AI algorithms and machine learning models power all our solutions for maximum efficiency.",
  button: "Learn More",
  },{
  image: Industry,
  title: "Industry Expertise",
  text: "Deep understanding of industry-specific challenges and requirements across multiple sectors.",
  button: "Learn More",
  },{
  image: Results,
  title: "Proven Results",
  text: "Track record of delivering measurable improvements in efficiency and productivity.",
  button: "Learn More",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Services = () => {
  return (
    <Element name="">
    <div className="px-4 py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Empowering Innovation with Reliable Solutions<br />Discover the PROAINCE Advantage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white-100 p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center group hover:bg-gray-400 transition">
              <span className="text-gray-500 group-hover:text-blue-600 transition">
                <img src={card.image} alt={card.title} className="h-16 w-16 object-contain group-hover:grayscale-0 group-hover:brightness-110 transition" />
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.text}</p>
            {/* <button className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
              {card.button} <span>&rarr;</span>
            </button> */}
          </motion.div>
        ))}
      </div>
    </div>
    </Element>
  );
};

export default Services;