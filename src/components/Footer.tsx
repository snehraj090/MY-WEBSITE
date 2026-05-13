import { ArrowUpRight, Github, Linkedin, Twitter, Globe } from 'lucide-react';

type FooterProps = {
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
};

export function Footer({ social }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 px-6 py-8 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Personal Brand</p>
          <p className="mt-3 text-sm text-slate-400">Designed for recruiters, hiring managers, and collaborative teams who want a modern developer portfolio.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          {social.github && (
            <a href={social.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.website && (
            <a href={social.website} target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} Premium Developer Portfolio</span>
        <a href="#home" className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-white">
          Back to top <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
