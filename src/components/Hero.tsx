import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '@/data/profile';

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
    <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden />
    <div
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.13] blur-[120px]"
      style={{ background: 'hsl(var(--primary))' }}
      aria-hidden
    />

    <div className="mx-auto max-w-content px-6 md:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <motion.div {...rise(0)} className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {PROFILE.availability}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {PROFILE.location}
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.06)}
            className="text-[2.5rem] font-semibold leading-[1.04] tracking-tightest sm:text-[3.1rem] lg:text-[3.35rem]"
          >
            <span className="block">I build the platforms</span>
            <span className="block text-primary">engineers ship on.</span>
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-muted-foreground"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
            <span className="mx-1 hidden h-6 w-px bg-border sm:block" />
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </motion.div>
        </div>

        {/* the platform, as a stack */}
        <motion.figure
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="rounded-lg border border-border bg-surface/80 p-6 backdrop-blur md:p-7"
        >
          <figcaption className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <span className="label">Platform I operate</span>
            <span className="font-mono text-[11px] text-primary">prod</span>
          </figcaption>

          <dl className="space-y-4 border-l border-border pl-5">
            {PROFILE.stack.map((row) => (
              <div
                key={row.layer}
                className="relative before:absolute before:-left-5 before:top-[0.65em] before:h-px before:w-3 before:bg-border-strong"
              >
                <dt className="font-mono text-[12.5px] leading-5 text-primary">{row.layer}</dt>
                <dd className="mt-0.5 font-mono text-[12px] leading-5 text-muted-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
            GM Financial · payments, authentication, vehicle financing
          </p>
        </motion.figure>
      </div>

      {/* metrics */}
      <motion.dl
        {...rise(0.3)}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-4"
      >
        {PROFILE.metrics.map((m) => (
          <div key={m.label} className="bg-background p-6 md:p-7">
            <dt className="flex flex-wrap items-baseline gap-x-1.5">
              <span className="font-mono text-[2rem] font-semibold leading-none tracking-tightest md:text-[2.4rem]">
                {m.value}
              </span>
              <span className="font-mono text-[13px] text-primary">{m.unit}</span>
            </dt>
            <dd className="mt-3 text-[13px] leading-snug text-muted-foreground">{m.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>

    {/* tech marquee */}
    <div className="relative mt-16 overflow-hidden border-y border-border py-4 md:mt-20">
      <div className="flex w-max animate-marquee gap-8 will-change-transform">
        {[...PROFILE.marquee, ...PROFILE.marquee].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  </section>
);
