import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-7 right-7 z-40 rounded-md border border-border bg-surface p-3 text-muted-foreground shadow-lg backdrop-blur transition-all duration-300 hover:border-primary hover:text-primary',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-[18px] w-[18px]" />
    </button>
  );
};
