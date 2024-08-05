import { clsx } from 'clsx';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-light-primary/5 dark:bg-dark-primary/5',
        'from-30% bg-gradient-to-tl',
        'from-light-secondary/30 dark:from-dark-secondary/5',
        'to-light-secondary/5 dark:to-dark-secondary/30',
        'rounded-3xl shadow tabular-nums',
        'text-light-text/80 dark:text-dark-text/80',
        className
      )}>
      {children}
    </div>
  );
};
