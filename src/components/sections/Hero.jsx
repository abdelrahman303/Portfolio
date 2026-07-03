import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../../data/portfolio';
import myImage from '../../assets/my_img_1.jpeg';

export default function Hero() {
  const containerRef = useRef(null);

  const nameParts = personalInfo.name.split(' ');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Reveal Glass Badge
      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });

      // 2. Staggered Text Reveal
      tl.from(".hero-title-text", {
        y: "120%",
        rotation: 3,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      }, "-=0.4");

      // 3. Description Fade & Slide
      tl.from(".hero-tagline", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // 4. Image Container Reveal
      tl.from(".hero-image-wrapper", {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.1,
        duration: 1.5,
        ease: "expo.inOut"
      }, "-=1.2");

      // 5. Experience Badge Pop-in
      tl.from(".experience-badge", {
        scale: 0,
        rotation: -15,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // 6. Continuous Floating Blobs
      gsap.to(".animate-blob-gsap", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        rotation: "random(-20, 20)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, containerRef); 

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".hero-image-inner", {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(".experience-badge", {
        x: -x * 1.5,
        y: -y * 1.5,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); 

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] px-6 lg:px-12 py-24"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob-gsap" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob-gsap" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-8 lg:mt-0">

        {/* 
            IMAGE COLUMN (Right side on desktop, Top on mobile)
            Using order-1 on mobile, lg:order-2 on desktop 
        */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="hero-image-wrapper relative w-[85%] sm:w-[70%] lg:w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="hero-image-inner w-[110%] h-[110%] absolute -top-[5%] -left-[5%]">
              <img
                src={myImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 flex justify-end items-end">
              <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-[10px] lg:text-xs text-cyan-400 font-mono">Status</p>
                <p className="text-xs lg:text-sm text-white font-medium">Available for work</p>
              </div>
            </div>
          </div>

          <div className="experience-badge absolute -bottom-6 -left-2 lg:-bottom-8 lg:-left-12 px-4 py-3 lg:px-6 lg:py-4 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,255,255,0.15)] z-20 flex items-center gap-3 lg:gap-4">
            <span className="text-3xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              2+
            </span>
            <div className="text-[10px] lg:text-sm text-gray-300 leading-tight font-medium uppercase tracking-wider">
              Years of<br/>Experience
            </div>
          </div>
        </div>

        {/* 
            TEXT COLUMN (Left side on desktop, Bottom on mobile)
            Using order-2 on mobile, lg:order-1 on desktop 
        */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pt-6 lg:pt-0">

          <div className="hero-badge glass-panel px-5 py-1.5 lg:px-6 lg:py-2 inline-flex items-center w-max mb-6 lg:mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,255,255,0.1)]">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-cyan-400 animate-pulse mr-2 lg:mr-3" />
            <span className="text-cyan-400 tracking-[0.2em] uppercase text-[10px] lg:text-xs font-bold">
              {personalInfo.title}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-bold mb-4 lg:mb-6 tracking-tighter leading-[1] lg:leading-[0.9]">
            {nameParts.map((part, index) => (
              <div key={index} className="overflow-hidden pb-1 lg:pb-2 inline-block lg:block mr-3 lg:mr-0">
                <div className="hero-title-text origin-bottom-left text-white">
                  {part}
                </div>
              </div>
            ))}
          </h1>

          <p className="hero-tagline text-base sm:text-lg md:text-2xl text-gray-400 font-light max-w-xl mb-8 lg:mb-10 leading-relaxed px-4 lg:px-0">
            {personalInfo.tagline}
          </p>
        </div>

      </div>
    </section>
  );
}