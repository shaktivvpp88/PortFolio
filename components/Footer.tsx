import React from "react";
import { DEV_NAME } from "../constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark relative border-t border-border-subtle/30 overflow-hidden pt-20 pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-4 md:max-w-xs">
            <a
              href="#"
              className="text-2xl font-bold font-display text-primary-text flex items-center gap-2"
            >
              <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              {DEV_NAME}
            </a>
            <p className="text-secondary-text font-light leading-relaxed text-sm">
              Building digital products, brands, and experiences with a focus on
              motion and aesthetic.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            {/* SITEMAP */}
            <div className="space-y-4">
              <h4 className="text-primary-text font-semibold text-xs tracking-[0.2em] uppercase opacity-70">
                Sitemap
              </h4>
              <ul className="space-y-2 text-sm text-secondary-text">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div className="space-y-4">
              <h4 className="text-primary-text font-semibold text-xs tracking-[0.2em] uppercase opacity-70">
                Socials
              </h4>
              <ul className="space-y-2 text-sm text-secondary-text">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-4">
              <h4 className="text-primary-text font-semibold text-xs tracking-[0.2em] uppercase opacity-70">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-secondary-text">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-subtle/30">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
            <p className="text-xs text-secondary-text text-center md:text-left">
              &copy; {currentYear} {DEV_NAME}. All rights reserved.
            </p>
          </div>
        </div>

        {/* Big Watermark Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] overflow-hidden select-none z-0">
          <span className="text-[12vw] md:text-[15vw] font-bold font-display leading-[0.8] whitespace-nowrap text-primary-text/50">
            {DEV_NAME.split(" ")[0].toUpperCase()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
