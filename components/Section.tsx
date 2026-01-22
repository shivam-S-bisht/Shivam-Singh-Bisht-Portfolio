
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto w-full scroll-mt-24 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">#</span>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
