import { clsx } from 'clsx';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-between',
        'items-center',
        'px-10',
        'md:px-14',
        'py-4',
        'dark:bg-dark-primary/5',
        'bg-light-primary/5',
        'bg-gradient-to-tl',
        'from-light-secondary/30',
        'dark:from-dark-secondary/5',
        'from-30%',
        'to-light-secondary/5',
        'dark:to-dark-secondary/30',
        'gap-2',
        'rounded-3xl',
        'shadow',
        'text-center',
        'tabular-nums',
        'text-light-text/80 dark:text-dark-text/80'
      )}>
      {children}
    </div>
  );
};
