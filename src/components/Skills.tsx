import { motion } from 'framer-motion';
import type { ResumeData } from '../types';

type SkillsProps = {
  skills: ResumeData['skills'];
};

const categories = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frontend', key: 'frontend' },
  { label: 'Backend', key: 'backend' },
  { label: 'Databases', key: 'databases' },
  { label: 'Tools', key: 'tools' },
  { label: 'Core CS', key: 'coreSubjects' },
] as const;

export function Skills({ skills }: SkillsProps) {
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
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Technical Skills</p>
          <h2 className="text-4xl font-semibold text-white">Categorized skill stack</h2>
          <p className="max-w-3xl text-slate-300">
            Clean, recruiter-friendly skill categories with modern animation-ready cards and progress-like layout.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const items = skills[category.key] as string[];
            return (
              <div key={category.label} className="rounded-[1.9rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{category.label}</span>
                  <span className="text-xs text-slate-400">{items.length} items</span>
                </div>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={`${category.label}-${skill}`} className="rounded-3xl bg-slate-950/80 p-3 text-sm text-slate-200 ring-1 ring-white/5">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
