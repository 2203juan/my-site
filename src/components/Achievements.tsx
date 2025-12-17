import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { PROFILE } from '@/data/profile';

export const Achievements = () => {
  return (
    <Section id="achievements">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Delivering measurable impact through automation and reliability engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.achievements.map((achievement, index) => (
          <Card key={index} className="border-primary/10">
            <div className="mb-4 text-primary">
              <achievement.icon className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
            <p className="text-muted-foreground">{achievement.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
