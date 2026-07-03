import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/portfolio';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  // Split skills in half to create two distinct moving rows
  const half = Math.ceil(personalInfo.tech.length / 2);
  const row1 = personalInfo.tech.slice(0, half);
  const row2 = personalInfo.tech.slice(half);

  // Duplicate the arrays multiple times to ensure the screen is always filled
  // This is the secret to a perfectly seamless infinite GSAP marquee
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Fade in the title when scrolled into view
      gsap.fromTo(".skills-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Row 1: Moves Left Continuously
      gsap.to(".marquee-track-1", {
        xPercent: -50, // Moves exactly half its width (which is two full arrays)
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // 3. Row 2: Moves Right Continuously
      gsap.fromTo(".marquee-track-2", 
        { xPercent: -50 }, 
        {
          xPercent: 0,
          ease: "none",
          duration: 25,
          repeat: -1,
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#050505] overflow-hidden relative ">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="skills-header px-6 lg:px-12 mb-16 text-center lg:text-left relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light">
          A comprehensive suite of modern frameworks and tools I use to architect scalable backends and pixel-perfect frontends.
        </p>
      </div>

      {/* Marquee Row 1 (Moving Left) */}
      <div className="relative w-full flex overflow-hidden mb-6 md:mb-8 hover:pause mask-edges">
        <div className="marquee-track-1 flex gap-4 md:gap-6 min-w-max px-2">
          {duplicatedRow1.map((tech, index) => (
            <div 
              key={`row1-${tech}-${index}`} 
              className="px-6 py-4 md:px-8 md:py-5 bg-[#0a0a0a] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span className="text-gray-400 text-lg md:text-xl font-medium tracking-wide hover:text-white transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Moving Right) */}
      <div className="relative w-full flex overflow-hidden hover:pause mask-edges">
        <div className="marquee-track-2 flex gap-4 md:gap-6 min-w-max px-2">
          {duplicatedRow2.map((tech, index) => (
            <div 
              key={`row2-${tech}-${index}`} 
              className="px-6 py-4 md:px-8 md:py-5 bg-[#0a0a0a] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span className="text-gray-400 text-lg md:text-xl font-medium tracking-wide hover:text-white transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}