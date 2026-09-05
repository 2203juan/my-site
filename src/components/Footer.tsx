import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '@/data/profile';

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-2 font-mono text-[13px] font-semibold text-primary">
          JH
        </span>
        <div>
          <div className="text-sm font-semibold tracking-tight">{PROFILE.name}</div>
          <div className="font-mono text-[11.5px] text-muted-foreground">{PROFILE.role}</div>
        </div>
      </div>

      <p className="font-mono text-[11.5px] text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE.fullName}
      </p>

      <div className="flex items-center gap-1">
        <a
          href={PROFILE.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-[18px] w-[18px]" />
        </a>
        {PROFILE.social.github && (
          <a
            href={PROFILE.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
        )}
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Email"
        >
          <Mail className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  </footer>
);
