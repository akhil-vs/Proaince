import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Logo from "./Logo";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="bg-white/75 backdrop-blur shadow-md sticky md:top-16 w-full z-10 p-2 md:px-32">
      <div className="mx-auto flex justify-between items-center">
        <div className=" font-bold ">SERVICES</div>
        
        <nav className="hidden md:flex space-x-6">
          {/* <a href="#" className="hover:text-gray-300 p-3">Services</a> */}
          <a href="#" className="hover:text-gray-300 p-3">Industries</a>
          <a href="#" className="hover:text-gray-300 p-3">Partners</a>
          <a href="#" className="hover:text-gray-300 p-3">Projects</a>
          <a href="#" className="hover:text-gray-300 p-3">Careers</a>
          {/* <a href="#" className="hover:text-gray-300 py-3 px-5 bg-black text-white rounded-full cta-button">Contact us</a> */}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-2 text-center">
          <a href="#" className="block text-black hover:text-gray-300">Services</a>
          <a href="#" className="block text-black hover:text-gray-300">Industries</a>
          <a href="#" className="block text-black hover:text-gray-300">Partners</a>
          <a href="#" className="block text-black hover:text-gray-300">Projects</a>
          <a href="#" className="block text-black hover:text-gray-300">Compnay</a>
          <a href="#" className="block text-black hover:text-gray-300">Contact us</a>
        </div>
      )}
    </header>
  );
}

export default SubHeader;