import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saurabh.kumar@email.com',
      href: 'mailto:saurabh.kumar@email.com',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saurabh-sharma',
      href: 'https://linkedin.com/in/saurabh-sharma',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/saurabh-sharma',
      href: 'https://github.com/saurabh-sharma',
      color: 'text-muted-foreground'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your next backend project or explore collaboration opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, challenging projects, 
                  or simply connecting with fellow developers. Whether you have a question about 
                  backend architecture or want to collaborate on something exciting, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 project-card group"
                    >
                      <div className="p-3 bg-accent/30 rounded-lg group-hover:bg-accent/50 transition-colors duration-300">
                        <IconComponent className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-surface rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Looking for Backend Development?
                  </h4>
                  <p className="text-muted-foreground">
                    I specialize in building scalable, reliable backend systems. 
                    Let's discuss how I can help bring your project to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="project-card">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Drop me a line and I'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 border-t border-border">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Based in Bangalore, India • Open to Remote Opportunities</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Typically respond within 24 hours • Available for freelance and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;