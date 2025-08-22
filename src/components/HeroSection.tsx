import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Backend Developer Workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
        <div className="absolute inset-0 hero-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Saurabh Kumar</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Sharma
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16" />
              <p className="text-xl sm:text-2xl text-primary font-semibold tracking-wide">
                Backend Developer
              </p>
              <div className="h-px bg-gradient-to-r from-primary via-transparent to-transparent w-16" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about building{' '}
            <span className="text-primary font-semibold">scalable</span>,{' '}
            <span className="text-primary font-semibold">reliable</span>, and{' '}
            <span className="text-primary font-semibold">efficient</span>{' '}
            backend systems that power amazing user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-accent/30 hover:bg-accent hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-accent/30 hover:bg-accent hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;