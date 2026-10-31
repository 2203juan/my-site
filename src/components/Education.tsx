import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Education = () => (
  <Section id="education" index="07" eyebrow="Credentials" title="Education & recognition.">
    <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
      <div className="rounded-lg border border-border bg-surface p-7 md:p-9">
        <div className="mb-6 flex items-center gap-3">
          <GraduationCap className="h-[18px] w-[18px] text-primary" />
          <h3 className="text-[15px] font-semibold tracking-tight">Education</h3>
        </div>
        <div className="space-y-7">
          {PROFILE.education.map((e) => (
            <div key={e.degree} className="border-b border-border pb-7 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-[15.5px] font-semibold tracking-tight">{e.degree}</h4>
                <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
                  {e.period}
                </span>
              </div>
              <p className="mt-1.5 text-[14px] text-muted-foreground">
                {e.school} — {e.place}
              </p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-lg border border-border bg-surface p-7">
          <div className="mb-5 flex items-center gap-3">
            <BadgeCheck className="h-[18px] w-[18px] text-primary" />
            <h3 className="text-[15px] font-semibold tracking-tight">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {PROFILE.certifications.map((c) => (
              <li
                key={c}
                className="relative pl-5 text-[14px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2.5 before:bg-border-strong"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-surface p-7">
          <div className="mb-5 flex items-center gap-3">
            <Award className="h-[18px] w-[18px] text-primary" />
            <h3 className="text-[15px] font-semibold tracking-tight">Recognition</h3>
          </div>
          <ul className="space-y-3">
            {PROFILE.recognition.map((r) => (
              <li
                key={r}
                className="relative pl-5 text-[14px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2.5 before:bg-border-strong"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);
