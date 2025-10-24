import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Icons (Self-contained components) ---
const GitHubIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const ReactIcon = ({ className }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const ExpressIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L11 12L7 7M13 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const NextIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM41.8385 101.344V26.6558H50.5641V89.1026L97.3077 26.6558H106L59.2564 89.1026L50.5641 101.344H41.8385Z" fill="currentColor"/>
    </svg>
);

const MongoDBIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.116,6.7a2.384,2.384,0,0,0-2.31,1.936,3.42,3.42,0,0,1-1.806-.519,10.45,10.45,0,0,0-4.02-1.353,11.52,11.52,0,0,0-1.872.2c-.34.072-.6.183-.6.333s.06.319.456.519a8.53,8.53,0,0,1,3.456,1.488c1.7,1.068,2.784,2.448,2.784,4.248S11.4,17.4,9.6,18.5a7.9,7.9,0,0,1-3.6,1.212,12.2,12.2,0,0,1-1.764-.108c-.288-.06-.48-.168-.48-.288s.084-.252.408-.432A10.273,10.273,0,0,0,8,17.58c.84-.6,1.38-1.464,1.38-2.616s-.54-2.016-1.38-2.616A10.43,10.43,0,0,0,4.2,11.232a4.41,4.41,0,0,0-.312.384,2.4,2.4,0,1,0,3.3,3.3A2.42,2.42,0,0,0,8.58,12.4a8,8,0,0,1,3.205,3.036c.1.18.252.324.456.408a2.35,2.35,0,0,0,2.364-1.8,3.42,3.42,0,0,1,1.806.519,10.45,10.45,0,0,0,4.02,1.353,11.52,11.52,0,0,0,1.872-.2c.34-.072.6-.183.6-.333s-.06-.319-.456-.519a8.53,8.53,0,0,1-3.456-1.488c-1.7-1.068-2.784-2.448-2.784-4.248S14.4,8.1,16.2,7.008a7.9,7.9,0,0,1,3.6-1.212,12.2,12.2,0,0,1,1.764.108c.288.06.48.168.48.288s-.084.252-.408-.432A10.273,10.273,0,0,0,16.8,7.92c-.84.6-1.38,1.464-1.38,2.616s.54,2.016,1.38,2.616A10.43,10.43,0,0,0,20.6,14.28a4.41,4.41,0,0,0,.312-.384,2.4,2.4,0,1,0-3.3-3.3A2.42,2.42,0,0,0,16.212,13.1a8,8,0,0,1-3.205-3.036c-.1-.18-.252-.324-.456-.408Z" fill="currentColor"/>
    </svg>
);

const MySQLIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.44,14.22c.23-.33,1.06-1.4,1.06-1.4a.79.79,0,0,0,0-.56.81.81,0,0,0-.16-.32,4,4,0,0,0-2.07-2c-1.31-.6-2-.8-2.32-.86a11.56,11.56,0,0,0-2.45-.33,1,1,0,0,0-.73.23.86.86,0,0,0-.34.66v.19c0,.22.06.43.19.64a.82.82,0,0,0,.19.26s1.17,1.06,1.4,1.4-1.35,1.75-1.5,2a1,1,0,0,0-.08.5,1,1,0,0,0,.23.51,1.1,1.1,0,0,0,.51.34c.16.08.33.11.5.11a5.6,5.6,0,0,0,2.15-.33,10.37,10.37,0,0,0,1.84-.71C12.33,14.85,12.44,14.22,12.44,14.22ZM21.5,11.42a12,12,0,0,0-1.89-6.31,11.39,11.39,0,0,0-1-.87c-.11-.08-.22,0-.22.14,0,.08-2.29,7.6-2.29,7.6s-.31.84,0,1.26a1.23,1.23,0,0,0,1.15.71,11,11,0,0,0,4.24-1.39A8.19,8.19,0,0,0,21.5,11.42ZM2.5,11.42A8.19,8.19,0,0,0,2.5,11.42Z" fill="currentColor"/>
        <path d="M10.83,16.59c-.43,0-1.31,0-1.31,0a.59.59,0,0,0-.31,0,.43.43,0,0,0-.24.16,3,3,0,0,0-.4,1.21.72.72,0,0,0,0,.21.79.79,0,0,0,.21.55l.29.29a.69.69,0,0,0,.5.21.52.52,0,0,0,.21,0H11a2,2,0,0,0,1.29-.62c.18-.18,1.4-2.15,1.4-2.15S12,16.59,10.83,16.59Z" fill="currentColor"/>
    </svg>
);

const CIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4777 6.52228C14.7344 5.77894 13.8217 5.21045 12.8067 4.86902C11.7917 4.52759 10.7022 4.42383 9.63878 4.56711C8.57538 4.71039 7.57538 5.0954 6.72109 5.68417C5.86681 6.27293 5.18844 7.04788 4.74558 7.94273C4.30272 8.83758 4.10861 9.82427 4.18182 10.8202C4.25503 11.8162 4.59325 12.7909 5.16632 13.6558C5.73939 14.5207 6.52988 15.2492 7.46618 15.7792C8.40248 16.3092 9.45661 16.6269 10.5401 16.7032" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TailwindIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C12 12 13.5 10 16 10C18.5 10 20 12 20 14C20 16 18.5 18 16 18C13.5 18 8 12 8 12M12 12C12 12 10.5 14 8 14C5.5 14 4 12 4 10C4 8 5.5 6 8 6C10.5 6 16 12 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ShadcnIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Reusable UI Components ---

/**
 * A card component with a motion-based glare effect.
 */
const GlareCard = ({ children, className = '' }) => {
  const [glarePosition, setGlarePosition] = React.useState({ x: -100, y: -100 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlarePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setGlarePosition({ x: -100, y: -100 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03, boxShadow: '0px 10px 30px rgba(56, 189, 248, 0.1)' }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden bg-slate-800/30 border border-slate-700/70 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:border-blue-500/40 ${className}`}
    >
      {/* Glare Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}px ${glarePosition.y}px, rgba(56, 189, 248, 0.3), transparent 80%)`,
        }}
        animate={{ opacity: glarePosition.x > -100 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </motion.div>
  );
};

const Button = ({ children, href, icon, className = '' }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600/70 to-cyan-500/70 border border-blue-500/30 rounded-lg shadow-md transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] ${className}`}
  >
    {icon}
    {children}
  </motion.a>
);

// --- Main Application Component ---

export default function App() {
  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Express', icon: <ExpressIcon /> },
    { name: 'Next', icon: <NextIcon /> },
    { name: 'MongoDB', icon: <MongoDBIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'C', icon: <CIcon /> },
    { name: 'Tailwind', icon: <TailwindIcon /> },
    { name: 'Shadcn', icon: <ShadcnIcon /> },
  ];

  const projects = [
    {
      title: 'To-Do List Application',
      description: 'A To-Do List application built with ReactJs, featuring user authentication and a Design.',
      link: 'https://github.com/AtharvaisOp/ToDo',
    },
    {
      title: 'Stack-Queue Visualizer',
      description: 'A visualizer for stack and queue data structures. Users can interactively add and remove elements, and see the data structure in action.',
      link: 'https://github.com/AtharvaisOp/Stack-Queue-Visualizer',
    },
    {
      title: 'EcoFootprint',
      description: 'A web application that helps users track and reduce their carbon footprint through daily activity logging and personalized tips.',
      link: 'https://github.com/AtharvaisOp/SBWT_miniProject',
    },
  ];

  return (
    <div className="relative bg-slate-950 text-slate-300 font-sans antialiased min-h-screen overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-900 opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_60%)]"></div>

      <main className="container mx-auto max-w-5xl px-6 py-20 space-y-24">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.img
            src="https://avatars.githubusercontent.com/u/183198790?v=4"
            alt="Atharva Ghuge"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />

          {/* Text */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              Atharva Ghuge
            </h1>
            <h2 className="mt-3 text-xl sm:text-2xl text-blue-300 font-semibold tracking-wide">
              Web Developer
            </h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-400">
              I build immersive, responsive, and high-performance web applications blending aesthetics with robust engineering.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills" className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <GlareCard key={skill.name} className="relative flex items-center justify-center h-28 p-4 overflow-hidden">
                <div className="absolute -z-10 inset-0 flex items-center justify-center text-slate-700 opacity-10">
                  {React.cloneElement(skill.icon, { className: "w-24 h-24" })}
                </div>
                <p className="z-10 text-white font-bold text-lg">{skill.name}</p>
              </GlareCard>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <GlareCard key={project.title}>
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyan-300 mb-2">{project.title}</h4>
                    <p className="text-sm text-slate-400 mb-4">{project.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Button href={project.link} icon={<GitHubIcon className="w-4 h-4" />}>
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </GlareCard>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-800 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Atharva Ghuge. Crafted with 💙 using React.
        </p>
        <a
          href="https://github.com/AtharvaisOp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-blue-300 hover:text-cyan-200 transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
          <span>@AtharvaisOp</span>
        </a>
      </footer>
    </div>
  );
}

