import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div 
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm",
        hover && "transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};
