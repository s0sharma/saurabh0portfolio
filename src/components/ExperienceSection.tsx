import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Dataweave',
      role: 'Backend Developer',
      type: 'Intern + Full-time',
      period: '2023 - Present',
      location: 'Bangalore, India',
      description: 'Building scalable backend services and data processing systems',
      achievements: [
        'Built robust backend services using Python & SQL for high-traffic e-commerce platforms',
        'Implemented message queuing solutions with RabbitMQ, Kafka, and AWS Athena for real-time data processing',
        'Collaborated effectively in agile sprints and conducted thorough code reviews',
        'Debugged and resolved critical production issues, improving system reliability by 30%',
        'Delivered end-to-end features from database design to API implementation'
      ],
      technologies: ['Python', 'SQL', 'RabbitMQ', 'Kafka', 'AWS Athena', 'PostgreSQL'],
      color: 'border-primary/50'
    },
    {
      company: 'IIIT Bangalore',
      role: 'Research Summer Intern',
      type: 'Research Internship',
      period: 'Summer 2022',
      location: 'Bangalore, India',
      description: 'Research and development in algorithm visualization and UI design',
      achievements: [
        'Developed and optimized algorithms for visualization of 2D learning maps',
        'Assisted in designing user-friendly interfaces for educational technology platforms',
        'Gained practical experience in algorithm development and optimization techniques',
        'Contributed to data visualization research with focus on educational applications',
        'Enhanced UI/UX design skills through hands-on interface development'
      ],
      technologies: ['Algorithm Design', 'Data Visualization', 'UI/UX Design', 'Research'],
      color: 'border-secondary/50'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building impactful solutions across research and industry
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="timeline-dot flex-shrink-0 mt-6" />

                  {/* Experience Card */}
                  <div className={`flex-1 project-card ${exp.color}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <div className="flex items-center space-x-2 text-primary font-semibold">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                              <span className="text-muted-foreground">• {exp.type}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-lg">{exp.description}</p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="skill-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center space-y-2 p-6 bg-gradient-surface rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-gradient-surface rounded-lg border border-border">
              <div className="text-3xl font-bold text-secondary">10+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-gradient-surface rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;