import { motion } from 'framer-motion';
import { Award, Sparkles, TrendingUp } from 'lucide-react';
import type { ResumeData } from '../types';

type AboutProps = {
  resume: ResumeData;
};

export function About({ resume }: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass-panel glow-border rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-2xl"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            <Sparkles className="h-4 w-4" /> About Me
          </div>
          <h2 className="text-4xl font-semibold text-white">Professional Summary</h2>
          <p className="max-w-3xl leading-8 text-slate-300">{resume.summary}</p>
          <p className="max-w-3xl leading-8 text-slate-300">{resume.careerGoals}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {resume.interests.map((interest) => (
              <div key={interest} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                {interest}
              </div>
            ))}
          </div>
          <div>
            <h3 className="mt-6 text-xl font-semibold text-white">Soft Skills</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {resume.softSkills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center gap-3 text-cyan-300">
              <TrendingUp className="h-5 w-5" />
              <h3 className="text-xl font-semibold text-white">Career Momentum</h3>
            </div>
            <p className="mt-4 text-slate-300">
              I build polished applications that help recruiters and hiring managers experience your technical story in a premium way.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resume.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <Award className="h-5 w-5" />
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
