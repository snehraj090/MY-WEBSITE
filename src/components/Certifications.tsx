import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import type { ResumeData } from '../types';

type CertificationsProps = {
  certifications: ResumeData['certifications'];
};

export function Certifications({ certifications }: CertificationsProps) {
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
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Certifications</p>
          <h2 className="text-4xl font-semibold text-white">Verified achievements</h2>
          <p className="max-w-3xl text-slate-300">Modern certification cards designed to showcase training, credentials, and upskilling in software development.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={`${cert.title}-${cert.issuer}`} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-cyan-300">
                <Award className="h-5 w-5" />
                <p className="font-semibold uppercase tracking-[0.2em] text-cyan-200">Certification</p>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{cert.title}</h3>
              <p className="mt-3 text-sm font-medium text-slate-400">{cert.issuer}</p>
              <p className="mt-3 text-sm text-slate-300">Issued in {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
