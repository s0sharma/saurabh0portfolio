import { ExternalLink, Github, Database, Zap, MessageSquare, Shield, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Scalable Booking System',
      description: 'High-performance booking system with real-time availability tracking, built to handle thousands of concurrent bookings with Redis caching and Kafka event streaming.',
      icon: Briefcase,
      technologies: ['Django', 'FastAPI', 'Redis', 'Kafka', 'PostgreSQL'],
      features: [
        'Real-time seat availability',
        'Concurrent booking handling',
        'Event-driven architecture',
        'Performance optimization'
      ],
      color: 'border-primary/50 hover:border-primary',
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      title: 'Inventory Management System',
      description: 'Comprehensive inventory tracking system with automated stock management, supplier integration, and detailed analytics for business intelligence.',
      icon: Database,
      technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
      features: [
        'Automated stock tracking',
        'Supplier management',
        'Analytics dashboard',
        'Low-stock alerts'
      ],
      color: 'border-secondary/50 hover:border-secondary',
      gradient: 'from-secondary/10 to-secondary/5'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with WebSocket connections, message history, and real-time notifications using FastAPI and Redis for optimal performance.',
      icon: MessageSquare,
      technologies: ['FastAPI', 'WebSockets', 'Redis', 'PostgreSQL'],
      features: [
        'Real-time messaging',
        'Message persistence',
        'User presence indicators',
        'File sharing'
      ],
      color: 'border-warning/50 hover:border-warning',
      gradient: 'from-warning/10 to-warning/5'
    },
    {
      title: 'Rate Limiting Service',
      description: 'Distributed rate limiting service with multiple algorithms, Redis backend, and flexible configuration for API protection and traffic management.',
      icon: Shield,
      technologies: ['FastAPI', 'Redis', 'Docker', 'Nginx'],
      features: [
        'Multiple rate limit algorithms',
        'Distributed architecture',
        'Real-time monitoring',
        'Flexible configuration'
      ],
      color: 'border-success/50 hover:border-success',
      gradient: 'from-success/10 to-success/5'
    },
    {
      title: 'Job Application Tracker',
      description: 'Complete job application management system with application tracking, interview scheduling, and progress analytics to streamline the job search process.',
      icon: Zap,
      technologies: ['Django', 'PostgreSQL', 'Celery', 'Redis'],
      features: [
        'Application tracking',
        'Interview scheduling',
        'Progress analytics',
        'Email notifications'
      ],
      color: 'border-primary/50 hover:border-primary',
      gradient: 'from-primary/10 to-primary/5'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building solutions that solve real-world problems with modern technology
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className={`group project-card ${project.color} relative overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-accent/30 rounded-lg group-hover:bg-accent/50 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center pt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Want to see more of my work?
              </p>
              <Button variant="outline" size="lg" className="group">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View All Projects on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;