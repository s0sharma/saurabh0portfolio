import { Calendar, Clock, ArrowRight, BookOpen, Code, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Building Scalable APIs with FastAPI and Redis',
      excerpt: 'Learn how to implement caching strategies and optimize API performance for high-traffic applications.',
      category: 'System Design',
      readTime: '8 min read',
      date: 'Dec 15, 2024',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Event-Driven Architecture with Kafka',
      excerpt: 'Understanding message queues and implementing reliable event streaming for distributed systems.',
      category: 'Backend',
      readTime: '12 min read',
      date: 'Dec 10, 2024',
      icon: Brain,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      title: 'Backend Interview Preparation Guide',
      excerpt: 'Complete guide covering system design, algorithms, and common backend engineering interview questions.',
      category: 'Career',
      readTime: '15 min read',
      date: 'Dec 5, 2024',
      icon: BookOpen,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const topics = [
    'System Design',
    'API Development',
    'Database Optimization',
    'Caching Strategies',
    'Message Queues',
    'Cloud Architecture',
    'Interview Prep',
    'Performance Tuning'
  ];

  return (
    <section id="blog" className="py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Tech <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights on system design, backend concepts, and interview preparation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Posts */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Latest Articles</h3>
              
              <div className="space-y-6">
                {blogPosts.map((post, index) => {
                  const IconComponent = post.icon;
                  return (
                    <article
                      key={index}
                      className="project-card group cursor-pointer"
                    >
                      <div className="space-y-4">
                        {/* Post Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 ${post.bgColor} rounded-lg`}>
                              <IconComponent className={`w-5 h-5 ${post.color}`} />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <span className={`${post.color} font-medium`}>{post.category}</span>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* View All Posts */}
              <div className="text-center pt-6">
                <Button variant="outline" size="lg" className="group">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* About Blog */}
              <div className="project-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">About This Blog</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I write about backend engineering, system design patterns, and share insights 
                    from my experience building scalable systems. Join me on this learning journey!
                  </p>
                  <Button variant="hero" size="sm" className="w-full">
                    Subscribe for Updates
                  </Button>
                </div>
              </div>

              {/* Topics */}
              <div className="project-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic, index) => (
                      <button
                        key={index}
                        className="skill-tag hover:bg-primary/20 hover:text-primary hover:border-primary/50"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-surface rounded-lg p-6 border border-border">
                <div className="space-y-4 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified when I publish new articles about backend engineering and system design.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button variant="hero" size="sm" className="w-full">
                      Subscribe
                    </Button>
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

export default BlogSection;