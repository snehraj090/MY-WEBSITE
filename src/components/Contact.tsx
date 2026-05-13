import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import type { ResumeData } from '../types';

type ContactProps = {
  contact: ResumeData['contact'];
};

export function Contact({ contact }: ContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass-panel glow-border rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-2xl"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            <Mail className="h-4 w-4" /> Contact
          </div>
          <h2 className="text-4xl font-semibold text-white">Reach out to collaborate</h2>
          <p className="max-w-3xl text-slate-300">
            Whether it’s internships, freelancing, or networking, I’m available to discuss web development projects and technical partnerships.
          </p>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/20">
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="h-5 w-5 text-cyan-300" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="h-5 w-5 text-purple-300" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <MapPin className="h-5 w-5 text-sky-300" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/20">
          <h3 className="text-2xl font-semibold text-white">Send a message</h3>
          <p className="mt-3 text-slate-300">Use the form to contact me directly or open your email client for a fast response.</p>
          <form action={`mailto:${contact.email}`} method="post" className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="glass-panel w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/40" type="text" name="name" placeholder="Your Name" required />
              <input className="glass-panel w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/40" type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea className="glass-panel w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/40" name="message" rows={5} placeholder="Tell me about your project..." required />
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
