import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import img1 from '../../images/manufacturing-banner.png';
import img2 from '../../images/logistics-banner.jpg';
import img3 from '../../images/technology-banner.jpg';
import img4 from '../../images/retail-banner.png';
import img5 from '../../images/finance-banner.png';
import img6 from '../../images/healthcare-banner.png';
import img7 from '../../images/education-banner.png';

const images = [
  { src: img1, text: 'Manufacturing' },
  { src: img2, text: 'Logistics & Supply chain' },
  { src: img3, text: 'Technology & startups' },
  { src: img4, text: 'Retail & eCommerce' },
  { src: img5, text: 'Finance & Banking' },
  { src: img6, text: 'Healthcare' },
  { src: img7, text: 'Education' },
];

const Industries: React.FC = () => {
  const [index, setIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = (direction: 'up' | 'down') => {
    setIndex((prevIndex) => {
      let nextIndex = direction === 'down' ? prevIndex + 1 : prevIndex - 1;

      // Prevent scrolling beyond the boundaries
      if (nextIndex < 0) {
        nextIndex = 0; // Stay at the first image
      } else if (nextIndex >= images.length) {
        nextIndex = images.length - 1; // Stay at the last image
      }

      return nextIndex;
    });
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) {
      e.preventDefault();
      scroll(e.deltaY > 0 ? 'down' : 'up');
    }
  };

  const handleKey = (e: KeyboardEvent) => {
    if (isScrolling) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scroll('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scroll('up');
      }
    }
  };

  const handleGalleryScroll = () => {
    const gallery = galleryRef.current;

    if (gallery) {
      const { scrollTop, scrollHeight, clientHeight } = gallery;

      if (scrollTop <= 0) {
        // Reached top of the gallery
        setIsScrolling(false); // Allow page scroll
      } else if (scrollTop + clientHeight >= scrollHeight) {
        // Reached bottom of the gallery
        setIsScrolling(false); // Allow page scroll
      } else {
        setIsScrolling(true); // Lock the page scroll within the gallery
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isScrolling]);

  useEffect(() => {
    // Monitor scroll in the gallery
    const gallery = galleryRef.current;

    if (gallery) {
      gallery.addEventListener('scroll', handleGalleryScroll);

      // Cleanup scroll event listener on unmount
      return () => {
        gallery.removeEventListener('scroll', handleGalleryScroll);
      };
    }
  }, []);

  return (
    <div className="px-[10px] gallery w-full flex flex-col bg-white text-white rounded-xl z-0">
      <div
        ref={galleryRef}
        className="relative h-screen w-full flex flex-col overflow-clip rounded-xl"
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
        onTouchStart={() => setIsScrolling(true)}
        onTouchEnd={() => setIsScrolling(false)}
      >
        <div className="absolute w-full h-full z-0 flex flex-col justify-center items-start px-6 space-y-4 md:px-32">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={classNames(
                'text-white text-lg md:text-lg font-semibold transition-all duration-500 flex items-center space-x-4',
                {
                  'font-bold': i === index,
                  'font-normal': i !== index,
                }
              )}
              animate={{ opacity: i === index ? 1 : 0.5 }}
              transition={{ opacity: { duration: 0.3 } }}
            >
              <div
                className={classNames(
                  'w-4 h-4 rounded-full transition-all duration-300',
                  {
                    'bg-gray-200': i !== index,
                    'bg-white': i === index,
                  }
                )}
              />
              <span className='tracking-[-0.04rem] leading-[1]'>{img.text}</span>
            </motion.div>
          ))}
          <motion.div
            className="pl-8 text-white text-xl md:text-xl font-bold mt-8"
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.3 } }}
          >
            Industries We Service
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          className="w-full h-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${images[index].src})` }}
        />
      </div>
    </div>
  );
};

export default Industries;