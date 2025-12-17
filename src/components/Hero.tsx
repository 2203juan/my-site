import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/data/profile';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for new projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Cloud Architecture & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              AI-Driven DevOps
            </span>
          </h1>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {PROFILE.headline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto justify-center"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
