import React from 'react';
import { Badge } from '@/components/ui/badge';
import { SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Database Design"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Postman", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Automation & AI",
      skills: ["N8N AI Automation", "Workflow Agents", "API Integration", "Process Automation"]
    },
    {
      title: "Additional Skills",
      skills: ["Problem Solving", "System Design", "Agile Development", "Testing", "Deployment"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="hero-gradient">Skills</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="skill-badge px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Technologies */}
          <div className="mt-20 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              Core <span className="hero-gradient">Technologies</span>
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
              {[
                { name: "React", level: "Advanced", icon: SiReact, color: "#61DAFB" },
                { name: "Node.js", level: "Advanced", icon: SiNodedotjs, color: "#339933" },
                { name: "MongoDB", level: "Intermediate", icon: SiMongodb, color: "#47A248" },
                { name: "Next.js", level: "Intermediate", icon: SiNextdotjs, color: "#000000" },
                { name: "TypeScript", level: "Intermediate", icon: SiTypescript, color: "#3178C6" },
                { name: "Tailwind", level: "Advanced", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "N8N", level: "Advanced", icon: Workflow, color: "#EA4B71" }
              ].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-card border border-border p-3 md:p-4 group-hover:animate-glow-pulse transition-all duration-300 group-hover:scale-110">
                      <IconComponent 
                        className="w-full h-full transition-all duration-300" 
                        style={{ color: tech.color }}
                      />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">{tech.name}</h4>
                    <p className="text-xs md:text-sm text-text-secondary">{tech.level}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;