import clsx from 'clsx';
import React, { createElement } from 'react';
import { IconType } from 'react-icons';

interface IconElementProps {
  icon: IconType;
  text: string;
}

export const IconElement = ({ icon, text }: IconElementProps) => (
  <div
    className={clsx(
      'flex flex-row items-center justify-center py-2 divide-x-2 divide-light-text/30 dark:divide-dark-text/80',
      'bg-light-primary/5 dark:bg-dark-primary/5',
      'from-30% bg-gradient-to-tl',
      'from-light-secondary/30 dark:from-dark-secondary/5',
      'to-light-secondary/5 dark:to-dark-secondary/30',
      'rounded-full shadow tabular-nums border-2 border-light-text/80 dark:border-dark-text/80',
      'text-light-text/80 dark:text-dark-text/80'
    )}>
    <span className="text-nowrap px-4 md:px-8">{text}</span>
    <span className="px-4 md:px-8">
      {createElement(icon, { className: 'w-6 h-6 md:w-8 md:h-8' })}
    </span>
  </div>
);
