'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxSection({ children, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const section = sectionRef.current;
        const rate = scrolled * -0.5;
        section.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={`transition-transform duration-100 ${className}`}>
      {children}
    </div>
  );
}