import React from 'react';
import left from '../../images/left.png';
import right from '../../images/right.png';
import techbg from "../../images/cardbgtech.png";
import rdbg from '../../images/cardbgrandd.png';

const cardData = [
  { id: 1, title: "Tailored Solutions", content: "We don’t believe in one-size-fits-all. Every solution is built from the ground up to address your specific needs", bg: "bg-proaince", font: "text-white" },
  { id: 2, title: "Scalable and Future-Proof", content: "Our software is designed to grow with your business, ensuring long-term value", bg: "bg-cardbg", font: "text-white" },
  { id: 3, title: "Cutting-Edge Technologies", content: "We leverage the latest technologies, frameworks, and development methodologies to deliver robust and secure solutions", bg: techbg, font: "text-white" },
  { id: 4, title: "End-to-End Services", content: "We don’t believe in one-size-fits-all. Every solution is built from the ground up to address your specific needs", bg: "bg-cardbg", font: "text-white" },
  { id: 5, title: "Seamless Integration", content: "Our solutions integrate effortlessly with your existing tools and systems", bg: "bg-surface", font: "text-black" },
  { id: 6, title: "R&D and Innovations", content: "Our solutions integrate effortlessly with your existing tools and systems", bg: rdbg, font: "text-white" },
];

const TopAlignedCard = ({ title, content, bg, font }: { title: string; content: string, bg: string, font: string }) => (
  <div className={`rounded-lg p-6 shadow-lg h-full flex flex-col min-h-[422px] ${bg} ${font}`}>
    <div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  </div>
);

const BottomAlignedCard = ({ title, content, bg, font }: { title: string; content: string, bg: string, font: string }) => (
  <div className={`rounded-lg p-6 shadow-lg h-auto flex flex-col justify-end ${bg} ${font}`}>
    <div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  </div>
);

const ImageBgCard = ({ title, content, bg, font }: { title: string; content: string, bg: string, font: string }) => (
  <div className={`rounded-lg p-8 shadow-lg h-[300px] flex flex-col justify-end ${font}`} style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  </div>
);

const WhyProaince: React.FC = () => {
  return (
    <div className="w-full mx-auto px-2 border">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-surfaceinverse rounded-xl py-1">
        <div className="hidden lg:block lg:w-1/12" style={{ backgroundImage: `url(${left})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
        </div>
        {/* Left Content Section */}
        <div className="lg:w-5/12 px-2 py-10 text-white">
          <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Your growth accelerator</p>
        
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-24 lg:mb-32 text-white">
            Why choose Proaince
          </h1>
        
          <div className="space-y-2 sm:space-y-3 md:space-y-4 text-white">
            <p className="text-base sm:text-md md:text-lg font-small">
              At PROAINCE, we combine cutting-edge technology, AI-driven innovation,and a client-first approach to deliver high quality solutions.
              <span className='text-gray-400'> With a commitment to affordability, precision, and timely delivery, we help businesses and stay ahead in rapidly evolving digital and engineering landscape.</span>
            </p>
          </div>
        </div>
        {/* Right Cards Section - Updated Layout */}
        <div className="lg:w-5/12 bg-surfaceinverse">
          <div className="p-3 h-[500px] overflow-y-auto scrollbar-hide" style={{ 
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}>
            <div className="grid gap-2">
              {/* Row 2 - Two Cards */}
              <div className="grid grid-cols-2 gap-2">
                <TopAlignedCard title={cardData[0].title} content={cardData[0].content} bg={cardData[0].bg} font={cardData[0].font}/>
                <BottomAlignedCard title={cardData[1].title} content={cardData[1].content} bg={cardData[1].bg} font={cardData[1].font}/>
              </div>

              {/* Row 1 - Single Card */}
              <div className="rounded-lg shadow-sm flex flex-col">
                <ImageBgCard title={cardData[2].title} content={cardData[2].content} bg={cardData[2].bg} font={cardData[2].font}/>
              </div>

              {/* Row 4 - Two Cards */}
              <div className="grid grid-cols-2 gap-2">
                <BottomAlignedCard title={cardData[3].title} content={cardData[3].content} bg={cardData[3].bg} font={cardData[3].font}/>
                <TopAlignedCard title={cardData[4].title} content={cardData[4].content} bg={cardData[4].bg} font={cardData[4].font}/>
              </div>

              {/* Row 3 - Single Card */}
              <div className="rounded-lg shadow-sm">
                <ImageBgCard title={cardData[5].title} content={cardData[5].content} bg={cardData[5].bg} font={cardData[5].font}/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/12" style={{ backgroundImage: `url(${right})`, backgroundSize: 'cover', backgroundPosition: 'right'}}>
        </div>
      </div>
    </div>
  );
};

export default WhyProaince;