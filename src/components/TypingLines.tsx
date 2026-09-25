"use client";

import { useEffect, useState } from "react";

export type TerminalLine = {
  prompt?: string;
  text: string;
  className?: string;
};

export function TypingLines({
  lines,
  typingSpeed = 35,
  lineDelay = 350,
  startDelay = 200,
}: {
  lines: TerminalLine[];
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  // Terminó de tipear cuando ya se pasó la última línea (se deriva, no hace falta otro estado).
  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];
    const isLineComplete = charIndex >= current.text.length;

    if (isLineComplete) {
      const timeout = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }

    const delay = lineIndex === 0 && charIndex === 0 ? startDelay : typingSpeed;
    const timeout = setTimeout(() => {
      setCharIndex((c) => c + 1);
    }, delay);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, lines, typingSpeed, lineDelay, startDelay]);

  return (
    <div className="space-y-2">
      {lines.slice(0, Math.min(lineIndex + 1, lines.length)).map((line, i) => {
        const isCurrent = i === lineIndex && !done;
        const visibleText = isCurrent
          ? line.text.slice(0, charIndex)
          : line.text;

        return (
          <div key={i} className={`flex flex-wrap gap-2 ${line.className ?? ""}`}>
            {line.prompt && (
              <span className="text-accent-light shrink-0">{line.prompt}</span>
            )}
            <span className="whitespace-pre-wrap break-words">
              {visibleText}
              {(isCurrent || (done && i === lines.length - 1)) && (
                <span className="inline-block w-[0.55ch] h-[1em] align-middle bg-accent-light ml-0.5 animate-blink" />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
