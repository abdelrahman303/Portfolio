import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animated Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-blue/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel px-6 py-2 inline-block mb-6"
        >
          <span className="text-neon-cyan tracking-widest uppercase text-sm font-semibold">
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalInfo.tagline}
        </motion.h2>

        <motion.div 
          className="mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.tech.map((tech, i) => (
            <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-neon-purple transition-colors duration-300">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}