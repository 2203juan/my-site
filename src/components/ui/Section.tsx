import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
