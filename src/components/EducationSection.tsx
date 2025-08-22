import { GraduationCap, Award, BookOpen, Brain } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Academic <span className="bg-gradient-primary bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strong foundation in computer science with specialized focus on AI and machine learning
            </p>
          </div>

          {/* Main Education Card */}
          <div className="max-w-4xl mx-auto">
            <div className="project-card border-primary/50 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              
              <div className="relative space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Integrated M.Tech</h3>
                      <p className="text-xl text-primary font-semibold">Computer Science (AI & ML)</p>
                      <p className="text-muted-foreground">5-Year Integrated Program</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-primary font-semibold">In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Program Overview */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Pursuing a comprehensive 5-year integrated program that combines undergraduate 
                    and postgraduate studies in Computer Science with specialized focus on 
                    <span className="text-primary font-semibold"> Artificial Intelligence</span> and 
                    <span className="text-primary font-semibold"> Machine Learning</span>.
                  </p>

                  {/* Curriculum Highlights */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Core Computer Science */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <BookOpen className="w-5 h-5 text-secondary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Core Computer Science</h4>
                      </div>
                      <div className="space-y-2 pl-10">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">Data Structures & Algorithms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">Database Management Systems</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">Computer Networks</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">Operating Systems</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">Software Engineering</span>
                        </div>
                      </div>
                    </div>

                    {/* AI & ML Specialization */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Brain className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">AI & ML Specialization</h4>
                      </div>
                      <div className="space-y-2 pl-10">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">Machine Learning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">Deep Learning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">Natural Language Processing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">Computer Vision</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">Statistical Analysis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-gradient-surface rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Program Benefits</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-primary font-bold text-lg">5</span>
                      </div>
                      <p className="font-medium text-foreground">Years</p>
                      <p className="text-sm text-muted-foreground">Comprehensive curriculum</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                        <Brain className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="font-medium text-foreground">AI/ML Focus</p>
                      <p className="text-sm text-muted-foreground">Specialized knowledge</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">Dual Degree</p>
                      <p className="text-sm text-muted-foreground">Bachelor's + Master's</p>
                    </div>
                  </div>
                </div>

                {/* Impact on Backend Development */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Impact on Backend Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This comprehensive education provides me with a unique perspective on backend development, 
                    combining traditional computer science principles with cutting-edge AI/ML techniques. 
                    This enables me to build intelligent systems that can adapt, learn, and scale efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;