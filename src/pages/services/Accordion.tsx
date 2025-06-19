import React, { useState, useEffect, useRef } from 'react';

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  cards?: CardItem[];
}

interface CardItem {
  title: string;
  icon: string;
  description: string;
  color: string;
  font: string;
}

const Accordion: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('01');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  // Sample icons (replace with your actual icons)
  const icons = [
    '💻', '📱', '☁️', '🔄', '🏗️', '🎨', '🔌', '📊',
    '🔒', '🚀', '🧩', '📈', '🛠️', '🌐', '📲', '🎯'
  ];

  const accordionData: AccordionItem[] = [
    {
      id: '01',
      number: '01',
      title: 'Custom software development services',
      description: 'Creating tailored software solutions specifically designed to meet business requirements.',
      cards: [
        {
          title: 'Beepoke Software Development',
          icon: icons[0],
          description: 'Creating tailored software solutions for businesses, including web, mobile, and enterprise applications.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Cloud & API Solutions',
          icon: icons[1],
          description: 'Developing scalable cloud applications and integrating APIs to enable seamless communication between systems.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'Software Product Development & Modernization',
          icon: icons[2],
          description: 'Building full-fledged software products and modernizing legacy systems to meet evolving business needs.',
          color: 'bg-black',
          font: 'text-white'
        },
        {
          title: 'Technology Consulting & Architecture',
          icon: icons[3],
          description: 'Providing expertise in software architecture, system scalability, and digital transformation strategies.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'UX/UI Design & Quality Assurance',
          icon: icons[4],
          description: 'Designing intuitive user experiences while ensuring software reliability through testing and QA processes.',
          color: 'bg-black',
          font: 'text-white'
        },
        {
          title: 'AI, Blockchain & Cybersecurity Solutions',
          icon: icons[5],
          description: 'Integrating AI/ML for automation, securing applications from cyber threats, and building blockchain-based systems.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Ongoing Support & Maintenance',
          icon: icons[6],
          description: 'Providing continuous updates, performance optimization, and technical support for software applications.',
          color: 'bg-proaince',
          font: 'text-white'
        }
      ]
    },
    {
      id: '02',
      number: '02',
      title: 'Engineering technology services',
      description: 'Advanced engineering solutions for modern businesses.',
      cards: [
        {
          title: 'System Integration',
          icon: icons[6],
          description: 'Seamless integration of complex systems.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Technical Consulting',
          icon: icons[7],
          description: 'Expert advice for engineering challenges.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'Implementation',
          icon: icons[8],
          description: 'Deployment of engineering solutions.',
          color: 'bg-black',
          font: 'text-white'
        }
      ]
    },
    {
      id: '03',
      number: '03',
      title: 'Website development',
      description: 'Creating powerful web experiences for your users.',
      cards: [
        {
          title: 'Responsive Design',
          icon: icons[9],
          description: 'Websites that work on all devices.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'E-commerce',
          icon: icons[10],
          description: 'Online store solutions.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'CMS Development',
          icon: icons[11],
          description: 'Content management systems.',
          color: 'bg-black',
          font: 'text-white'
        },
        {
          title: 'Web Apps',
          icon: icons[12],
          description: 'Interactive web applications.',
          color: 'bg-surface',
          font: 'text-black'
        }
      ]
    },
    {
      id: '04',
      number: '04',
      title: 'App Development',
      description: 'Mobile solutions for iOS and Android platforms.',
      cards: [
        {
          title: 'iOS Apps',
          icon: icons[13],
          description: 'Native iPhone/iPad applications.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Android Apps',
          icon: icons[14],
          description: 'Native Android applications.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'Cross-Platform',
          icon: icons[15],
          description: 'Single codebase for multiple platforms.',
          color: 'bg-black',
          font: 'text-white'
        }
      ]
    },
    {
      id: '05',
      number: '05',
      title: 'Marketing',
      description: 'Mobile solutions for iOS and Android platforms.',
      cards: [
        {
          title: 'iOS Apps',
          icon: icons[13],
          description: 'Native iPhone/iPad applications.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Android Apps',
          icon: icons[14],
          description: 'Native Android applications.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'Cross-Platform',
          icon: icons[15],
          description: 'Single codebase for multiple platforms.',
          color: 'bg-black',
          font: 'text-white'
        }
      ]
    },
    {
      id: '06',
      number: '06',
      title: 'Branding',
      description: 'Mobile solutions for iOS and Android platforms.',
      cards: [
        {
          title: 'iOS Apps',
          icon: icons[13],
          description: 'Native iPhone/iPad applications.',
          color: 'bg-surface',
          font: 'text-black'
        },
        {
          title: 'Android Apps',
          icon: icons[14],
          description: 'Native Android applications.',
          color: 'bg-proaince',
          font: 'text-white'
        },
        {
          title: 'Cross-Platform',
          icon: icons[15],
          description: 'Single codebase for multiple platforms.',
          color: 'bg-black',
          font: 'text-white'
        }
      ]
    }
  ];

  // Auto-rotate cards for the active accordion
  useEffect(() => {
    const activeItem = accordionData.find(item => item.id === activeAccordion);
    if (!activeItem?.cards || activeItem.cards.length <= 4) return;

    const interval = setInterval(() => {
      goToNextCard();
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [activeAccordion, currentCardIndex]);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion => activeAccordion === id ? null : id);
    setCurrentCardIndex(0); // Reset card index when changing accordion
  };

  const goToNextCard = () => {
    const activeItem = accordionData.find(item => item.id === activeAccordion);
    if (!activeItem?.cards) return;
    
    const maxIndex = activeItem.cards.length - 1;
    setCurrentCardIndex(prevIndex => (prevIndex + 1) % (maxIndex + 1));
    scrollToCard(currentCardIndex + 1);
  };

  const goToPrevCard = () => {
    const activeItem = accordionData.find(item => item.id === activeAccordion);
    if (!activeItem?.cards) return;
    
    const maxIndex = activeItem.cards.length - 1;
    setCurrentCardIndex(prevIndex => (prevIndex - 1 + maxIndex + 1) % (maxIndex + 1));
    scrollToCard(currentCardIndex - 1);
  };

  const scrollToCard = (index: number) => {
    if (!cardsContainerRef.current) return;
    
    const container = cardsContainerRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    
    const cardWidth = card.offsetWidth;
    const scrollPosition = cardWidth * index;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
      {accordionData.map((item) => (
        <div key={item.id} className="border-t-2 overflow-hidden">
          <button
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(item.id)}
          >
            <div className="flex items-center">
              <span className="text-gray-500 mr-4">{item.number}</span>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            
            <div className="flex items-center">
              {activeAccordion === item.id && (
                <p className="text-gray-500 text-sm md:text-base mr-4 hidden md:block">
                  {item.description}
                </p>
              )}
              <span className="text-gray-500">
                {activeAccordion === item.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </div>
          </button>
          
          {activeAccordion === item.id && (
            <div className="p-6 bg-white">
              {/* Mobile description (only shown when accordion is open) */}
              <p className="text-gray-500 text-sm mb-4 md:hidden">
                {item.description}
              </p>
              
              {item.cards && item.cards.length > 0 && (
                <div className="relative">
                  {/* Navigation Arrows - Only show if more than 1 card */}
                  {item.cards.length > 1 && (
                    <>
                      <button 
                        onClick={goToPrevCard}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={goToNextCard}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Cards Container */}
                  <div 
                    ref={cardsContainerRef}
                    className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory space-x-4"
                  >
                    {item.cards.map((card, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4 py-6 border rounded-md flex flex-col items-center min-h-[450px] ${card.font} ${card.color} snap-center`}
                      >
                        {/* Card Header */}
                        <div className="p-4 pb-0">  
                          <h3 className="text-md">
                            {card.title}
                          </h3>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 flex-grow">
                          <ul className="space-y-2">
                            {card.icon}
                          </ul>
                        </div>

                        {/* Card Footer */}
                        <div className="p-4">
                          <p className="text-sm font-medium">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;