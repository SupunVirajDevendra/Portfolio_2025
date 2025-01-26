import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Banner = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      <Particles
        className="absolute inset-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: true,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.05,
                },
              },
            },
          },
          particles: {
            links: {
              color: "#FF0000",
              distance: 150,
              enable: true,
              opacity: 0.02,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
              trail: {
                enable: true,
                length: 10,
                fillColor: "#000000",
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 150,
            },
            opacity: {
              value: { min: 0.2, max: 0.8 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          background: {
            color: "#FFFFFF",
          },
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h1 className="text-5xl font-extrabold mb-4">
          Supun Devendra
        </h1>
        <p className="text-lg font-medium">
          Explore my projects, skills, and experience
        </p>
      </div>
    </div>
  );
};

export default Banner;
