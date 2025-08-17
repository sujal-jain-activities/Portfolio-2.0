import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI Workflow Automation",
      description: "Automated workflow system using N8N for data processing and AI-powered decision making in business processes.",
      technologies: ["N8N", "AI APIs", "Webhooks", "Database Integration"],
      type: "Automation",
      status: "Completed",
      github: "https://github.com/sujal-jain-activities",
      demo: null
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      type: "Frontend",
      status: "Completed",
      github: "https://github.com/sujal-jain-activities",
      demo: "https://example.com"
    },
    {
      title: "Shoe Showcase Website",
      description: "A modern e-commerce showcase website for shoes built with React and Shadcn UI components, featuring product galleries, filters, and responsive design.",
      technologies: ["React", "Shadcn UI", "TypeScript", "Tailwind CSS"],
      type: "Frontend",
      status: "Completed",
      github: "https://github.com/sujal-jain-activities",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="hero-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              frontend design, and automation solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-glow bg-card border-border group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <CardDescription className="text-text-secondary leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button 
              variant="outline"
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/sujal-jain-activities', '_blank')}
            >
              View More Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;