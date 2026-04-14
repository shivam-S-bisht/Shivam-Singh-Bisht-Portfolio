import React from 'react';
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Shivam Singh Bisht",
  title: "Software Engineer II",
  location: "Noida, India",
  contact: {
    phone: "+91-9315254390",
    email: "bishtshivam096@gmail.com",
    linkedin: "https://linkedin.com/in/shivambisht2001",
    github: "https://github.com/shivam-S-bisht"
  },
  summary: "Highly skilled Software Engineer with 4.5+ years of experience building scalable web and mobile applications. Proficient in React, Next.js, SvelteKit, Node.js, TypeScript, and React Native. Experienced in AI-driven development, Figma-to-code automation, and intelligent tooling. Strong background in white-label platforms, OTA updates, and deploying 60+ apps across iOS and Android.",
  experience: [
    {
      role: "Software Engineer 2",
      company: "Daxko",
      location: "Noida, India",
      period: "Aug 2023 – Present",
      points: [
        "Integrated Figma APIs with AI agents to convert design layers into production-ready UI component code.",
        "Created AI-powered fitness challenge platform that uses real-time posture tracking and intelligent leaderboards.",
        "Developed hybrid applications using React Native, SvelteKit, GitLab CI, and TypeScript.",
        "Led the solution for in-house over-the-air update for React Native Expo applications.",
        "Active contributions on in-house One UI library across all the apps, built over React Native.",
        "Launched 60+ white-labeled apps and a container app for iOS and Android.",
        "Created voice-enabled API for staff users with MCP server integration.",
        "Led migration from Capacitor to React Native, improving performance and UX.",
        "Integrated Apple HealthKit, push notifications, and deep linking.",
        "Followed unit test-driven development using Jest and React Testing Library."
      ]
    },
    {
      role: "Software Engineer 1",
      company: "Byju's Exam Prep",
      location: "Noida, India",
      period: "Jan 2022 – Aug 2023",
      points: [
        "Built UI features using Next.js, React.js, GraphQL, and Webpack.",
        "Created UI component library using Svelte and Vite.",
        "Led a team of 2–3 developers while developing the UI component library.",
        "Developed custom SEO-optimized WordPress theme and migrated content from Next.js.",
        "Integrated GTM, GA, Firebase, and Clevertap across platforms.",
        "Developed real-time poll feature using GraphQL subscriptions.",
        "Worked on WebRTC and Janus integrations to enhance live class UX.",
        "Improved page insights by 98%, boosted lead conversion 1.5x, and grew organic traffic from 13k to 60k users/day."
      ]
    },
    {
      role: "Software Engineer",
      company: "Datapitcher",
      location: "Remote",
      period: "Jul 2021 – Jan 2022",
      points: [
        "Built full web platform using React.js and Redux.",
        "Developed backend with Django REST, GraphQL, and MySQL.",
        "Led a team of 2–3 developers across multiple client projects."
      ]
    }
  ],
  skills: [
    { name: "Frontend", skills: ["React.js", "Next.js", "SvelteKit", "Node.js", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { name: "Mobile / Hybrid", skills: ["React Native", "Capacitor"] },
    { name: "Backend", skills: ["Node.js", "Django REST Framework", "GraphQL", "MySQL"] },
    { name: "Tools & Analytics", skills: ["GTM", "GA", "Firebase", "Clevertap", "Instana", "Rapid7", "Rancher", "Docker", "Git", "CI/CD"] },
    { name: "Other", skills: ["SEO", "White-labeling", "OTA Updates"] }
  ],
  projects: [
    {
      title: "LinkedIn Autopilot",
      description: "AI-Powered LinkedIn Daily Posting Engine with Telegram approval flow. Topic discovery from NewsAPI, Hacker News, and RSS feeds. Voice support via Telegram with Whisper transcription.",
      tags: ["AI", "Telegram", "NewsAPI", "Whisper"],
      links: []
    },
    {
      title: "ForgePilot",
      description: "A CLI tool that automates coding tasks based on Jira tickets. Pulls context like designs, docs, and repo guidelines automatically, then launches AI agents to execute the work efficiently. Released to GitHub Package Registry.",
      tags: ["CLI", "AI Agents", "Jira", "TypeScript"],
      links: []
    },
    {
      title: "AI Form Filler",
      description: "An intelligent Chrome extension that automatically fills any web form using AI. Supports 11 AI providers (Groq, OpenAI, Anthropic, DeepSeek, Google AI, etc.) with automatic fallback. Review edits and learn from corrections to improve future fills.",
      tags: ["Chrome Extension", "AI", "Multi-Provider", "JavaScript"],
      links: []
    },
    {
      title: "Expression Sentiment Analysis",
      description: "ML model using Keras with a Haar cascade classifier to divide expressions into 8 classifications. Records employee expressions daily and sends an average expression report to the HR manager.",
      tags: ["Python", "Keras", "ML", "OpenCV"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/shankara-hacks.git" }]
    },
    {
      title: "Agro-Tech Platform",
      description: "ML-powered web application for crop recommendation and disease detection. Helps farmers identify crop diseases and provides cures.",
      tags: ["Python", "ML", "React", "Agriculture"],
      links: [{ type: "Project Link", url: "https://github.com/shivam-S-bisht/jai-kisaan.git" }]
    }
  ],
  education: {
    degree: "B.Tech, Computer Science",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, India",
    period: "Jul 2018 – Jul 2022",
    achievements: [
      "Graduated with Distinction",
      "Represented CSE department and college in football, badminton, and hackathons"
    ]
  },
  certifications: [
    "Challenge ACI Nationwide Hackathon, Hyderabad (Oct 2019)",
    "Project showcased at IISF, Kolkata (2019)",
    "2nd prize at Anveshana Science Exhibition, Delhi – ₹5,000 cash award"
  ],
  interests: ["Football", "Badminton", "Trekking"]
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