import { PROFILE } from '@/data/profile';
import { Github, Linkedin, Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">DevOps<span className="text-primary">Engineer</span></span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind & TypeScript.</p>
          </div>

          <div className="flex gap-4">
            <a 
              href={PROFILE.social.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={PROFILE.social.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
