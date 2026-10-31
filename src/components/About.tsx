import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

const FACTS: [string, string][] = [
  ['Role', PROFILE.role],
  ['Experience', '5+ years · since July 2021'],
  ['Focus', 'Azure · Kubernetes · Terraform · CI/CD'],
  ['Domain', 'Financial services platforms'],
  ['Based in', `${PROFILE.location} — remote, US time zones`],
  ['Languages', 'Spanish (native) · English (professional)'],
  ['Studying', 'M.Sc. Artificial Intelligence & Data Science'],
];

export const About = () => (
  <Section
    id="about"
    index="01"
    eyebrow="About"
    title="Platform engineering, with production consequences."
  >
    <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
      <div className="space-y-6">
        {PROFILE.about.map((p, i) => (
          <p key={i} className="max-w-prose text-[17px] leading-[1.75] text-muted-foreground">
            {p}
          </p>
        ))}
      </div>

      <aside className="space-y-5">
        <div className="overflow-hidden rounded-lg border border-border bg-surface-2">
          <img
            src={`${import.meta.env.BASE_URL}foto-Juan-Hoyos.jpeg`}
            alt={PROFILE.name}
            width={560}
            height={560}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-center"
          />
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <div className="label mb-5">At a glance</div>
          <dl className="space-y-4 text-sm">
            {FACTS.map(([k, v]) => (
              <div key={k} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-1.5 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  </Section>
);
