import React from 'react';
import { ChevronDown, Download, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-text-secondary text-lg md:text-xl">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="hero-gradient">Sujal Jain</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Computer Science Engineering student passionate about creating 
              innovative web applications with modern technologies and clean, 
              efficient code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center items-center space-x-6 pt-8">
              <a 
                href="https://github.com/sujal-jain-activities" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                title="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://fiverr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                title="Fiverr Profile"
              >
                <ExternalLink size={24} />
              </a>
              <button 
                onClick={() => console.log('Download resume')}
                className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                title="Download Resume"
              >
                <Download size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-text-secondary hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;