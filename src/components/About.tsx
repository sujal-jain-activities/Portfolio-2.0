import React from 'react';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech CSE at St. Mary's Engineering College, focused on modern software development practices and emerging technologies."
    },
    {
      icon: Code,
      title: "Development",
      description: "Specializing in full-stack development with MERN stack, creating responsive and scalable web applications."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about exploring new technologies and implementing creative solutions to complex problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="hero-gradient">Me</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              I'm a Computer Science Engineering student at St. Mary's Engineering College 
              with a passion for full-stack development and creating impactful digital experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  As a dedicated Computer Science Engineering student, I've immersed myself 
                  in the world of full-stack development, with a particular focus on the 
                  MERN stack ecosystem.
                </p>
                <p>
                  My journey began with curiosity about how digital products work, and has 
                  evolved into a deep passion for creating seamless user experiences backed 
                  by robust, scalable architectures.
                </p>
                <p>
                  Currently, I'm working on various full-stack projects that challenge me 
                  to think critically about user needs, system design, and modern development 
                  practices. I believe in writing clean, maintainable code and staying 
                  current with industry trends.
                </p>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-6 animate-fade-in-up">
              {highlights.map((item, index) => (
                <Card key={index} className="card-glow bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <item.icon size={24} className="text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up">
            {[
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies Used", value: "15+" },
              { label: "Years Learning", value: "3+" },
              { label: "Lines of Code", value: "50K+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold hero-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;