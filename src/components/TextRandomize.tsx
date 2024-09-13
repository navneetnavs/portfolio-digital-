import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type TextRandomizeParams = {
  className?: string;
  text: string;
  randomize?: boolean;
  size?: number;
  color?: string;
  weight?: string;
  transform?: string;
  letterSpacing?: number;
  lineHeight?: number;
  wordSpacing?: number;
};

const TextRandomize: React.FC<TextRandomizeParams> = ({
  className = "",
  text,
  randomize = true,
  color,
  transform = "none",
  letterSpacing = 0,
  lineHeight = 1.2,
  wordSpacing = 0,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (randomize && textRef.current) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
      const duration = 2;
      const stepsPerChar = 5;

      const tl = gsap.timeline();

      // Initialize with random characters
      setDisplayText(
        text
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join(""),
      );

      text.split("").forEach((char, index) => {
        for (let step = 0; step < stepsPerChar; step++) {
          tl.to(
            {},
            {
              duration: duration / (text.length * stepsPerChar),
              onComplete: () => {
                setDisplayText((prevText) => {
                  const newText = prevText.split("");
                  if (step === stepsPerChar - 1) {
                    newText[index] = char;
                  } else {
                    newText[index] =
                      chars[Math.floor(Math.random() * chars.length)];
                  }
                  return newText.join("");
                });
              },
            },
          );
        }
      });
    }
  }, [text, randomize]);

  const style = {
    color,
    textTransform: transform as
      | "none"
      | "capitalize"
      | "uppercase"
      | "lowercase"
      | "initial"
      | "inherit",
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
    wordSpacing: `${wordSpacing}px`,
  };

  return (
    <div ref={textRef} className={className} style={style}>
      {displayText}
    </div>
  );
};

export default TextRandomize;
