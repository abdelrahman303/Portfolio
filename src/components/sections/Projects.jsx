import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    
    // Get total width to scroll
    const scrollWidth = scrollContainer.offsetWidth - window.innerWidth;

    const tween = gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-background overflow-hidden flex items-center">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold">Selected Works</h2>
      </div>
      
      <div ref={scrollRef} className="flex gap-12 px-[10vw] mt-20">
        {projects.map((project) => (
          <div key={project.id} className="relative w-[80vw] md:w-[40vw] h-[60vh] shrink-0 group">
            <div className="absolute inset-0 glass-panel overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6 max-w-md">{project.description}</p>
                <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
                  View Project <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}