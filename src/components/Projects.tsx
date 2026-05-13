import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { ResumeData } from '../types';

type ProjectsProps = {
  projects: ResumeData['projects'];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass-panel glow-border rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-2xl"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Project Highlights</p>
          <h2 className="text-4xl font-semibold text-white">Selected work</h2>
          <p className="max-w-3xl text-slate-300">Beautiful project cards that emphasize your most impactful software work and tech stack with fast hover interactions.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/90">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Featured</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/15">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-6 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
