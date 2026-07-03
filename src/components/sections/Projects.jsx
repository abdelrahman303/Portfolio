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
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-background overflow-hidden flex items-center relative">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold">Selected Works</h2>
      </div>
      
      <div ref={scrollRef} className="flex gap-12 px-[10vw] mt-20 items-center w-max">
        {projects.map((project) => (
          <div key={project.id} className="relative w-[80vw] md:w-[40vw] h-[60vh] shrink-0 group rounded-3xl overflow-hidden">
            <div className="absolute inset-0 glass-panel overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full backdrop-blur-md text-gray-200 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 max-w-md line-clamp-2">{project.description}</p>
                
                {/* Updated to anchor tag for routing */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors cursor-pointer"
                >
                  View Project <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}