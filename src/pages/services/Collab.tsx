import React, { useEffect, useRef } from 'react';
import Betly from '../../images/betlyTechnologies_Logo.png';
import Medwe from '../../images/medwe_Logo.png';
import FouadLegal from '../../images/FouadLegal_Logo.png';
import RecruitDynamics from '../../images/recruitDynamics_Logo.png';
import SolarLine from '../../images/solarLine_Logo.png';
import RosenBridge from '../../images/rosenBridge_Logo.png';
import Pauldea from '../../images/pauldea_Logo.png';
import Saptaah from '../../images/saptaah_Logo.jpg';
import Trivantra from '../../images/trivantra_Logo.png';
import AanJoseph from '../../images/annJoseph_Logo.png';
import MagicMasala from '../../images/magicMasala_Logo.png';
import BuldTrix from '../../images/buildtrix_Logo.png';
import USKids from '../../images/usKids_Logo.png';

interface ProjectCardProps {
  name: string;
  link?: string;
  logo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, link, logo }) => {
  const card = (
    <div className="group relative flex-shrink-0 w-64 h-40 bg-white rounded-lg shadow-sm p-6 flex items-center justify-center border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Project Name (shown by default, hidden on hover) */}
      <h3 className="text-xl font-semibold text-gray-800 text-center transition-opacity duration-300 group-hover:opacity-0 z-0">
        {name}
      </h3>

      {/* Logo (hidden by default, shown on hover) */}
      <img
        src={logo}
        alt={`${name} logo`}
        className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </a>
  ) : card;
};

const Collab: React.FC = () => {
  const projects = [
    { name: "Betly Technologies", logo: Betly, link: "https://betlytechnologies.com/" },
    { name: "Medwe", logo: Medwe, link: "https://medwellsupplies.com/" },
    { name: "Fouad Legal Consultancy", logo: FouadLegal, link: "https://fouadlegalconsultancy.com/" },
    { name: "Recruit Dynamics", logo: RecruitDynamics, link: "https://recruitdynamicshr.com/" },
    { name: "Solar Line", logo: SolarLine, link: "https://www.solarlinegroup.com/" },
    { name: "Rosen Bridge", logo: RosenBridge, link: "https://rosenbridge.in/" },
    { name: "Pauldea", logo: Pauldea, link: "https://pauldea.com/" },
    { name: "Saptaah", logo: Saptaah, link: "https://saptaah.com/" },
    { name: "Trivantra", logo: Trivantra, link: "https://trivantra.com/" },
    { name: "Ann Joseph", logo: AanJoseph, link: "https://ajs.org.uk/" },
    { name: "Magic Masala", logo: MagicMasala, link: "https://magic-masala.com/" },
    { name: "Buld Trix", logo: BuldTrix, link: "https://buldtrixinfra.com/" },
    { name: "US Kids", logo: USKids, link: "https://uskidspreschool.com/" }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalScrollWidth = scrollContainer.scrollWidth / 2;
    let requestId: number;

    const scrollStep = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 3;
      if (scrollContainer.scrollLeft >= totalScrollWidth) {
        scrollContainer.scrollLeft = 0;
      }
      requestId = requestAnimationFrame(scrollStep);
    };

    requestId = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col item-cente justify-center md:w-2/5">
            <p className=" text-2xl md:text-4xl font-medium text-gray-900r">
              Our Collaborative Projects
            </p>
          </div>
          <div className="md:w-3/5">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-l from-transparent to-white pointer-events-none"></div>
              <div
                ref={scrollRef}
                className="flex overflow-x-auto pb-4 space-x-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[...projects, ...projects].map((project, index) => (
                  <ProjectCard key={index} name={project.name} link={project.link} logo={project.logo} />

                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Collab;