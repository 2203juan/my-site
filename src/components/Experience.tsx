import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Experience = () => (
  <Section
    id="experience"
    index="04"
    eyebrow="Experience"
    title="5+ years in the cloud, the last four on one financial platform."
    lede="I started as a junior DevOps engineer in July 2021 and joined the GM Financial account in January 2022. I have been on the same platform ever since — through a promotion to senior and a change of consulting firm."
  >
    <div className="space-y-14 md:space-y-16">
      {PROFILE.experience.map((org) => (
        <div key={org.company} className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-xl font-semibold tracking-tight">{org.company}</h3>
            <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {org.period}
            </p>
            <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {org.mode}
            </p>
            {org.badge && (
              <p className="mt-4 inline-block rounded-md border border-primary/35 bg-primary-soft/50 px-2.5 py-1 font-mono text-[11px] tracking-tight text-primary">
                {org.badge}
              </p>
            )}
          </div>

          <div className="relative space-y-10 border-l border-border pl-7 md:pl-9">
            {org.roles.map((role) => (
              <div key={role.title} className="relative">
                <span className="absolute -left-[calc(1.75rem+3.5px)] top-2 h-[7px] w-[7px] rounded-full bg-primary ring-4 ring-background md:-left-[calc(2.25rem+3.5px)]" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-[16.5px] font-semibold tracking-tight">{role.title}</h4>
                  {role.client && (
                    <span className="font-mono text-[11.5px] text-primary">
                      Client: {role.client}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
                  {role.period}
                </p>

                <ul className="mt-4 space-y-3">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative max-w-prose pl-5 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2.5 before:bg-border-strong"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
