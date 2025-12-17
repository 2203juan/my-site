import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const About = () => {
  return (
    <Section id="about" className="bg-accent/5 rounded-3xl my-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative max-w-[300px] mx-auto md:mx-0">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
             <img 
               src="/foto-Juan-Hoyos.jpeg" 
               alt={PROFILE.name} 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
             />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border/50 hidden md:block">
            <div className="text-4xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Years of<br/>Experience</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>{PROFILE.bio}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
