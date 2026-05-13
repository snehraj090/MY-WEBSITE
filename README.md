# Developer Portfolio

A modern React + Tailwind portfolio template with a resume-driven content model, futuristic UI, glassmorphism surfaces, and recruiter-friendly sections.

## Features

- Dark glassmorphism design with blue/purple/cyan gradients
- Hero, About, Skills, Projects, Education, Certifications, Contact, and Footer sections
- Resume upload component to extract primary content automatically
- Sticky navbar, animated background particles, typing hero text, scroll reveal effects
- Fully responsive and production-ready for Vercel

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Start development
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Resume Integration

The portfolio content is driven by `src/data/resume.ts` and can be updated automatically using the in-app resume uploader. Upload a plain-text or PDF resume and the parser will extract:

- Name
- Role / title
- Summary
- Education
- Skills
- Projects
- Certifications
- Social links
- Contact information

If you have a structured resume file or JSON export, you can also update `src/data/resume.ts` directly.

## Vercel Deployment

1. Push the project to GitHub.
2. In Vercel, import the repository.
3. Use the default Vite settings.
4. Set the root directory to `/` and deploy.

## Notes

- Replace placeholder content in `src/data/resume.ts` with your own resume details.
- Add your profile photo to `public/profile.jpg` and leave `photoUrl: '/profile.jpg'` in `src/data/resume.ts`.
- The resume parser is built for common resume formatting, but you may refine content manually for the best result.
