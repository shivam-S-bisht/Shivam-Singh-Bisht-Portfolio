import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';
import { RESUME_DATA, Icons } from './constants.tsx';

const App: React.FC = () => {
  const allAccomplishments = [
    ...RESUME_DATA.certifications,
    ...RESUME_DATA.education.achievements
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      
      <Navbar />

      <main>
        {/* Hero Section */}
        <Section id="hero" className="pt-32 md:pt-48 min-h-[90vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Available for New Opportunities</p>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
                  Shivam <br />
                  <span className="gradient-text">Singh Bisht</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-5">
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`} 
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl hover:bg-blue-500 transition-all font-bold shadow-2xl shadow-blue-900/40 flex items-center gap-3"
                >
                  Get In Touch
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl hover:text-blue-400 transition-all">
                    <Icons.Linkedin />
                  </a>
                  <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl hover:text-white transition-all">
                    <Icons.Github />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-[4rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-2 glass-card rounded-[4rem] border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
                <img 
                  src="https://github.com/shivam-S-bisht.png" 
                  alt="Shivam Singh Bisht" 
                  className="w-full aspect-square object-cover rounded-[3.5rem] transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Technology Stack Section */}
        <Section id="skills" title="Technology Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESUME_DATA.skills.map((category, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/10 group transition-all duration-500 hover:border-blue-500/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="skill-pill px-4 py-2 text-sm font-medium text-slate-300 rounded-xl cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Work Experience">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8">
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Bridging the gap between design and scalable engineering with a focus on performance and cross-platform consistency.
              </p>
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-3xl border-l-4 border-l-blue-500">
                  <h4 className="font-black text-white text-3xl mb-1">40+</h4>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Mobile Apps Launched</p>
                </div>
                <div className="p-6 glass-card rounded-3xl border-l-4 border-l-purple-500">
                  <h4 className="font-black text-white text-3xl mb-1">98%</h4>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Performance Efficiency</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </div>
          </div>
        </Section>

        {/* Accomplishments Section */}
        <Section id="awards" title="Accomplishments & Awards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAccomplishments.map((award, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Icons.Trophy />
                  </div>
                  <div>
                    <p className="text-slate-100 font-bold leading-tight group-hover:text-blue-400 transition-colors">
                      {award}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-2">Recognition</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Core Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </Section>

        {/* Contact Footer */}
        <footer id="contact" className="py-32 border-t border-white/5 bg-slate-950/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card p-12 md:p-20 rounded-[4rem] text-center space-y-10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                 Let's build the <span className="gradient-text">future together.</span>
               </h2>
               <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                 Available for engineering roles, technical consultations, and strategic partnerships.
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                 <a 
                   href={`mailto:${RESUME_DATA.contact.email}`} 
                   className="bg-white text-slate-950 px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
                 >
                   bishtshivam096@gmail.com
                 </a>
                 <div className="flex gap-4">
                    <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 glass-card rounded-2xl text-slate-400 hover:text-blue-400 transition-all"><Icons.Linkedin /></a>
                    <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="p-5 glass-card rounded-2xl text-slate-400 hover:text-white transition-all"><Icons.Github /></a>
                 </div>
               </div>
            </div>
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-mono text-xs uppercase tracking-widest">
              <p>&copy; {new Date().getFullYear()} Shivam Singh Bisht</p>
              <div className="flex gap-8">
                <a 
                  href="#hero" 
                  onClick={(e) => scrollToSection(e, 'hero')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Back to Top
                </a>
                <span>Built with precision</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;