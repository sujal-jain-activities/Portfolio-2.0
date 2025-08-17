import React, { useState } from 'react';
import { Mail, Github, ExternalLink, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jainsujal139@gmail.com",
      link: "mailto:jainsujal139@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sujal-jain-activities",
      link: "https://github.com/sujal-jain-activities"
    },
    {
      icon: ExternalLink,
      label: "Fiverr",
      value: "fiverr.com/sujal",
      link: "https://fiverr.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="hero-gradient">Touch</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-glow bg-card border-border animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-muted border-border"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-muted border-border"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border"
                      placeholder="Project discussion, job opportunity, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-muted border-border resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <Card className="card-glow bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <info.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">{info.label}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-text-secondary hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="card-glow bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary mb-6">
                    Download my resume to learn more about my experience, education, 
                    and technical skills.
                  </p>
                  <Button 
                    onClick={() => console.log('Download resume')}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                  >
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-glow bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Available for Projects</h4>
                      <p className="text-sm text-text-secondary">
                        Open to freelance work and collaborations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;