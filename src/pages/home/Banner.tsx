import { useCallback, useState, useMemo, useEffect, useRef } from "react";
import { Element, scroller, Link as ScrollLink  } from 'react-scroll';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import bannerImage from "../../images/banner4-bg.jpg";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: unknown): Promise<void> => {
    // You can add any logic here if needed
    return;
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: { enable: false },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true,
          },
        },
        links: {
          blink: false,
          color: "#324200",
          consent: true,
          distance: 100,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "bounce" },
          speed: { min: 0.5, max: 1 },
        },
        number: {
          value: 250,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
          random: false,
          value: { min: 0.05, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          animation: {
            enable: false,
            speed: 40,
            sync: false,
          },
          random: true,
          value: { min: 0.1, max: 1 },
        },
      },
      polygon: {
        draw: {
          enable: true,
          stroke: {
            color: "#020617",
            width: 0.5,
            opacity: 0,
          },
        },

        move: {
          radius: 100,
        },
        inline: {
          arrangement: "equidistant",
        },

        scale: 1,

        type: "inline",
        // url: images8,
      },

      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

const Banner = () => {

  const bgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY / 1000; // adjust sensitivity
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -64,
    });
  };

  return (
    <Element name="top">
      <section className="relative bg-white text-proaince pt-32 pb-20 overflow-hidden h-screen min-h-[500px]">
        {/* Particles Background */}
        <div ref={bgRef} className="absolute inset-0 z-0 h-screen w-full hidden md:block bg-cover bg-center flex items-center justify-center transition-transform duration-300 ease-out  filter blur-sm scale-105" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* <ParticleComponent /> */}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-5">
          <div className="md:flex md:items-center md:justify-center">
            <div className="mb-10 md:mb-0 text-center bg-black/60 py-4 px-1 rounded-lg shadow-lg backdrop-blur-md">
              <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight mb-6">
                Empowering the World Through AI Innovation
              </h1>
              <p className="text-xl mb-8 text-white">
                We help businesses leverage artificial intelligence to drive innovation, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-proaince shadow-md text-white hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold text-lg">
                  <ScrollLink
                    key='Products'
                    to='products'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    className="text-white font-semibold"
                    onClick={() => scrollToSection('products')}
                  >
                    {'Explore Our Products'}
                  </ScrollLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Banner;
