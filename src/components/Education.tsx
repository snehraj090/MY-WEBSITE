import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { ResumeData } from '../types';

type EducationProps = {
  education: ResumeData['education'];
};

export function Education({ education }: EducationProps) {
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
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Education Timeline</p>
          <h2 className="text-4xl font-semibold text-white">Academic journey</h2>
          <p className="max-w-3xl text-slate-300">A timeline-style education layout that communicates your academic background clearly and professionally.</p>
        </div>

        <div className="space-y-8">
          {education.map((entry) => (
            <div key={`${entry.degree}-${entry.institution}`} className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-lg shadow-slate-950/20 sm:grid-cols-[auto_1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{entry.year}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{entry.degree}</h3>
                <p className="mt-2 text-sm font-medium text-slate-300">{entry.institution}</p>
                <p className="mt-4 text-slate-400">{entry.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
