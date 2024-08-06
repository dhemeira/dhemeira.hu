import clsx from 'clsx';
import React from 'react';

export const SkipToMain = () => {
  return (
    <a
      href="#main"
      className={clsx(
        'fixed left-0 top-24 z-[100] p-5 pl-8 rounded-r-full',
        'bg-light-secondary/30 text-light-text text-center dark:bg-dark-secondary/30 dark:text-dark-text',
        'opacity-0 -translate-x-72 transition-all',
        'focus:opacity-100 focus:translate-x-0',
        'focus:outline focus:outline-light-text dark:focus:outline-dark-text focus:outline-2 focus:outline-offset-0'
      )}>
      Ugrás az oldal
      <br />
      tartalmára
    </a>
  );
};
