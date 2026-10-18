// app/RotatingHeroText.tsx
'use client';

import { useState, useEffect } from 'react';
import FoldText from './FoldText';

const ROLES = [
  "Fauzan Azhima",
  "Web Developer",
  "Software Engineer",
  "Next.js Specialist",
  "Graphic Designer"
];

export default function RotatingHeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev - 1 + ROLES.length) % ROLES.length);
    }, 2500); // Berganti setiap 4.5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[1.2em] flex items-center">
      <FoldText
        key={ROLES[index]}
        text={ROLES[index]}
        foldStyle="paper"
        splitBy="char"
        hinge="top"
        trigger="mount"
        foldAngle={90}
        duration={0.6}
        stagger={0.03}
        ease="power3.out"
        fontSize="clamp(2.5rem, 5vw, 4.5rem)"
        fontWeight={700}
        color="#18181b"
      />
    </div>
  );
}