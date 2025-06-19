import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import background from "../../images/strategicpartner-bg.png";
import RadarsLogo from "../../images/Radars_Logo.png";
import TVEngineeringLogo from "../../images/T&V Engineering_Logo.png";
import EmploymentHero from "../../images/employmenthero_logo.png";

interface Partner {
  name: string;
  logo: string;
  description: string;
  focusAreas: string[];
  details: string[];
}

const partners: Partner[] = [
  {
    name: "Radars Private Limited",
    logo: RadarsLogo,
    description:
      "Areas of Collaboration: With complementary capabilities, PROAINCE and Radars Technologies will focus on",
    focusAreas: [
      "Custom Software Development",
      "Web Development",
      "Marketing & Branding Solutions",
      "Innovations and integration of AI",
      "Research and development",
    ],
    details: [
      "Enhanced expertise with a global-local approach",
      "Innovative and scalable solutions tailored to industry demands",
      "Faster delivery timelines with a broader resource base",
    ],
  },
  {
    name: "T&V Engineering Solutions Ltd",
    logo: TVEngineeringLogo,
    description:
      "This collaboration combines PROAINCE’s innovative approach to technology services with T&V Engineering Solutions’ exceptional expertise in fabrication, welding, and machining.",
    focusAreas: [
      "Custom Software Development",
      "Web Development",
      "Marketing & Branding Solutions",
      "Innovations and integration of AI",
      "Research and development",
    ],
    details: [
      "This collaboration will focus on advancing manufacturing capabilities, integrating smart automation, and delivering end-to-end solutions with precision and speed.",
    ],
  },
  {
    name: "Employment Hero",
    logo: EmploymentHero,
    description:
      "This collaboration combines PROAINCE’s innovative approach to technology services with Employment Hero’s global people-management platform.",
    focusAreas: [
      "Custom Software Development",
      "Web Development",
      "Marketing & Branding Solutions",
      "Innovations and integration of AI",
      "Research and development",
    ],
    details: [
      "This collaboration will focus on creating efficient workforce management and employee engagement solutions through cutting-edge digital tools.",
    ],
  },
];

const StrategicPartners = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="px-4 py-10 md:px-16 lg:px-32 bg-white text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-semibold">Strategic Partners</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          Collaborating with industry leaders to deliver cutting-edge solutions,
          innovation, and growth-driven results
        </p>
      </div>

      {/* Partner Cards */}
      <div className="space-y-4">
        {partners.map((partner, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:grid sm:grid-cols-6 gap-4 items-center p-4 sm:p-6 bg-white">
                {/* Logo */}
                <div className="col-span-1 flex justify-center sm:justify-start">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-20 sm:w-24 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="col-span-4 text-center sm:text-left space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>

                {/* Toggle */}
                <div className="col-span-1 flex justify-center sm:justify-end">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="text-gray-600 hover:text-black"
                    aria-label="Toggle Partner Info"
                  >
                    {isActive ? <Minus /> : <Plus />}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {isActive && (
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${background})`,
                  }}
                >
                  <div className="rounded-xl flex flex-col sm:grid sm:grid-cols-6 gap-4 items-center p-4 sm:p-6 gap-6">
                    {/* Blank first column on large screens */}
                    <div className="hidden md:block col-span-1 flex" />

                    {/* Content goes in second column on md+, full width on mobile */}
                    <div className="space-y-6 col-span-4 ">
                      {partner.focusAreas.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="font-medium text-lg">Areas of Focus</h4>
                          <div className="flex flex-wrap gap-2">
                            {partner.focusAreas.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <h4 className="font-medium text-lg">What this means for our clients</h4>
                        <ul className="space-y-3 text-sm text-gray-800">
                          {partner.details.map((point, i) => (
                            <li
                              key={i}
                              className="flex max-w-xl items-start gap-2 bg-white p-2 rounded shadow-md"
                            >
                              <span className="text-blue-600 mt-1">✔</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StrategicPartners;
