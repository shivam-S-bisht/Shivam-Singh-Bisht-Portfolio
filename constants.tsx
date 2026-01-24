import React from 'react';
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Shivam Singh Bisht",
  title: "Software Engineer II",
  location: "Ghaziabad, Uttar Pradesh, India",
  contact: {
    phone: "+91-9315254390",
    email: "bishtshivam096@gmail.com",
    linkedin: "https://linkedin.com/in/shivambisht2001",
    github: "https://github.com/shivam-S-bisht"
  },
  summary: "Results-driven Software Engineer with 4+ years of expertise in architecting scalable web and mobile applications. Specialized in JavaScript/TypeScript with hands-on experience in React.js, Next.js, SvelteKit, Node.js, and React Native. Proven track record of delivering 40+ production applications across iOS and Android with measurable business impact.",
  experience: [
    {
      role: "Software Engineer II",
      company: "Daxko",
      location: "Noida, India",
      period: "August 2023 – Present",
      points: [
        "Successfully led migration from Capacitor to React Native for 40+ applications, achieving modern UI, unified cross-platform experience, API level 34 compliance, and 35% reduction in bug count.",
        "Architected OTA update system from scratch enabling single bundle deployment for 1000+ white-labeled apps, eliminating app store resubmissions and reducing update time from 2-3 weeks to under 5 minutes.",
        "Used AI-first development approach integrating GitHub Copilot with Figma for automated design-to-code workflow, generating 200+ production-ready components and reducing development time by 60%.",
        "Key contributor to 'One UI' library used across 3 teams; designed database-driven feature flag architecture enabling zero-downtime gradual migration rollout.",
        "Architected separate authentication principals for React Native, Capacitor, and cron jobs, eliminating 100% of API rate limit errors for 10k+ daily active users.",
        "Resolved critical database performance bottlenecks by optimizing queries and deploying read replicas, improving query response time by 75% (from 10s to 1s).",
        "Led Cloudflare infrastructure migration for 15+ services and championed TDD achieving 85% code coverage with Jest."
      ]
    },
    {
      role: "Software Engineer I (Full Stack Engineer)",
      company: "Byju's Exam Prep",
      location: "Noida, India",
      period: "January 2022 – August 2023",
      points: [
        "Built framework-agnostic UI component library with 50+ reusable components using Svelte and Vite, reducing code duplication by 40%.",
        "Managed and mentored a team of 2-3 engineers, conducting 20+ code reviews weekly.",
        "Enhanced real-time chat system to process 1k+ concurrent messages, reducing message latency by 50%.",
        "Architected custom WordPress theme with advanced SEO features, improving Core Web Vitals scores to 90+.",
        "Built real-time polling system using GraphQL subscriptions handling 5k+ concurrent polls for 10k+ live class participants.",
        "Delivered impact: 98% improvement in page performance, 1.5x boost in lead conversions, and 360% surge in organic traffic (13k to 60k users/day)."
      ]
    },
    {
      role: "Software Engineer (Full Stack Developer)",
      company: "DataPitcher",
      location: "Remote",
      period: "July 2021 – January 2022",
      points: [
        "Designed and developed full-stack web application from inception using React.js with Redux for centralized state management.",
        "Constructed robust backend infrastructure leveraging Django REST Framework, GraphQL, and MySQL database.",
        "Provided technical leadership to a team of 2-3 developers, coordinating delivery across 5+ client engagements.",
        "Established and maintained production and staging deployment environments ensuring maximum availability."
      ]
    }
  ],
  skills: [
    { name: "Languages & Frontend", skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "SvelteKit", "HTML5", "CSS", "Webpack", "Svelte", "Vite", "Apollo GraphQL"] },
    { name: "Mobile Development", skills: ["React Native", "Capacitor", "Expo", "OTA Updates", "White-labeling"] },
    { name: "Backend & Databases", skills: ["Node.js", "Django REST", "GraphQL", "Flask", "MySQL", "REST APIs", "WebRTC"] },
    { name: "DevOps & Tools", skills: ["Git", "CI/CD", "GitLab", "Docker", "Nginx", "Cloudflare", "Instana", "Rapid7"] },
    { name: "Analytics & SEO", skills: ["GTM", "GA4", "Firebase Analytics", "Clevertap", "SEO"] },
    { name: "Testing & Others", skills: ["Jest", "React Testing Library", "WordPress", "NLP"] }
  ],
  projects: [
    {
      title: "Freedrobe",
      description: "Sustainable wardrobe management app with React Native featuring storage, cleaning, and recycling services. Launched to 1k+ users in first month.",
      tags: ["React Native", "Expo", "AI", "Firebase"],
      links: [
        { type: "Play store", url: "https://play.google.com/store/apps/details?id=com.freedrobe.mobile" },
        { type: "App Store", url: "https://apps.apple.com/us/app/freedrobe/id6745894494" }
      ]
    },
    {
      title: "Icarus Football Schools",
      description: "Hybrid app using Capacitor and SvelteKit with session management, payments, and OTA updates. Deployed across 10+ academies.",
      tags: ["SvelteKit", "Capacitor", "Mobile", "OTA"],
      links: [
        { type: "Play store", url: "https://play.google.com/store/apps/details?id=com.icarusfootballschools.app" },
        { type: "App Store", url: "https://apps.apple.com/app/icarus-football-schools/id6738602068" }
      ]
    },
    {
      title: "Expression Sentiment Analysis",
      description: "ML solution using Keras for facial expression recognition across 8 emotional states. Achieved 92% accuracy.",
      tags: ["Python", "Keras", "ML", "GitHub"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/shankara-hacks.git" }]
    },
    {
      title: "Agro-Tech Platform",
      description: "ML-powered crop recommendation and disease identification system. Trained on 10k+ images with 85% accuracy.",
      tags: ["Python", "ML", "React", "GitHub"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/jai-kisaan.git" }]
    }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, India",
    period: "2018 – 2022",
    achievements: ["Graduated with Distinction", "University Football Captain"]
  },
  certifications: [
    "Deep Learning Specialization (DeepLearning.AI)",
    "Programming with Google Go Specialization (UC Irvine)",
    "The Last Algorithms Course You'll Need",
    "The Hard Parts of Asynchronous JavaScript",
    "The Hard Parts of Functional JavaScript",
    "Intermediate React Native v2",
    "Introduction to Backend Architectures",
    "Challenge ACI Nationwide Hackathon Winner (Oct 2019)",
    "IISF Kolkata Project Showcase Finalist (2019)"
  ],
  interests: ["Football", "Badminton", "Trekking", "Technical Writing"]
};

export const Icons = {
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Linkedin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  ExternalLink: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>,
  Trophy: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
  AppStore: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.97 0 3.06-1.15 3.14-1.15s1.08 1.15 3.14 1.15c2.35 0 4.14-2.11 4.14-4.8 0-3.37-2.43-6.52-5.41-6.52s-3.53.86-5 1.12c-1.47-.26-2.02-1.12-5-1.12-2.98 0-5.41 3.15-5.41 6.52 0 2.69 1.79 4.8 4.14 4.8s3.06-1.15 3.14-1.15 1.17 1.15 3.14 1.15Z"/><path d="M15.07 4.11c.82 1.01.69 2.21.69 2.21s-1.12.21-2.13-.77c-.96-.94-.85-2.2-.85-2.2s1.39-.32 2.29.76Z"/></svg>,
  PlayStore: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3.5v17a1 1 0 0 0 1.5.86l16-8.5a1 1 0 0 0 0-1.72l-16-8.5A1 1 0 0 0 3 3.5Z"/><path d="m3 3.5 9 9-9 9"/><path d="m15.5 12-4.5-4.5"/><path d="m15.5 12-4.5 4.5"/></svg>
};