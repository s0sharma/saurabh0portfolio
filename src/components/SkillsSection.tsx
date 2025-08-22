import { Database, Server, Cloud, GitBranch, Monitor, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Server,
      color: 'text-primary',
      skills: ['Python', 'Django', 'FastAPI', 'SQL']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-secondary',
      skills: ['PostgreSQL', 'MySQL', 'Redis']
    },
    {
      title: 'Message Queues',
      icon: Zap,
      color: 'text-warning',
      skills: ['RabbitMQ', 'Kafka', 'Celery']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-success',
      skills: ['AWS (EC2, S3, Athena)', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      color: 'text-primary',
      skills: ['Git', 'GitHub', 'REST APIs']
    },
    {
      title: 'Architecture & Monitoring',
      icon: Monitor,
      color: 'text-secondary',
      skills: ['Caching', 'Event-driven Architecture', 'Debugging & Monitoring']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building robust backend systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="project-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/30 rounded-lg group-hover:bg-accent/50 transition-colors duration-300">
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="skill-tag"
                          style={{ animationDelay: `${(index * 4 + skillIndex) * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Competencies */}
          <div className="bg-gradient-surface rounded-2xl p-8 border border-border">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Core <span className="text-primary">Competencies</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">API Development</h4>
                  <p className="text-sm text-muted-foreground">RESTful services with optimal performance</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Database Design</h4>
                  <p className="text-sm text-muted-foreground">Efficient schemas and query optimization</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-warning" />
                  </div>
                  <h4 className="font-semibold text-foreground">System Architecture</h4>
                  <p className="text-sm text-muted-foreground">Scalable and maintainable systems</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="font-semibold text-foreground">Cloud Deployment</h4>
                  <p className="text-sm text-muted-foreground">AWS infrastructure and containerization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;