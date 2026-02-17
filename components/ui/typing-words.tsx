"use client";

import { useState, useEffect } from "react";

const WORDS = ["performance", "segurança", "escalabilidade"];
const TYPING_MS = 80;
const PAUSE_MS = 2200;
const DELETING_MS = 45;

export function TypingWords() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = WORDS[wordIndex];

  useEffect(() => {
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => setCharIndex((c) => c + 1), TYPING_MS);
        return () => clearTimeout(timeout);
      }
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    if (charIndex > 0) {
      const timeout = setTimeout(() => setCharIndex((c) => c - 1), DELETING_MS);
      return () => clearTimeout(timeout);
    }
    const next = setTimeout(() => {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 0);
    return () => clearTimeout(next);
  }, [charIndex, isDeleting, currentWord.length]);

  return (
    <span className="inline-block bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
      {currentWord.slice(0, charIndex)}
      <span
        className="ml-0.5 inline-block h-[0.9em] w-0.5 align-middle bg-primary animate-cursor-blink"
        aria-hidden
      />
    </span>
  );
}
