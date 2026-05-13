import { useState } from 'react';
import { defaultResumeData } from './data/resume';
import type { ResumeData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ResumeUploader } from './components/ResumeUploader';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-deep text-slate-100">
      <AnimatedCursor />
      <ParticlesBackground />
      <Navbar navItems={navItems} />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-10">
        <section id="home" className="relative pt-16">
          <Hero resume={resumeData} />
          <div className="mt-8">
            <ResumeUploader onData={setResumeData} />
          </div>
        </section>

        <section id="about">
          <About resume={resumeData} />
        </section>

        <section id="skills">
          <Skills skills={resumeData.skills} />
        </section>

        <section id="projects">
          <Projects projects={resumeData.projects} />
        </section>

        <section id="education">
          <Education education={resumeData.education} />
        </section>

        <section id="certifications">
          <Certifications certifications={resumeData.certifications} />
        </section>

        <section id="contact">
          <Contact contact={resumeData.contact} />
        </section>
      </main>
      <Footer social={resumeData.contact.social} />
    </div>
  );
}

export default App;
