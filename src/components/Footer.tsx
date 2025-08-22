import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Quote */}
          <div className="text-center space-y-2">
            <p className="text-lg text-muted-foreground italic">
              "Building the future, one API at a time"
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>using</span>
              <Code className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Blog
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Saurabh Kumar Sharma. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with modern web technologies • Powered by passion for backend engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;