import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS, PROFILE } from '@/data/profile';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-2 font-mono text-[13px] font-semibold tracking-tight text-primary transition-colors group-hover:border-primary">
            JH
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
            {PROFILE.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 font-mono text-[12.5px] tracking-tight transition-colors',
                active === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-border" />
          <ThemeToggle />
          <a
            href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-md border border-border-strong px-3.5 py-1.5 font-mono text-[12.5px] tracking-tight transition-colors hover:border-primary hover:text-primary"
          >
            Résumé
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-content px-6 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-border/60 py-3 font-mono text-sm text-muted-foreground last:border-0 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
              target="_blank"
              rel="noreferrer"
              className="block py-3 font-mono text-sm text-primary"
            >
              Résumé (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
