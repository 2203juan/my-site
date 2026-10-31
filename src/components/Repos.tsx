import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Repos = () => (
  <Section
    id="github"
    index="06"
    eyebrow="Open source"
    title="Code you can read, not just claims."
    lede="Public repositories from my thesis, my M.Sc. and side projects. The production platform work above lives in private enterprise repos; these are the parts I can show."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {PROFILE.repos.map((r) => (
        <article
          key={r.name}
          className="group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_10px_40px_-18px_hsl(var(--primary)/0.45)]"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <h3 className="truncate font-mono text-[14px] font-semibold tracking-tight">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0 after:rounded-lg after:content-['']"
                >
                  {r.name}
                </a>
              </h3>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>

          <p className="flex-1 text-[14px] leading-relaxed text-muted-foreground">{r.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {r.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {'live' in r && r.live && (
              <a
                href={r.live}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 ml-auto inline-flex items-center gap-1 font-mono text-[11.5px] text-primary hover:underline"
              >
                live
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-8">
      <a
        href={PROFILE.social.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
      >
        <Github className="h-4 w-4" />
        All repositories on GitHub
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </Section>
);
