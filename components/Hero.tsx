import React, { useRef, useEffect } from "react";
import { DEV_NAME, DEV_ROLE } from "../constants";
import { Reveal } from "./Reveal";
import ScrambleText from "./ScrambleText";

// Spotlight Effect Component
const Spotlight = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute pointer-events-none z-0 overflow-hidden w-full h-[150vh] flex justify-center -top-[50%] left-0`}
    >
      <div
        className={`w-[60vw] h-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl opacity-0 animate-spotlight ${className}`}
        style={{ transformOrigin: "top center" }}
      ></div>
    </div>
  );
};

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current || !maskRef.current) return;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!textRef.current || !maskRef.current) return;
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const maskImage = `radial-gradient(circle 300px at ${x}px ${y}px, black, transparent)`;
        maskRef.current.style.webkitMaskImage = maskImage;
        maskRef.current.style.maskImage = maskImage;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 100; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-10 relative overflow-hidden bg-dark">
      <Spotlight />

      <div className="container mx-auto px-6 relative z-10 text-center flex-1 flex flex-col items-center justify-center">
        <Reveal delay={0.2} width="100%">
          <div className="relative mb-8">
            <div
              ref={textRef}
              className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 lg:-top-16 w-full max-w-[1200px] h-[200px] flex justify-center pointer-events-none select-none"
            >
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-display tracking-tighter leading-[0.9] text-outline opacity-30 whitespace-nowrap">
                <ScrambleText
                  text="Engineering"
                  autoStart={true}
                  stepByStep={true}
                  useHover={false}
                  scrambleSpeed={50}
                />
              </h1>

              <div
                ref={maskRef}
                className="absolute inset-0 flex justify-center transition-opacity duration-75 will-change-[mask-image]"
                style={{
                  // Initial State
                  maskImage: `radial-gradient(circle 300px at 50% 50%, black, transparent)`,
                  WebkitMaskImage: `radial-gradient(circle 300px at 50% 50%, black, transparent)`,
                }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-display tracking-tighter leading-[0.9] text-primary/40 dark:text-white/30 whitespace-nowrap drop-shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                  Engineering
                </h1>
              </div>
            </div>

            {/* Main Content Text */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display tracking-tighter leading-[1] relative z-10">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-primary-text to-secondary-text/50 pb-2">
                Digital Excellence
              </span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="max-w-2xl mx-auto text-xl text-secondary-text mb-12 leading-relaxed font-light mix-blend-plus-lighter">
            I'm &nbsp;
            <span className="text-primary-text font-medium border-b border-primary/30">
              <ScrambleText text={DEV_NAME} />
            </span>
            . A {DEV_ROLE} obsessed with crafting{" "}
            <span className="text-primary-text">fluid</span>,{" "}
            <span className="text-primary-text">scalable</span>, and{" "}
            <span className="text-primary-text">aesthetic</span> web solutions.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="group relative px-8 py-4 rounded-xl bg-primary text-white font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center gap-2">
                Explore Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="group px-8 py-4 rounded-xl bg-transparent border border-border-subtle text-primary-text font-medium transition-all hover:bg-white/5 hover:border-white/20 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:animate-slide-right transition-all duration-700"></div>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 z-10">
        <Reveal delay={0.8}>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="flex flex-col items-center gap-4 group cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-text group-hover:text-primary transition-colors">
              Scroll
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-border-subtle to-transparent group-hover:via-primary transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/80 blur-[1px] animate-drop-line"></div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
