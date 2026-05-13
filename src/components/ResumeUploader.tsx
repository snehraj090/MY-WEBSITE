import { useState, type ChangeEvent } from 'react';
import { CloudUpload, FileText, RefreshCw } from 'lucide-react';
import type { ResumeData } from '../types';
import { parseResumeFile } from '../utils/resumeParser';

type ResumeUploaderProps = {
  currentData: ResumeData;
  onData: (data: ResumeData) => void;
};

export function ResumeUploader({ currentData, onData }: ResumeUploaderProps) {
  const [status, setStatus] = useState('Upload a resume file to populate the website content automatically.');

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setStatus(`Parsing resume: ${file.name}`);
    try {
      const parsed = await parseResumeFile(file);
      onData(parsed);
      setStatus(`Loaded content from ${file.name}. Scroll to explore your updated portfolio.`);
    } catch (error) {
      setStatus('Unable to parse this resume file. Try a PDF or plain text file with standard headings.');
      console.error(error);
    }
  };

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const photoUrl = URL.createObjectURL(file);
    onData({ ...currentData, photoUrl });
    setStatus(`Profile photo uploaded: ${file.name}`);
  };

  return (
    <div className="glass-panel glow-border rounded-3xl border border-white/10 p-6 shadow-glow backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Resume Import</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Auto-populate your portfolio</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Choose your resume file and let the site extract key details like name, projects, skills, education,
            and social links.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <label className="group inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-slate-800">
            <CloudUpload className="mr-2 h-4 w-4" />
            Upload file
            <input type="file" accept=".pdf,.txt,.md" className="hidden" onChange={handleFile} />
          </label>
          <label className="group inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-slate-800">
            <CloudUpload className="mr-2 h-4 w-4" />
            Upload photo
            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
          </label>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-slate-950/60 p-4 text-sm text-slate-300 shadow-inner">
        <div className="flex items-center gap-2 text-cyan-300">
          <FileText className="h-4 w-4" />
          <span>Status</span>
        </div>
        <p className="mt-3">{status}</p>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-500/20"
      >
        <RefreshCw className="h-4 w-4" />
        Reset to default sample
      </button>
    </div>
  );
}
