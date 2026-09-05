import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

const Group = ({
  category,
  icon: Icon,
  items,
  note,
  accent = false,
}: {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  note?: string;
  accent?: boolean;
}) => (
  <div
    className={`rounded-lg border p-6 transition-colors duration-300 md:p-7 ${
      accent
        ? 'border-primary/35 bg-primary-soft/40'
        : 'border-border bg-surface hover:border-border-strong'
    }`}
  >
    <div className="mb-5 flex items-center gap-3">
      <Icon className="h-[18px] w-[18px] text-primary" />
      <h3 className="text-[15px] font-semibold tracking-tight">{category}</h3>
    </div>
    {note && <p className="mb-5 text-[13px] leading-snug text-muted-foreground">{note}</p>}
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills = () => (
  <Section
    id="skills"
    index="03"
    eyebrow="Stack"
    title="What I can defend in a technical interview."
    lede="Listed by real depth, not by how good it looks. The first six are what I use in production every week."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {PROFILE.skills.core.map((g) => (
        <Group key={g.category} {...g} />
      ))}
    </div>

    <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
      <Group {...PROFILE.skills.ai} accent />
      <Group {...PROFILE.skills.languages} />
    </div>

    <p className="mt-8 max-w-prose border-l-2 border-border pl-4 text-[13.5px] leading-relaxed text-muted-foreground">
      {PROFILE.skills.footnote}
    </p>
  </Section>
);
