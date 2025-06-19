import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, Link as ScrollLink  } from 'react-scroll';

interface HeaderProps {
  scrolled: boolean;
}

const sections = ['aboutus', 'industries', 'products', 'contact'];
const isHome = location.pathname === '/';

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isServices = location.pathname === '/services';

  const scrollOrNavigate = (target: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => scrollToSection(target), 100);
    } else {
      scrollToSection(target);
    }
  };

  const scrollToSection = (target: string) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -64,
    });
  };

  const scrollToTop = () => {
    if (!isHome) {
      navigate('/');
    } else {
      scrollToSection('top');
    }
  };

  const links = [
    { name: 'Home', target: 'top' },
    { name: 'About Us', target: 'aboutus' },
    { name: 'Services', target: 'services', isRoute: true },
    { name: 'Industries', target: 'industries' },
    { name: 'Products', target: 'products' },
    { name: 'Contact Us', target: 'contactus' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 p-2 px-4 sm:px-8 md:px-16 lg:px-24 transition-colors duration-300 ${ scrolled ? "bg-white/90 shadow-md" : "bg-white/30" }`} >

      <div className="mx-auto flex justify-between items-center">
          <div className="text-2xl flex-shrink-0 flex items-center text-proaince font-bold">
            PROAINCE
          </div>
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
          {links.map((link) => {
          const baseClass =
            'cursor-pointer text-gray-900 inline-flex items-center px-1 py-5 text-sm font-medium transition-all duration-300';

          const activeClass = 'border-b-4 border-indigo-500';

          // SERVICES ROUTER LINK
          if (link.isRoute) {
            return (
              <NavLink
                key={link.name}
                to="/services"
                className={`${baseClass} ${
                  isServices ? activeClass : 'hover:border-indigo-400'
                }`}
              >
                {link.name}
              </NavLink>
            );
          }

          // HOME LINK
          if (link.name === 'Home') {
            return isHome ? (
              <ScrollLink
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                activeClass={activeClass}
                className={`${baseClass} ${
                  isServices ? '' : 'hover:border-indigo-400'
                }`}
              >
                {link.name}
              </ScrollLink>
            ) : (
              <span
                key={link.name}
                onClick={() => navigate('/')}
                className={`${baseClass} hover:border-indigo-400`}
              >
                {link.name}
              </span>
            );
          }

          // SCROLLABLE SECTIONS
          return isHome ? (
            <ScrollLink
              key={link.name}
              to={link.target}
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass={activeClass}
              className={`${baseClass}  hover:border-indigo-300`}
              onClick={() => scrollToSection(link.target)}
            >
              {link.name}
            </ScrollLink>
          ) : (
            <span
              key={link.name}
              onClick={() => scrollOrNavigate(link.target)}
              className={`${baseClass} ${
                isServices ? '' : ' hover:border-indigo-300'
              }`}
            >
              {link.name}
            </span>
          );
          })}
          </nav>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1 border-t border-gray-200">
          {links.map((link) =>
            isHome ? (
              <ScrollLink
                key={link.name}
                to={link.target}
                smooth={true}
                duration={500}
                offset={-64}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                activeClass="bg-indigo-50 border-indigo-500 text-indigo-700"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <span
                key={link.name}
                onClick={() => scrollOrNavigate(link.target)}
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                {link.name}
              </span>
            )
          )}

          <NavLink
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isServices
                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Services
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;