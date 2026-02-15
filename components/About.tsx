import React from "react";
import { ABOUT_TEXT, DEV_PROFILE_IMAGE } from "../constants";
import { Reveal } from "./Reveal";
import TiltCard from "./TiltCard";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-text">
              About Me
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Bio Card */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <Reveal width="100%" className="h-full">
              <TiltCard className="h-full rounded-2xl">
                <div className="bg-card border border-border-subtle rounded-2xl p-8 bento-card h-full relative overflow-hidden group hover:border-border-subtle/80 flex flex-col">
                  {/* Background Icon Decor */}
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                    <svg
                      className="w-48 h-48 text-primary-text"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-primary-text mb-6 flex items-center gap-2 relative z-10 shrink-0">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Profile
                  </h3>

                  <div className="flex flex-col-reverse md:flex-row gap-8 relative z-10 flex-1">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-between min-h-[140px]">
                      <p className="text-secondary-text leading-relaxed text-base font-light mb-6">
                        {ABOUT_TEXT}
                      </p>
                      <div>
                        <div className="hidden md:block">
                          <Reveal delay={0.8}>
                            <a
                              href="/assests/resume.pdf"
                              download="Shakti_Saxena_Resume.pdf"
                              className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/30 border border-border-subtle/50 backdrop-blur-md hover:bg-card/50 hover:border-primary/50 transition-all duration-300 group shadow-lg shadow-black/5"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm font-medium text-secondary-text group-hover:text-primary-text transition-colors pr-2">
                                Download CV
                              </span>
                            </a>
                          </Reveal>
                        </div>
                      </div>
                    </div>

                    {/* Profile Image */}
                    <div className="shrink-0 self-start md:self-start">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative group/image">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover/image:opacity-0 transition-opacity duration-500"></div>
                        <img
                          src={DEV_PROFILE_IMAGE}
                          alt="Profile"
                          className="w-full h-full object-cover grayscale group-hover/image:grayscale-0 transition-all duration-500 scale-110 group-hover/image:scale-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Experience Stat */}
          <div className="md:col-span-1">
            <Reveal width="100%" delay={0.1} className="h-full">
              <TiltCard className="h-full rounded-2xl">
                <div className="bg-card border border-border-subtle rounded-2xl p-6 flex flex-col justify-between bento-card h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-10 h-10 rounded-lg bg-dark border border-border-subtle flex items-center justify-center text-secondary-text mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold font-display text-primary-text">
                      1+
                    </h4>
                    <p className="text-secondary-text text-sm mt-1">
                      Year Experience
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Projects Stat */}
          <div className="md:col-span-1">
            <Reveal width="100%" delay={0.2} className="h-full">
              <TiltCard className="h-full rounded-2xl">
                <div className="bg-card border border-border-subtle rounded-2xl p-6 flex flex-col justify-between bento-card h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-10 h-10 rounded-lg bg-dark border border-border-subtle flex items-center justify-center text-secondary-text mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary-text font-display">
                      4+
                    </h4>
                    <p className="text-secondary-text text-sm mt-1">
                      Projects Delivered
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Tech Stack Map (Abstract) */}
          <div className="md:col-span-2">
            <Reveal width="100%" delay={0.3} className="h-full">
              <TiltCard className="h-full rounded-2xl">
                <div className="bg-card border border-border-subtle rounded-2xl p-8 bento-card flex flex-col justify-center overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <h3 className="text-lg font-bold text-primary-text mb-6 relative z-10 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {[
                      "React",
                      "NestJS",
                      "Vue 3",
                      "Next.js",
                      "Tailwind CSS",
                      "Express",
                      "Mysql",
                      "Java",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded bg-dark border border-border-subtle text-secondary-text text-xs hover:border-primary hover:text-primary-text transition-colors cursor-default hover:bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
