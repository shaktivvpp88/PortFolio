import React, { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";
import ThemeToggle from "./ThemeToggle";
import { DEV_PROFILE_IMAGE } from "../constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScrollSpy = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const viewLine = scrollY + windowHeight * 0.35;

        const documentHeight = document.documentElement.scrollHeight;
        if (scrollY + windowHeight >= documentHeight - 50) {
          const lastLink = navLinks[navLinks.length - 1];
          setActiveSection(lastLink.href.substring(1));
          return;
        }

        let currentSectionId = "";

        for (const link of navLinks) {
          const sectionId = link.href.substring(1);
          const element = document.getElementById(sectionId);

          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (viewLine >= offsetTop && viewLine < offsetTop + offsetHeight) {
              currentSectionId = sectionId;
            }
          }
        }

        if (currentSectionId !== activeSection) {
          setActiveSection(currentSectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 100; // Adjust based on your header height/padding preferences
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 animate-slide-down pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-2xl px-2 py-2 flex items-center justify-between gap-4 ${
          isScrolled
            ? "bg-dark/70 backdrop-blur-md border border-border-subtle/50 shadow-xl shadow-black/5 w-full max-w-4xl"
            : "bg-transparent border border-transparent w-full max-w-5xl"
        }`}
      >
        <div className="pl-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-bold tracking-tight text-primary-text font-display hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/30 shadow-sm">
              <img
                src={DEV_PROFILE_IMAGE}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <ScrambleText text="Shakti" className="font-display" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-card/50 backdrop-blur-sm border border-border-subtle/50 rounded-full px-1.5 py-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-5 py-2 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-secondary-text hover:text-primary-text hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 pr-1">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:block px-5 py-2.5 text-xs font-semibold bg-primary text-white rounded-xl hover:bg-indigo-600 transition-all hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] duration-300 cursor-pointer"
          >
            Get in touch
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-secondary-text p-2 hover:text-primary-text transition-colors bg-card/50 rounded-lg border border-border-subtle/50 pointer-events-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-dark/90 backdrop-blur-xl border border-border-subtle rounded-3xl p-3 shadow-2xl z-50 md:hidden animate-fade-in origin-top ring-1 ring-white/5 pointer-events-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-6 py-4 rounded-2xl transition-all font-medium text-sm border cursor-pointer ${
                    isActive
                      ? "bg-primary/10 text-primary border-primary/20"
                      : "text-secondary-text hover:text-primary-text hover:bg-white/5 border-transparent hover:border-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="h-px bg-border-subtle/50 my-2 mx-2"></div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block text-center py-4 bg-primary text-white rounded-2xl font-semibold text-sm hover:bg-indigo-600 transition-colors mx-1 mb-1 shadow-lg shadow-primary/20 cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
