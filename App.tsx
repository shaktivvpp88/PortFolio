import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SpotlightCursor from "./components/SpotlightCursor";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-dark text-secondary-text transition-colors duration-300">
        <div className="bg-noise"></div>

        <SpotlightCursor />

        <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.15] dark:opacity-[0.1] pointer-events-none z-0"></div>

        <div className="fixed top-[-20%] left-[20%] w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen animate-float"></div>
        <div
          className="fixed bottom-[-20%] right-[10%] w-[40vw] h-[40vh] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10">
          <Navbar />
          <main className="space-y-0">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>

        <ScrollToTop />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;
