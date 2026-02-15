import React from "react";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  // Duplicate skills to create a seamless loop
  const topRow = [...SKILLS, ...SKILLS, ...SKILLS];
  const bottomRow = [...SKILLS.reverse(), ...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      className="py-24 border-y border-border-subtle/30 relative overflow-hidden bg-dark"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-20"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-20"></div>

      <div className="container mx-auto px-6 mb-12 relative z-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-text uppercase tracking-widest font-display opacity-80">
          Technologies & Tools
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Top Row - Scroll Left - Added hover:pause */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll whitespace-nowrap flex gap-4 items-center hover:pause">
            {topRow.map((skill, index) => (
              <div
                key={`top-${index}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 min-w-max transition-all duration-300 hover:border-primary/50 hover:bg-white/10 group/chip"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    skill.category === "Frontend"
                      ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                      : skill.category === "Backend"
                      ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                      : skill.category === "Tools"
                      ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                      : "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                  }`}
                ></div>
                <span className="text-sm font-semibold text-secondary-text group-hover/chip:text-primary-text transition-colors tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scroll Right (Reverse) - Added hover:pause */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll-reverse whitespace-nowrap flex gap-4 items-center hover:pause">
            {bottomRow.map((skill, index) => (
              <div
                key={`bottom-${index}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 min-w-max transition-all duration-300 hover:border-secondary/50 hover:bg-white/10 group/chip"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    skill.category === "Frontend"
                      ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                      : skill.category === "Backend"
                      ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                      : skill.category === "Tools"
                      ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                      : "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                  }`}
                ></div>
                <span className="text-sm font-semibold text-secondary-text group-hover/chip:text-primary-text transition-colors tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
