import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Github, Mail, User, Code, FolderOpen, MessageCircle } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero', icon: User },
    { label: 'About', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Code },
    { label: 'Projects', id: 'projects', icon: FolderOpen },
    { label: 'Contact', id: 'contact', icon: MessageCircle },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="sm">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] bg-card border-border">
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="text-2xl font-bold hero-gradient">
            Sujal Jain
          </SheetTitle>
          <SheetDescription className="text-text-secondary">
            Full-Stack Developer & AI Enthusiast
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-4">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 w-full p-3 rounded-lg text-left text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <IconComponent size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wide">
            Connect
          </h4>
          <div className="space-y-3">
            <a 
              href="https://github.com/sujal-jain-activities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:jainsujal139@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;