import React from 'react';
import { Github, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold hero-gradient">
                Sujal Jain
              </h3>
              <p className="text-text-secondary">
                Full Stack Developer passionate about creating innovative 
                web applications with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/sujal-jain-activities" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="mailto:jainsujal139@gmail.com"
                  className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://fiverr.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Fiverr Profile"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-8 pt-8 flex md:flex-row justify-center items-center">
            <p className="text-text-secondary text-sm">
              © {currentYear} Sujal Jain. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;