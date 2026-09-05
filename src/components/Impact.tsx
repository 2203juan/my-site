import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Impact = () => (
  <Section
    id="impact"
    index="02"
    eyebrow="Impact"
    title="Four things that were slow, and are not slow anymore."
    lede="Every number below comes from work on GM Financial's production platform. No estimates, no rounding in my favour."
  >
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
      {PROFILE.impact.map((item) => (
        <article
          key={item.title}
          className="group bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 md:p-9"
        >
          <div className="mb-6 flex items-center gap-3">
            <item.icon className="h-[18px] w-[18px] text-primary" />
            <h3 className="text-[15px] font-semibold tracking-tight">{item.title}</h3>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-lg tracking-tight text-muted-foreground line-through decoration-muted-foreground/40 md:text-xl">
              {item.before}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            <span className="font-mono text-2xl font-semibold tracking-tightest text-primary md:text-[1.75rem]">
              {item.after}
            </span>
          </div>

          <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>

          <ul className="flex flex-wrap gap-2">
            {item.facts.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);
