import React, { useEffect, useRef } from "react";

const SpotlightCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use requestAnimationFrame to throttle updates to screen refresh rate
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.08), transparent 40%)`;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 will-change-[background]"
      style={{
        background: `radial-gradient(600px circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 40%)`,
      }}
    />
  );
};

export default SpotlightCursor;
