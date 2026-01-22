import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { label: 'About', href: '#hero', id: 'hero' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Awards', href: '#awards', id: 'awards' },
    { label: 'Projects', href: '#projects', id: 'projects' }
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionIds = [...navItems.map(item => item.id), 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card rounded-full px-8 py-3 pointer-events-auto shadow-2xl shadow-black/40 border border-white/10">
        <button 
          onClick={(e) => scrollToSection(e as any, 'hero')}
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          Shivam<span className="text-blue-500 font-black">.</span>
        </button>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.25em]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`transition-all duration-300 relative py-1 ${
                activeSection === item.id 
                  ? 'text-blue-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] rounded-full" />
              )}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
            activeSection === 'contact'
              ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
              : 'bg-white text-slate-950 hover:bg-slate-200 shadow-lg'
          }`}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;