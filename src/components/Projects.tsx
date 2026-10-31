import { GraduationCap } from 'lucide-react';
import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Projects = () => {
  const [featured, ...rest] = PROFILE.projects;

  return (
    <Section
      id="ai-work"
      index="05"
      eyebrow="AI Work"
      title="Agents, retrieval and the infrastructure they need."
      lede={PROFILE.projectsNote}
    >
      <div className="mb-5 rounded-lg border border-primary/35 bg-primary-soft/40 p-7 md:p-9">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <GraduationCap className="h-[18px] w-[18px] text-primary" />
          <h3 className="text-lg font-semibold tracking-tight">{featured.title}</h3>
          <span className="font-mono text-[11.5px] text-primary">{featured.subtitle}</span>
        </div>
        <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
          {featured.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {featured.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {rest.map((p) => (
          <article
            key={p.title}
            className="group rounded-lg border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
          >
            {p.icon && (
              <span className="mb-5 grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-2 text-primary transition-colors group-hover:border-primary/40">
                <p.icon className="h-[18px] w-[18px]" />
              </span>
            )}
            <h3 className="text-[15px] font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-1.5 font-mono text-[11.5px] text-primary">{p.subtitle}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};
