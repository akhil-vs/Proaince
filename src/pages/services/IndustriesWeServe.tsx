import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import manufacturingImg from "../../images/manufacturing-banner.png";
import logisticsImg from "../../images/logistics-banner.jpg";
import technologyImg from "../../images/technology-banner.jpg";
import retailImg from "../../images/retail-banner.png";
import financeImg from "../../images/finance-banner.png";
import healthcareImg from "../../images/healthcare-banner.png";
import educationImg from "../../images/education-banner.png";

const industries = [
  "Manufacturing",
  "Logistics & Supply Chain",
  "Technology & Startups",
  "Retail & eCommerce",
  "Finance & Banking",
  "Healthcare",
  "Education",
];

const industryDetails: Record<string, string> = {
  "Manufacturing":
    "Supporting Manufacturing Excellence with Custom Software, Strategic Marketing & Strong Branding.",
  "Logistics & Supply Chain":
    "Optimizing Logistics Operations with Smart Tech and Agile Strategies.",
  "Technology & Startups":
    "Accelerating Innovation for Startups through Scalable Software Solutions.",
  "Retail & eCommerce":
    "Boosting Retail Growth with Tailored eCommerce Platforms.",
  "Finance & Banking":
    "Driving Digital Transformation in Finance through Secure Fintech Systems.",
  "Healthcare":
    "Enhancing Patient Care with Smart HealthTech Innovations.",
  "Education":
    "Empowering Learning with Custom EdTech Solutions.",
};

const backgroundImages: Record<string, string> = {
  "Manufacturing": manufacturingImg,
  "Logistics & Supply Chain": logisticsImg,
  "Technology & Startups": technologyImg,
  "Retail & eCommerce": retailImg,
  "Finance & Banking": financeImg,
  "Healthcare": healthcareImg,
  "Education": educationImg,
};

const IndustriesWeServe: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const leftPanelRef = useRef<HTMLDivElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (leftPanelRef.current) {
      setLeftHeight(leftPanelRef.current.offsetHeight);
    }
  }, [selectedIdx]);

  // Helper to get indices
  const getIndices = () => {
    const curr = selectedIdx;
    const next = (selectedIdx + 1) % industries.length;
    return [curr, next];
  };
  const [currIdx, nextIdx] = getIndices();

  // Slide variants (no fade)
  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 300 : -300,
      opacity: 1,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -300 : 300,
      opacity: 1,
      position: "absolute" as const,
    }),
  };

  return (
    <div className="w-full px-2 mx-auto">
      <div
        className="flex rounded-xl text-white p-8 transition-all duration-500 ease-in-out bg-cover bg-center min-h-1/4"
        style={{ backgroundImage: `url(${backgroundImages[industries[currIdx]]})` }}
      >
        {/* Left Menu */}
        <div className="w-1/4" ref={leftPanelRef}>
          <h2 className="text-3xl font-semibold mb-6">Industries We Serve</h2>
          <ul className="space-y-3">
            {industries.map((industry, idx) => (
              <li
                key={industry}
                className={`cursor-pointer transition ${
                  currIdx === idx ? "text-white font-bold" : "text-gray-300"
                }`}
                onClick={() => {
                  if (idx === selectedIdx) return;
                  setDirection(
                    idx > selectedIdx ||
                      (selectedIdx === 0 && idx === industries.length - 1)
                      ? "right"
                      : "left"
                  );
                  setSelectedIdx(idx);
                }}
              >
                {currIdx === idx ? "• " : ""} {industry}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Cards with Slide Animation */}
        <div className="w-full md:w-3/4 pl-0 md:pl-6 overflow-hidden flex items-stretch relative">
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-6 w-full"
            style={{
              height: leftHeight || "auto",
              minHeight: 300,
            }}
          >
            {/* Current card */}
            <div className="rounded-2xl shadow-xl p-4 md:p-8 w-full md:w-1/2 flex-shrink-0 flex flex-col justify-between bg-white text-black min-w-0 mb-4 md:mb-0">
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{industries[currIdx]}</h3>
                <p className="text-xs md:text-sm mb-4 md:mb-6">{industryDetails[industries[currIdx]]}</p>
              </div>
              <div className="flex gap-2 md:gap-3">
                <button className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-2xl hover:bg-blue-700 text-xs md:text-sm">
                  Contact us
                </button>
                <button className="bg-gray-100 text-black px-3 md:px-4 py-2 rounded-2xl hover:bg-gray-200 text-xs md:text-sm">
                  Learn more
                </button>
              </div>
            </div>
            {/* Next card */}
            <div className="rounded-2xl shadow-xl p-4 md:p-8 w-full md:w-1/2 flex-shrink-0 flex flex-col justify-between bg-white/25 text-white/80 backdrop-blur min-w-0">
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{industries[nextIdx]}</h3>
                <p className="text-xs md:text-sm mb-4 md:mb-6">{industryDetails[industries[nextIdx]]}</p>
              </div>
              <div className="flex gap-2 md:gap-3">
                <button className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-2xl hover:bg-blue-700 text-xs md:text-sm">
                  Contact us
                </button>
                <button className="bg-gray-100 text-black px-3 md:px-4 py-2 rounded-2xl hover:bg-gray-200 text-xs md:text-sm">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
