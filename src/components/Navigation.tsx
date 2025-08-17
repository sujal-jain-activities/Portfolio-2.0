import React, { useState, useEffect } from 'react';
import { Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileSidebar from './MobileSidebar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold hero-gradient"
        >
          Sujal Jain
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/sujal-jain-activities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:jainsujal139@gmail.com"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navigation;