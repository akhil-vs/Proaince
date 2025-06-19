import React, { useCallback, useMemo } from 'react';
import { Engine, Container, IOptions, tsParticles } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { Particles, IParticlesProps } from "@tsparticles/react";
import { RecursivePartial } from "@tsparticles/engine";

interface ParticlesBgProps {
  type?: 'links' | string; // Add other potential types if needed
}

const ParticlesBg: React.FC<ParticlesBgProps> = ({ type }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialization is now handled by the top-level tsParticles object
    if (type === 'links') {
      await loadLinksPreset(engine);
    }
    // You can add more presets or custom configurations here based on the 'type' prop
  }, [type]);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // console.log(container);
  }, []);

  const options = useMemo<RecursivePartial<IOptions>>(() => {
    if (type === 'links') {
      return {
        preset: "links",
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: "bounce",
            speed: 2,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      };
    }

    // Default configuration
    return {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: "bounce",
          attract: {
            enable: false,
            distance: 200,
            repulse: {
              nb: 0,
            },
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    };
  }, [type]);

  interface ParticlesProps extends IParticlesProps {
    id: string;
    init: (engine: Engine) => Promise<void>;
    loaded: (container?: Container) => Promise<void>;
    options: RecursivePartial<IOptions>;
  }

  const particlesProps: ParticlesProps = useMemo(() => ({
    id: "tsparticles",
    init: async (engine: Engine) => {
      // Initialize the engine using tsParticles
      await tsParticles.init();
      await particlesInit(engine); // Call our preset loading logic
    },
    loaded: particlesLoaded,
    options: options,
  }), [particlesInit, particlesLoaded, options]);

  return (
    <Particles {...particlesProps} />
  );
};

export default ParticlesBg;