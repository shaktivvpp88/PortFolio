import React, { useRef, useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getInitialStyle = () => {
    // Cinematic entrance: Start blurred, slightly smaller, and offset
    const transformMap = {
      up: "translateY(30px) scale(0.95)",
      down: "translateY(-30px) scale(0.95)",
      left: "translateX(30px) scale(0.95)",
      right: "translateX(-30px) scale(0.95)",
    };

    return {
      opacity: 0,
      transform: transformMap[direction],
      filter: "blur(8px)",
    };
  };

  const getFinalStyle = () => {
    return {
      opacity: 1,
      transform: "translate(0) scale(1)",
      filter: "blur(0)",
    };
  };

  return (
    <div
      ref={ref}
      style={{
        width,
        position: "relative",
      }}
      className={className}
    >
      <div
        style={{
          ...(isVisible ? getFinalStyle() : getInitialStyle()),
          transition: `opacity 1.2s cubic-bezier(0.2, 0.6, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.6, 0.2, 1), filter 1.2s cubic-bezier(0.2, 0.6, 0.2, 1)`,
          transitionDelay: `${delay}s`,
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </div>
    </div>
  );
};
