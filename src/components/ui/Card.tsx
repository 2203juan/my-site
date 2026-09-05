import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => (
  <div
    className={cn(
      'rounded-lg border border-border bg-surface p-6 md:p-7',
      hover &&
        'transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_1px_0_0_hsl(var(--primary)/0.25),0_16px_40px_-24px_hsl(var(--foreground)/0.35)]',
      className,
    )}
  >
    {children}
  </div>
);
