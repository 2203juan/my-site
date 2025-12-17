import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { PROFILE } from '@/data/profile';

export const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit for building and maintaining enterprise-grade cloud platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.skills.map((skillGroup) => (
          <Card key={skillGroup.category} className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <skillGroup.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span 
                  key={item}
                  className="px-2.5 py-0.5 rounded-full border border-border text-xs font-medium text-muted-foreground bg-secondary/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
