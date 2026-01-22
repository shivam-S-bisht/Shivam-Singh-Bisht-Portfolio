import React from 'react';
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Shivam Singh Bisht",
  title: "Software Engineer II",
  location: "Noida / Ghaziabad, India",
  contact: {
    phone: "+91-9315254390",
    email: "bishtshivam096@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivambisht2001/",
    github: "https://github.com/shivam-S-bisht"
  },
  summary: "Software Engineer II specializing in high-performance web and mobile ecosystems. 4+ years of experience scaling products for millions of users at Daxko and Byju’s. Expert in React, React Native, and SvelteKit. Currently open for Full-time, Contract, and Freelance opportunities.",
  experience: [
    {
      role: "Software Engineer 2",
      company: "Daxko",
      location: "Noida",
      period: "Aug 2023 – Present",
      points: [
        "Architected hybrid applications using SvelteKit and React Native, streamlining cross-platform deployment.",
        "Engineered an in-house OTA (Over-The-Air) update solution for Expo, drastically reducing deployment friction.",
        "Launched 40+ white-labeled fitness apps for iOS and Android, managing complex CI/CD pipelines.",
        "Integrated critical mobile features: Apple HealthKit, push notifications, and deep linking."
      ]
    },
    {
      role: "Software Engineer 1",
      company: "Byju’s Exam Prep",
      location: "Noida",
      period: "Jan 2022 – Aug 2023",
      points: [
        "Revitalized web platforms using Next.js and GraphQL, achieving a 98% improvement in Core Web Vitals.",
        "Developed a real-time polling feature using GraphQL subscriptions, increasing user engagement.",
        "Built a custom UI component library using Svelte and Vite for internal ecosystem consistency.",
        "Scaled organic traffic from 13k to 60k daily users through strategic SEO engineering."
      ]
    },
    {
      role: "Software Engineer",
      company: "Datapitcher",
      location: "Remote",
      period: "Jul 2021 – Jan 2022",
      points: [
        "Delivered full-stack web platforms using React.js and Django REST Framework.",
        "Lead a cross-functional team of 3 developers on high-priority client projects.",
        "Managed cloud infrastructure for production and staging environments."
      ]
    }
  ],
  skills: [
    { name: "Frontend", skills: ["React.js", "Next.js", "SvelteKit", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { name: "Mobile", skills: ["React Native", "Expo", "Capacitor", "HealthKit"] },
    { name: "Backend", skills: ["Node.js", "Django REST", "GraphQL", "MySQL"] },
    { name: "Tools", skills: ["Docker", "Git", "CI/CD", "GA4/GTM", "Firebase", "OTA Updates"] }
  ],
  projects: [
    {
      title: "Icarus Football Schools",
      description: "A comprehensive hybrid app built with Capacitor and SvelteKit featuring subscription handling and session management for elite football training.",
      tags: ["SvelteKit", "Capacitor", "Mobile"],
      links: [
        { type: "App Store", url: "https://apps.apple.com/in/app/icarus-football-schools/id6642678272" },
        { type: "Play store", url: "https://play.google.com/store/apps/details?id=com.icarusfs.app&pcampaignid=web_share" }
      ]
    },
    {
      title: "Emotion-based Sentiment System",
      description: "ML-powered system using Keras and Haar cascade for real-time employee expression analysis and HR reporting.",
      tags: ["Python", "Keras", "ML"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/shankara-hacks.git" }]
    },
    {
      title: "Agro-Detect",
      description: "AI-driven agricultural platform providing crop disease detection and soil-based crop recommendations.",
      tags: ["Python", "React", "ML"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/jai-kisaan.git" }]
    },
    {
      title: "High-Performance WP Engine",
      description: "Custom WordPress ecosystem migration from Next.js, optimized for LCP/FCP and structured schema SEO.",
      tags: ["PHP", "Next.js", "SEO"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht" }]
    }
  ],
  education: {
    degree: "B.Tech, Computer Science",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad",
    period: "2018 – 2022",
    achievements: ["Graduated with Distinction", "University Football Captain"]
  },
  certifications: [
    "ACI Nationwide Hackathon Challenge Winner (2019)",
    "IISF Kolkata Project Showcase Finalist (2019)",
    "2nd Prize, Anveshana Science Exhibition"
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