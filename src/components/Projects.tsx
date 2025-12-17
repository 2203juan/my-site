import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { PROFILE } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Case studies demonstrating complex problem solving and architectural design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROFILE.projects.map((project, index) => (
          <Card key={index} className="group cursor-pointer h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full border border-border text-xs font-medium text-muted-foreground bg-secondary/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
