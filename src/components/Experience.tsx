import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
      </div>

      <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
        {PROFILE.experience.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold">{job.role}</h3>
              <span className="text-sm font-medium text-muted-foreground border border-border px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {job.period}
              </span>
            </div>
            
            <div className="text-lg font-medium text-primary mb-4">{job.company}</div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
