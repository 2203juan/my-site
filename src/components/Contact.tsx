import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './ui/Section';
import { PROFILE } from '@/data/profile';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  return (
    <Section id="contact" index="08" eyebrow="Contact">
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-9 md:p-14">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden />

        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[26ch] text-balance text-3xl font-semibold tracking-tightest md:text-[2.5rem] md:leading-[1.1]">
              Hiring for a platform, cloud or AI-infrastructure role?
            </h2>
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-muted-foreground">
              I am open to remote positions with teams in US time zones. If you are building
              developer platforms, running Kubernetes at scale, or putting LLM systems into
              production, I would like to hear about it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}?subject=Opportunity%20for%20Juan%20Hoyos`}
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Send an email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <dl className="space-y-5 lg:pt-2">
            <div className="rounded-md border border-border bg-background p-5">
              <dt className="label mb-2">Email</dt>
              <dd className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="break-all font-mono text-[13px] text-foreground hover:text-primary"
                >
                  {PROFILE.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </dd>
            </div>

            <div className="rounded-md border border-border bg-background p-5">
              <dt className="label mb-2">Location</dt>
              <dd className="text-[14px] leading-snug">
                {PROFILE.location}
                <span className="block text-muted-foreground">{PROFILE.availability}</span>
              </dd>
            </div>

            <div className="rounded-md border border-border bg-background p-5">
              <dt className="label mb-2">Résumé</dt>
              <dd>
                <a
                  href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
};
