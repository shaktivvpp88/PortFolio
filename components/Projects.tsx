import React, { useRef, useState } from "react";
import { PROJECTS } from "../constants";
import { Reveal } from "./Reveal";

const ParallaxProjectCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({
  project,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max +/- 5 degrees for smoother feel)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="group relative h-[420px] w-full"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative transition-all duration-200 ease-out rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Layer 1: Background Image (Deep) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ transform: "translateZ(-40px) scale(1.15)" }}
        >
          {/* Forced dark gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent z-10"></div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out z-0
              ${
                isHovered
                  ? "scale-110 blur-[2px] opacity-40"
                  : "scale-100 blur-sm opacity-30 grayscale"
              }
            `}
          />
        </div>

        {/* Layer 2: Grid Texture (Middle) */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            transform: "translateZ(-20px)",
          }}
        />

        {/* Layer 3: Content (Front/Floating) */}
        <div
          className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Badge */}
          <div className="absolute top-6 left-6 flex gap-2">
            <div className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/70 uppercase tracking-widest shadow-sm">
              Project
            </div>
          </div>

          <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tech Stack - Auto-layout */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 border border-white/10 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions - Buttons */}
            <div
              className={`flex items-center gap-3 transition-all duration-300 transform ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
                >
                  Code
                </a>
              )}
              <a
                href={project.liveUrl}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 transition-all hover:scale-105 flex items-center gap-2"
              >
                View Live
                <svg
                  className="w-3.5 h-3.5"
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
              </a>
            </div>
          </div>
        </div>

        {/* Shine Effect Overlay */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-30"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-visible">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Fixed Alignment for Mobile & Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-10">
          <Reveal>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-primary-text leading-[1.1]">
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                  Works.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} width="100%" className="md:w-auto">
            <div className="flex flex-col md:items-end md:max-w-xs lg:max-w-sm">
              <p className="text-secondary-text text-left md:text-right font-light text-base md:text-lg leading-relaxed">
                A showcase of technical proficiency, product design, and
                engineering capabilities.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.1}
              width="100%"
              className="h-full"
            >
              <ParallaxProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
