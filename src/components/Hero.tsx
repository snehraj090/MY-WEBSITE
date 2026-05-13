import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { TypingText } from './TypingText';
import type { ResumeData } from '../types';

type HeroProps = {
  resume: ResumeData;
};

export function Hero({ resume }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="glass-panel glow-border rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-2xl"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Premium Developer Portfolio</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Hi, I’m <span className="text-cyan-300">{resume.name}</span>
          </h1>
          <div className="space-y-4 text-slate-300">
            <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-200/90">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">{resume.title}</span>
            </div>
            <p className="max-w-3xl leading-8 text-slate-300">{resume.summary}</p>
            <TypingText phrases={[resume.title, 'Full Stack Developer', 'Java & MERN Specialist']} />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={resume.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-cyan-500/10">
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cyan-400/15 to-transparent blur-3xl" />
          <div className="relative space-y-5">
            <div className="flex items-center gap-4 rounded-[1.75rem] bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/30 via-purple-600/20 to-slate-900/60 text-3xl font-semibold text-white shadow-xl shadow-cyan-500/10">
                {resume.photoUrl ? (
                  <img
                    src={resume.photoUrl}
                    alt={resume.name}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                ) : (
                  <span>RV</span>
                )}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Profile</p>
                <h3 className="text-xl font-semibold text-white">{resume.name}</h3>
                <p className="text-sm text-slate-300">{resume.title}</p>
              </div>
            </div>
            <div className="space-y-3 rounded-[1.75rem] bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
              <p className="text-sm uppercase text-cyan-300/80 tracking-[0.3em]">Contact</p>
              <div className="space-y-2 text-sm text-slate-200">
                <p><span className="font-semibold text-white">Email:</span> {resume.contact.email}</p>
                <p><span className="font-semibold text-white">Phone:</span> {resume.contact.phone}</p>
                <p><span className="font-semibold text-white">Location:</span> {resume.contact.location}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={resume.contact.social.github} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-300/40">
                <Github className="mx-auto h-6 w-6 text-cyan-300 group-hover:text-white" />
                <p className="mt-3 text-sm text-slate-300">GitHub</p>
              </a>
              <a href={resume.contact.social.linkedin} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center transition hover:-translate-y-1 hover:border-purple-400/40">
                <Linkedin className="mx-auto h-6 w-6 text-purple-300 group-hover:text-white" />
                <p className="mt-3 text-sm text-slate-300">LinkedIn</p>
              </a>
              <a href={`mailto:${resume.contact.email}`} className="group rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center transition hover:-translate-y-1 hover:border-sky-400/40">
                <Mail className="mx-auto h-6 w-6 text-sky-300 group-hover:text-white" />
                <p className="mt-3 text-sm text-slate-300">Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
