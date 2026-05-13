import { useState } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  navItems: NavItem[];
};

export function Navbar({ navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3 text-base font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/20">A</span>
          <span>Premium Portfolio</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium uppercase tracking-[0.18em] transition ${
                activeSection === item.id ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-300 transition hover:border-cyan-400/30 hover:text-white md:inline-flex">
            <Moon className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition hover:border-cyan-400/30 hover:text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  activeSection === item.id ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
