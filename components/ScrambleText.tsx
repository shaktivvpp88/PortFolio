import React, { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  revealSpeed?: number;
  scrambleSpeed?: number;
  useHover?: boolean;
  autoStart?: boolean;
  stepByStep?: boolean;
}

const CHARS = "!@#$%^&*():{};|,.<>/?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = "",
  scrambleSpeed = 40,
  useHover = true,
  autoStart = false,
  stepByStep = false,
}) => {
  const [displayText, setDisplayText] = useState(
    autoStart && stepByStep ? "" : text
  );
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            if (stepByStep) {
              if (index < iteration + 2) {
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              }
              return ""; // Hide characters far ahead
            }

            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += stepByStep ? 1 / 2 : 1 / 3;
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (autoStart) {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, autoStart]);

  const handleMouseEnter = () => {
    if (useHover && !stepByStep) {
      setIsHovered(true);
      scramble();
    }
  };

  return (
    <span
      className={`inline-block cursor-default ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
