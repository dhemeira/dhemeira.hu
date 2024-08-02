import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <Link
      className={clsx(
        'bg-light-primary',
        'dark:bg-dark-primary',
        'px-8',
        'py-2',
        'text-light-text',
        'rounded-lg',
        'text-base/9',
        'inline-block',
        'group',
        'relative',
        'overflow-hidden',
        'font-semibold'
      )}
      to="/">
      {children}
      <div className="group-hover:bg-light-text/15 absolute inset-0" />
    </Link>
  );
};

export default PrimaryButton;
