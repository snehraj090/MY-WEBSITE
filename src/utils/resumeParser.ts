import type { ResumeData } from '../types';
import { defaultResumeData } from '../data/resume';

const sectionHeaders = [
  'summary',
  'about',
  'professional summary',
  'experience',
  'skills',
  'projects',
  'education',
  'certifications',
  'achievements',
  'contact',
  'interests',
];

const splitList = (block: string) =>
  block
    .split(/\n|,|•|·|-|;/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

const normalize = (text: string) => text.replace(/\r/g, '').trim();

const extractSection = (text: string, keys: string[]) => {
  const heading = keys.map((key) => key.replace(/[-/\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const regex = new RegExp(`(?:${heading})\s*[:\n]+([\s\S]+?)(?=\n\s*(?:${sectionHeaders.join('|')})\s*[:\n]|$)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
};

const extractFirstMatch = (text: string, regex: RegExp) => {
  const match = text.match(regex);
  return match?.[0] ?? '';
};

const findName = (text: string) => {
  const lines = text.split(/\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return defaultResumeData.name;
  const header = lines[0].replace(/resume/i, '').trim();
  if (header.length > 2 && header.length < 40) return header;
  return lines[1] ?? defaultResumeData.name;
};

const getSectionItems = (text: string, keys: string[]) => {
  const block = extractSection(text, keys);
  if (!block) return [];
  return splitList(block);
};

const buildProjects = (text: string) => {
  const section = extractSection(text, ['projects']);
  if (!section) return defaultResumeData.projects;

  const chunks = section.split(/\n\s*\n/).filter(Boolean);
  const projects = chunks.map((chunk) => {
    const lines = chunk.split(/\n/).map((line) => line.trim()).filter(Boolean);
    const title = lines[0] ?? 'Project';
    let description = lines.slice(1).join(' ');
    const stack: string[] = [];
    let github = '';
    let demo = '';

    lines.slice(1).forEach((line) => {
      const lower = line.toLowerCase();
      if (lower.includes('tech') || lower.includes('stack')) {
        stack.push(...splitList(line.replace(/(tech stack|stack|technologies)[:\-]/i, '')));
      }
      if (lower.includes('github.com')) github = line.match(/https?:\/\/[^\s]+/i)?.[0] ?? '';
      if (lower.includes('http') && !lower.includes('github.com')) demo = line.match(/https?:\/\/[^\s]+/i)?.[0] ?? demo;
    });

    if (!stack.length) {
      const summary = lines.slice(1).join(' ');
      const found = summary.match(/(React|Node|Express|MongoDB|GraphQL|Tailwind|TypeScript|JavaScript|Next\.js|AWS|Firebase|Docker)/gi);
      if (found) stack.push(...Array.from(new Set(found)));
    }

    return {
      title,
      description: description || defaultResumeData.projects[0].description,
      stack: stack.length ? stack : ['JavaScript', 'React', 'Node.js'],
      github: github || defaultResumeData.projects[0].github,
      demo: demo || defaultResumeData.projects[0].demo,
    };
  });

  return projects.length ? projects : defaultResumeData.projects;
};

const buildEducation = (text: string) => {
  const section = extractSection(text, ['education']);
  if (!section) return defaultResumeData.education;

  const entries = section.split(/\n\s*\n/).filter(Boolean);
  return entries.map((entry) => {
    const lines = entry.split(/\n/).map((line) => line.trim()).filter(Boolean);
    return {
      degree: lines[0] ?? 'Degree',
      institution: lines[1] ?? 'University',
      year: lines.find((line) => /\d{4}/.test(line)) ?? '2024',
      details: lines.slice(2).join(' ') || 'Focused on software development, algorithms, and full-stack architecture.',
    };
  });
};

const buildCertifications = (text: string) => {
  const section = extractSection(text, ['certifications', 'certificates']);
  if (!section) return defaultResumeData.certifications;

  const items = section.split(/\n|,|•|·/).map((item) => item.trim()).filter(Boolean);
  return items
    .map((item) => {
      const year = item.match(/\d{4}/)?.[0] ?? '2024';
      const parts = item.replace(year, '').split(/[-@|–:]/).map((part) => part.trim()).filter(Boolean);
      return {
        title: parts[0] ?? item,
        issuer: parts[1] ?? 'Online Program',
        year,
      };
    })
    .slice(0, 6);
};

const buildSocial = (text: string) => {
  const github = extractFirstMatch(text, /https?:\/\/github\.com\/[A-Za-z0-9_-]+/i);
  const linkedin = extractFirstMatch(text, /https?:\/\/linkedin\.com\/[A-Za-z0-9_\-\/]+/i);
  const twitter = extractFirstMatch(text, /https?:\/\/twitter\.com\/[A-Za-z0-9_]+/i);
  const website = extractFirstMatch(text, /https?:\/\/[^\s]+\.(com|dev|io|app|tech)/i);
  return { github, linkedin, twitter, website };
};

const parseResumeText = (text: string): ResumeData => {
  const normalizedText = normalize(text);
  const name = findName(normalizedText);
  const title = extractSection(normalizedText, ['role', 'title', 'position', 'profile']).split('\n')[0] || defaultResumeData.title;
  const summary = extractSection(normalizedText, ['summary', 'about', 'professional summary']) || defaultResumeData.summary;
  const careerGoals = extractSection(normalizedText, ['career goals', 'objective', 'aspiration', 'goal']) || defaultResumeData.careerGoals;
  const interests = getSectionItems(normalizedText, ['interests', 'areas of interest', 'domains']) || defaultResumeData.interests;
  const skillLines = getSectionItems(normalizedText, ['skills', 'technical skills', 'tools', 'technologies']);

  const languages = skillLines.filter((item) => /(java(script)?|python|c\+\+|c#|ruby|go|php)/i.test(item));
  const frontend = skillLines.filter((item) => /(react|vue|angular|tailwind|css|html|framer|next\.js)/i.test(item));
  const backend = skillLines.filter((item) => /(node|express|graphql|rest|django|flask|spring)/i.test(item));
  const databases = skillLines.filter((item) => /(mongo|postgres|mysql|redis|firebase|sqlite)/i.test(item));
  const tools = skillLines.filter((item) => /(git|docker|figma|vscode|postman|aws|azure|linux)/i.test(item));
  const coreSubjects = skillLines.filter((item) => /(data structures|algorithms|os|dbms|oop|networks)/i.test(item));
  const advancedJava = skillLines.filter((item) => /(swing|jdbc|design patterns|exception|multithreading|collections)/i.test(item));

  const phone = extractFirstMatch(normalizedText, /\+?\d[\d\s\-()]{6,}\d/).replace(/\s+/g, '');
  const email = extractFirstMatch(normalizedText, /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/i) || defaultResumeData.contact.email;
  const location = extractSection(normalizedText, ['location', 'address']) || defaultResumeData.contact.location;
  const social = buildSocial(normalizedText);

  return {
    name,
    title: title || defaultResumeData.title,
    summary: summary || defaultResumeData.summary,
    careerGoals: careerGoals || defaultResumeData.careerGoals,
    interests: interests.length ? interests : defaultResumeData.interests,
    softSkills: defaultResumeData.softSkills,
    stats: defaultResumeData.stats,
    skills: {
      languages: languages.length ? languages : defaultResumeData.skills.languages,
      frontend: frontend.length ? frontend : defaultResumeData.skills.frontend,
      backend: backend.length ? backend : defaultResumeData.skills.backend,
      databases: databases.length ? databases : defaultResumeData.skills.databases,
      tools: tools.length ? tools : defaultResumeData.skills.tools,
      coreSubjects: coreSubjects.length ? coreSubjects : defaultResumeData.skills.coreSubjects,
      advancedJava: advancedJava.length ? advancedJava : defaultResumeData.skills.advancedJava,
    },
    projects: buildProjects(normalizedText),
    education: buildEducation(normalizedText),
    certifications: buildCertifications(normalizedText),
    contact: {
      email,
      phone: phone || defaultResumeData.contact.phone,
      location: location || defaultResumeData.contact.location,
      social,
    },
    photoUrl: defaultResumeData.photoUrl,
    resumeUrl: defaultResumeData.resumeUrl,
  };
};

const readTextFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });

const readPdfFile = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdfjs = await import('pdfjs-dist');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();
  const doc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';
  for (let page = 1; page <= doc.numPages; page += 1) {
    const pageItem = await doc.getPage(page);
    const content = await pageItem.getTextContent();
    const pageText = content.items.map((item: any) => item.str).join(' ');
    fullText += `${pageText}\n`;
  }
  return fullText;
};

export const parseResumeFile = async (file: File): Promise<ResumeData> => {
  const text = file.type === 'application/pdf' || file.name.endsWith('.pdf') ? await readPdfFile(file) : await readTextFile(file);
  return parseResumeText(text);
};
