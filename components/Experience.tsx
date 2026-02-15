import React, { useRef, useEffect, useState } from "react";
import { EXPERIENCES } from "../constants";
import { Reveal } from "./Reveal";

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeDots, setActiveDots] = useState<number[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current || !lineRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const targetY = windowHeight * 0.85;

        const lineStartY = containerRect.top + 16;

        let height = targetY - lineStartY;

        const maxPossibleHeight = containerRect.height - 32;

        if (height < 0) height = 0;
        if (height > maxPossibleHeight) height = maxPossibleHeight;

        lineRef.current.style.height = `${height}px`;

        const newActiveDots: number[] = [];
        const dotElements =
          containerRef.current.querySelectorAll(".timeline-dot");

        dotElements.forEach((dot, index) => {
          const htmlDot = dot as HTMLElement;
          const dotRect = htmlDot.getBoundingClientRect();
          const dotCenterY = dotRect.top + dotRect.height / 2;
          const lineTipY = lineStartY + height;

          if (lineTipY >= dotCenterY) {
            newActiveDots.push(index);
          }
        });

        setActiveDots((prev) => {
          if (prev.length !== newActiveDots.length) return newActiveDots;
          return prev.every((val, i) => val === newActiveDots[i])
            ? prev
            : newActiveDots;
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-text mb-20 text-center md:text-left">
            Experience
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative pb-4">
          <div className="absolute left-[20px] md:left-[160px] -translate-x-1/2 top-[16px] bottom-4 w-[2px] bg-neutral-200 dark:bg-white/5 z-0" />
          <div
            ref={lineRef}
            className="absolute left-[20px] md:left-[160px] -translate-x-1/2 top-[16px] w-[2px] z-10 origin-top will-change-[height]"
            style={{
              height: "0px",
              background: "linear-gradient(180deg, #22d3ee 0%, #a855f7 100%)", // Cyan to Purple
              boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)",
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isActive = activeDots.includes(index);

              return (
                <Reveal key={exp.id} delay={index * 0.1} width="100%">
                  <div className="group relative grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 items-start">
                    {/* Period Column */}
                    <div className="hidden md:block text-right pt-2 pr-6">
                      <span
                        className={`text-xs font-mono font-semibold transition-colors duration-300 inline-block py-1 tracking-wider ${
                          isActive ? "text-primary" : "text-secondary-text"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div
                      className={`timeline-dot absolute left-[20px] md:left-[160px] -translate-x-1/2 top-2 w-4 h-4 rounded-full border-2 z-20 
                                        transition-all duration-500 flex items-center justify-center
                                        ${
                                          isActive
                                            ? "border-cyan-400 bg-dark scale-125 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                            : "border-border-subtle bg-dark"
                                        }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-cyan-400 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      ></div>
                    </div>

                    {/* Content Column */}
                    <div className="pl-12 md:pl-0 relative">
                      {/* Mobile Period Label */}
                      <span className="md:hidden text-[11px] font-mono font-bold text-primary mb-1 block uppercase tracking-widest opacity-90">
                        {exp.period}
                      </span>

                      <h3
                        className={`text-xl font-bold transition-colors duration-300 mb-1.5 flex items-center gap-2 ${
                          isActive ? "text-primary-text" : "text-secondary-text"
                        }`}
                      >
                        {exp.role}
                        {isActive && (
                          <svg
                            className="hidden md:block w-4 h-4 text-primary animate-fade-in"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                      </h3>
                      <div className="text-sm text-secondary-text font-medium mb-5 font-mono border-b border-border-subtle/30 pb-3 inline-block">
                        {exp.company}
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((point, i) => (
                          <li
                            key={i}
                            className="text-secondary-text leading-relaxed text-sm font-light flex items-start gap-3 group/li"
                          >
                            <span className="text-border-subtle group-hover/li:text-primary mt-[5px] text-[10px] transition-colors">
                              ▹
                            </span>
                            <span className="group-hover/li:text-primary-text transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
