import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  className?: string;
  bleed?: boolean;
}

export const Section = ({
  children,
  id,
  index,
  eyebrow,
  title,
  lede,
  className,
  bleed = false,
}: SectionProps) => (
  <section
    id={id}
    className={cn('mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-24', className)}
  >
    {(eyebrow || title) && (
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-14"
      >
        {eyebrow && (
          <div className="mb-5 flex items-center gap-3">
            {index && <span className="label text-primary">{index}</span>}
            <span className="label">{eyebrow}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        )}
        {title && (
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tightest md:text-[2.75rem] md:leading-[1.1]">
            {title}
          </h2>
        )}
        {lede && (
          <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-muted-foreground">
            {lede}
          </p>
        )}
      </motion.header>
    )}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={cn(bleed && '-mx-6 md:mx-0')}
    >
      {children}
    </motion.div>
  </section>
);
