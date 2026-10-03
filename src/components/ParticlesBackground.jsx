import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.8,
              color: "#00f0ff"
            }
          },
        },
      },
      particles: {
        color: {
          value: ["#00f0ff", "#b026ff", "#ffffff"],
        },
        links: {
          color: "#b026ff",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1.5,
          triangles: {
            enable: true,
            opacity: 0.05
          }
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
        },
        shape: {
          type: ["circle", "polygon"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-10"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
