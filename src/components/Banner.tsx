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
    <div className="w-full h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: false,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "bubble",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 250,
                size: 10,
                duration: 2,
                opacity: 0.8,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 1,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#ff6ec7", "#a29bfe", "#74b9ff"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
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
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">
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
