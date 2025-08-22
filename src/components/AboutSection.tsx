import { GraduationCap, Target, Heart, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by curiosity and powered by code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-3" />
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate backend developer with a strong foundation in{' '}
                  <span className="text-primary font-semibold">Computer Science and AI/ML</span>. 
                  My journey began with curiosity about how systems work behind the scenes, 
                  and has evolved into a deep expertise in building robust, scalable backend architectures.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through my <span className="text-primary font-semibold">Integrated M.Tech</span> program, 
                  I've gained comprehensive knowledge in algorithms, data structures, and machine learning, 
                  which I apply to solve complex backend challenges with innovative solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground flex items-center">
                  <Target className="w-6 h-6 text-primary mr-3" />
                  My Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My career goal is to architect and build{' '}
                  <span className="text-primary font-semibold">scalable, reliable systems</span>{' '}
                  that can handle millions of users while maintaining optimal performance. 
                  I believe in writing clean, maintainable code and implementing best practices 
                  for security, monitoring, and deployment.
                </p>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Education Card */}
                <div className="project-card">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">Education</h4>
                      <p className="text-primary font-medium">Integrated M.Tech</p>
                      <p className="text-muted-foreground">Computer Science (AI & ML)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive curriculum covering algorithms, data structures, 
                        machine learning, and software engineering principles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expertise Card */}
                <div className="project-card">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Code className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">Expertise</h4>
                      <p className="text-secondary font-medium">Backend Architecture</p>
                      <p className="text-muted-foreground">Scalable Systems Design</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Specialized in building distributed systems, implementing caching strategies, 
                        and optimizing database performance for high-traffic applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Values */}
                <div className="space-y-4 p-6 bg-gradient-surface rounded-lg border border-border">
                  <h4 className="text-lg font-semibold text-foreground">Core Values</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-primary font-medium">Quality</p>
                      <p className="text-sm text-muted-foreground">Clean, maintainable code</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-primary font-medium">Performance</p>
                      <p className="text-sm text-muted-foreground">Optimized systems</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-primary font-medium">Reliability</p>
                      <p className="text-sm text-muted-foreground">Robust architecture</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-primary font-medium">Innovation</p>
                      <p className="text-sm text-muted-foreground">Modern solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;